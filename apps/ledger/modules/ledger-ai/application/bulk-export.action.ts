'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function bulkExportAction(organizationId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('finance_documents')
      .update({ ledger_official_status: 'archived' })
      .eq('organization_id', organizationId)
      .eq('ledger_official_status', 'onaylandi');

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error: any) {
    console.error('bulkExportAction error:', error);
    return { success: false, error: error.message };
  }
}
