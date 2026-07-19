'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function getWorkflowDocumentsAction(firmId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('accounting_documents')
      .select(`
        *,
        organizations (name),
        accounting_drafts (
           id, ledger_account_code
        )
      `)
      .eq('accounting_firm_id', firmId)
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
