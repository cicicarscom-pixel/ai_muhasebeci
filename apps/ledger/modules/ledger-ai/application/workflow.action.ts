'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

import { createAdminClient } from '@/utils/supabase/admin';

export async function getWorkflowDocumentsAction(firmId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const adminSupabase = createAdminClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Yetkisiz');

    // Verify firm membership
    const { data: firmMember } = await supabase
      .from('accounting_firm_members')
      .select('id')
      .eq('accounting_firm_id', firmId)
      .eq('user_id', user.id)
      .single();
    
    if (!firmMember) throw new Error('Müşavir yetkisi yok');

    // Get linked taxpayer orgs
    const { data: links } = await adminSupabase
      .from('accountant_taxpayer_links')
      .select('taxpayer_organization_id')
      .eq('accounting_firm_id', firmId);
      
    const orgIds = links?.map(l => l.taxpayer_organization_id) || [];

    if (orgIds.length === 0) {
      return { success: true, data: [] };
    }

    const { data, error } = await adminSupabase
      .from('finance_documents')
      .select(`
        *,
        organizations:organization_id (name)
      `)
      .in('organization_id', orgIds)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('getWorkflowDocumentsAction error:', error);
    return { success: false, error: error.message };
  }
}
