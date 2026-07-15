import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import WorkflowPage from '@/components/ledger/workflow/WorkflowPage';
import { getWorkflowDocumentsAction } from '../../../modules/ledger-ai/application/workflow.action';

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  // Get firm ID
  const { data: firmMember } = await supabase
    .from('accounting_firm_members')
    .select('accounting_firm_id')
    .eq('user_id', user.id)
    .single();

  if (!firmMember) return <div className="p-8">Müşavir yetkiniz bulunmuyor.</div>;

  const result = await getWorkflowDocumentsAction(firmMember.accounting_firm_id);
  const documents = result.data || [];

  return <WorkflowPage initialDocuments={documents} />;
}
