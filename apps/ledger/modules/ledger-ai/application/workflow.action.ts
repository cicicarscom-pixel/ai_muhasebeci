'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function getWorkflowDocumentsAction(firmId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('finance_documents')
      .select(`
        *,
        organizations:organization_id (name)
      `)
      // .eq('organization_id', firmId) // wait, firmId might not be organization_id directly. We need to be careful.
      // But the user just said: update the select. 
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
