'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { InvitationRepository } from '../infrastructure/invitation.repository';
import * as crypto from 'crypto';
import { cookies } from 'next/headers';

export async function getInvitationDetailsAction(rawToken: string) {
  try {
    if (!rawToken) {
      return { success: false, error: 'Geçersiz davet bağlantısı.' };
    }

    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const adminSupabase = createAdminClient();
    const repository = new InvitationRepository(adminSupabase);

    const invitation = await repository.findByTokenHash(tokenHash);

    if (!invitation) {
      return { success: false, error: 'Davet bulunamadı veya silinmiş.' };
    }

    if (invitation.status === 'accepted') {
      return { success: false, error: 'Bu davet zaten kabul edilmiş.' };
    }

    if (invitation.status === 'expired' || new Date(invitation.expires_at) < new Date()) {
      return { success: false, error: 'Bu davetin süresi dolmuş.' };
    }

    // Fetch the accountant's name
    const { data: accountantData } = await adminSupabase
      .from('profiles')
      .select('full_name')
      .eq('id', invitation.accountant_id)
      .single();

    return { 
      success: true, 
      data: {
        id: invitation.id,
        companyName: invitation.company_name,
        phoneE164: invitation.phone_e164,
        accountantName: accountantData?.full_name || 'Mali Müşaviriniz',
        rawToken // pass it back to client temporarily for the next step
      } 
    };
  } catch (error: any) {
    console.error('getInvitationDetailsAction Error:', error);
    return { success: false, error: 'Bir hata oluştu.' };
  }
}
