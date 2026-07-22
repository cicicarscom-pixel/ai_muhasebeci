'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function disconnectTaxpayerAction(linkId: string, reason: string = 'Müşavir tarafından iptal edildi') {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: 'Yetkisiz erişim. Lütfen giriş yapın.' };
    }

    const adminSupabase = createAdminClient();

    // Verify user is an owner or admin of the accounting firm this link belongs to
    const { data: link } = await adminSupabase
      .from('accountant_taxpayer_links')
      .select('accounting_firm_id, taxpayer_organization_id, status')
      .eq('id', linkId)
      .single();

    if (!link) {
      return { success: false, error: 'Bağlantı bulunamadı.' };
    }

    if (link.status !== 'active') {
      return { success: false, error: 'Sadece aktif bağlantılar kesilebilir.' };
    }

    const { data: membership } = await adminSupabase
      .from('accounting_firm_members')
      .select('role')
      .eq('user_id', user.id)
      .eq('accounting_firm_id', link.accounting_firm_id)
      .single();

    if (!membership || (membership.role !== 'owner' && membership.role !== 'admin')) {
      return { success: false, error: 'Bağlantıyı kesmek için yetkiniz bulunmuyor (Sadece Admin veya Owner).' };
    }

    // Disconnect
    const { error: updateError } = await adminSupabase
      .from('accountant_taxpayer_links')
      .update({
        status: 'disconnected',
        disconnected_at: new Date().toISOString(),
        disconnected_by_user_id: user.id,
        disconnect_reason: reason,
        disconnect_source: 'ledger',
        updated_at: new Date().toISOString()
      })
      .eq('id', linkId)
      .eq('status', 'active');

    if (updateError) {
      return { success: false, error: `Bağlantı kesilemedi: ${updateError.message}` };
    }

    // Audit Event
    await adminSupabase.from('accountant_connection_events').insert({
        event_type: 'connection.disconnected_by_accounting_firm',
        actor_user_id: user.id,
        accounting_firm_id: link.accounting_firm_id,
        taxpayer_organization_id: link.taxpayer_organization_id,
        previous_status: 'active',
        new_status: 'disconnected',
        reason: reason,
        source: 'ledger'
    });

    revalidatePath('/ledger/clients');
    
    return { success: true, message: 'Bağlantı başarıyla kesildi.' };

  } catch (error: any) {
    console.error('Disconnect Taxpayer Error:', error);
    return { success: false, error: 'Sunucu hatası oluştu.' };
  }
}
