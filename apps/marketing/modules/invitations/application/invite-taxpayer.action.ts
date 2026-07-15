'use server';

import { createClient } from '../../../utils/supabase/server';
import { createAdminClient } from '../../../utils/supabase/admin';
import { cookies } from 'next/headers';
import crypto from 'crypto';
import { InvitationRepository } from '../infrastructure/invitation.repository';
import { MockWhatsAppGateway } from '../infrastructure/whatsapp.gateway';
import { DuplicateActiveInvitationError, InvalidPhoneFormatError, AuthorizationError } from '../domain/invitation-errors';

// Tam uyumlu E.164 formatı Regex (+ ile başlar, 1-15 rakam içerir)
const E164_REGEX = /^\+[1-9]\d{1,14}$/;

export async function inviteTaxpayerAction(formData: FormData) {
  try {
    const cookieStore = await cookies();
    const supabaseUserClient = createClient(cookieStore);
    
    // 1. Yetki ve Kullanıcı Kontrolü
    const { data: { user }, error: authError } = await supabaseUserClient.auth.getUser();
    
    if (authError || !user) {
      throw new AuthorizationError("Oturum bulunamadı. Lütfen giriş yapın.");
    }

    const accountantId = user.id;
    // Gerçek senaryoda bu değer kullanıcının profil (memberships) tablosundan çekilmelidir.
    // Şimdilik demo veya metadata üzerinden alınıyor gibi kurgulanmıştır.
    const accountingFirmId = user.user_metadata?.accounting_firm_id || '00000000-0000-0000-0000-000000000000'; 

    // 2. Girdileri Doğrulama
    const phone = formData.get('phone_number')?.toString().trim();
    const companyName = formData.get('company_name')?.toString().trim();

    if (!phone || !companyName) {
      throw new Error("Telefon numarası ve firma adı zorunludur.");
    }

    if (!E164_REGEX.test(phone)) {
      throw new InvalidPhoneFormatError(phone);
    }

    // 3. Bağımlılıkları Kurma
    // İşlemleri Service Role (Admin) ile yaparak RLS takılmalarını güvenli backend tarafında aşıyoruz
    const supabaseAdmin = createAdminClient();
    const repository = new InvitationRepository(supabaseAdmin);
    const gateway = new MockWhatsAppGateway();

    // 4. Çakışma Kontrolü (Aynı numaraya ait aktif davet var mı?)
    const hasActive = await repository.hasActiveInvitationForPhone(phone);
    if (hasActive) {
      throw new DuplicateActiveInvitationError(phone);
    }

    // 5. Tek Kullanımlık Kriptografik Token Üretimi (Ham ve Hash)
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');

    // Bağlantı süresi 48 saat
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 48);

    // 6. Veritabanına 'pending' olarak yazma (Transaction Start)
    const invitation = await repository.create({
      accounting_firm_id: accountingFirmId,
      accountant_id: accountantId,
      company_name: companyName,
      phone_e164: phone,
      token_hash: tokenHash,
      expires_at: expiresAt.toISOString()
    });

    // 7. Gateway Üzerinden WhatsApp Mesajı Gönderme
    const deliveryResult = await gateway.sendInvitation(invitation, rawToken);

    // 8. Sonuca Göre Durumu Güncelleme (Rollback/Update)
    if (deliveryResult.success) {
      await repository.updateStatus(invitation.id, {
        status: 'sent',
        sent_at: new Date().toISOString(),
        provider_message_id: deliveryResult.messageId
      });
    } else {
      await repository.updateStatus(invitation.id, {
        status: 'failed',
        delivery_status: deliveryResult.error || 'Bilinmeyen Ağ Hatası'
      });
      throw new Error("Davet oluşturuldu ancak WhatsApp servis sağlayıcısı üzerinden iletilemedi.");
    }

    return { success: true, message: "Davet başarıyla WhatsApp üzerinden iletildi." };

  } catch (error: any) {
    console.error('[inviteTaxpayerAction] Hata:', error);
    return {
      success: false,
      error: error.message || "Beklenmeyen bir sunucu hatası oluştu."
    };
  }
}
