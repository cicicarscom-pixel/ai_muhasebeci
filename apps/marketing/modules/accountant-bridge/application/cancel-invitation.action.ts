'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function cancelInvitationAction(invitationId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: 'Yetkisiz erişim. Lütfen giriş yapın.' };
    }

    const adminSupabase = createAdminClient();

    // Verify user is an owner or admin of the accounting firm
    const { data: invitation } = await adminSupabase
      .from('ledger_invitations')
      .select('accounting_firm_id, status')
      .eq('id', invitationId)
      .single();

    if (!invitation) {
      return { success: false, error: 'Davet bulunamadı.' };
    }

    if (invitation.status !== 'pending' && invitation.status !== 'sent') {
      return { success: false, error: 'Sadece beklemedeki davetler iptal edilebilir.' };
    }

    const { data: membership } = await adminSupabase
      .from('accounting_firm_members')
      .select('role')
      .eq('user_id', user.id)
      .eq('accounting_firm_id', invitation.accounting_firm_id)
      .single();

    if (!membership || (membership.role !== 'owner' && membership.role !== 'admin')) {
      return { success: false, error: 'Daveti iptal etmek için yetkiniz bulunmuyor (Sadece Admin veya Owner).' };
    }

    // Cancel Invitation
    const { error: updateError } = await adminSupabase
      .from('ledger_invitations')
      .update({
        status: 'cancelled',
        updated_at: new Date().toISOString()
      })
      .eq('id', invitationId);

    if (updateError) {
      return { success: false, error: `Davet iptal edilemedi: ${updateError.message}` };
    }

    // Audit Event
    await adminSupabase.from('accountant_connection_events').insert({
        event_type: 'invitation.cancelled',
        actor_user_id: user.id,
        accounting_firm_id: invitation.accounting_firm_id,
        previous_status: invitation.status,
        new_status: 'cancelled',
        reason: 'Müşavir tarafından iptal edildi',
        source: 'ledger'
    });

    revalidatePath('/ledger/clients');
    
    return { success: true, message: 'Davet başarıyla iptal edildi.' };

  } catch (error: any) {
    console.error('Cancel Invitation Error:', error);
    return { success: false, error: 'Sunucu hatası oluştu.' };
  }
}
