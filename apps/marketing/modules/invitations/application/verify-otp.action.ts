'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { InvitationRepository } from '../infrastructure/invitation.repository';
import * as crypto from 'crypto';
import { cookies } from 'next/headers';

export async function verifyOtpAndAcceptAction(rawToken: string, phoneE164: string, otp: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const adminSupabase = createAdminClient();
    const repository = new InvitationRepository(adminSupabase);

    // 1. Double check the token hash first
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const invitation = await repository.findByTokenHash(tokenHash);

    if (!invitation || invitation.status === 'accepted') {
      return { success: false, error: 'Geçersiz veya kullanılmış davet.' };
    }

    if (invitation.phone_e164 !== phoneE164) {
      return { success: false, error: 'Bu davet bu numaraya ait değil.' };
    }

    // 2. Verify OTP
    const { data: authData, error: authError } = await supabase.auth.verifyOtp({
      phone: phoneE164,
      token: otp,
      type: 'sms',
    });

    if (authError || !authData.user) {
      console.error('verifyOtp Error:', authError);
      return { success: false, error: 'Hatalı kod girdiniz.' };
    }

    const taxpayerId = authData.user.id;

    // 3. Mark Invitation as Accepted
    await repository.markAsAccepted(invitation.id, taxpayerId);

    // 4. Create the Accountant-Taxpayer Link
    const { error: linkError } = await adminSupabase
      .from('shared_accountant_taxpayer_links')
      .upsert({
        accounting_firm_id: invitation.accounting_firm_id,
        accountant_id: invitation.accountant_id,
        taxpayer_id: taxpayerId,
        status: 'active'
      }, { onConflict: 'accounting_firm_id,taxpayer_id' });

    if (linkError) {
      console.error('linkError:', linkError);
      // Even if link fails, they are authenticated. But we should log it.
    }

    return { success: true };
  } catch (error: any) {
    console.error('verifyOtpAndAcceptAction Error:', error);
    return { success: false, error: 'Bir hata oluştu.' };
  }
}
