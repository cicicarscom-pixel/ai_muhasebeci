import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import WorkflowPage from '@/components/ledger/workflow/WorkflowPage';
import { getWorkflowDocumentsAction } from '../../modules/ledger-ai/application/workflow.action';

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
  
  if (!result.success) {
    return (
      <div className="p-8 flex flex-col items-center justify-center h-full text-red-500">
        <h2 className="text-xl font-bold mb-4">Veritabanı Hatası</h2>
        <p className="bg-red-50 p-4 border border-red-200 rounded-lg whitespace-pre-wrap">{result.error}</p>
      </div>
    );
  }

  const documents = result.data || [];

  return <WorkflowPage initialDocuments={documents} />;
}
