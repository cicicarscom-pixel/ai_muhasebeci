import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { getDocumentDetailsAction, getPendingDocumentsAction } from '../../../../modules/ledger-ai/application/read-documents.action';
import ApprovalPage from '@/components/ledger/approval/ApprovalPage';

export default async function Page({ params }: { params: { id: string } }) {
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

  // Fetch queue and active document in parallel
  const [queueResult, detailResult] = await Promise.all([
    getPendingDocumentsAction(firmMember.accounting_firm_id),
    getDocumentDetailsAction(params.id)
  ]);

  if (!detailResult.success) {
    return (
      <div className="flex flex-col h-full items-center justify-center bg-surface text-text">
        <h1 className="text-2xl font-bold text-warning mb-4">Hata: Belge bulunamadı.</h1>
        <a href="/ledger/approval" className="text-primary hover:underline">Geri Dön</a>
      </div>
    );
  }

  const queue = queueResult.data || [];
  const result = detailResult.data;

  return (
    <ApprovalPage 
      queue={queue}
      activeDocument={result.document}
      draft={result.draft}
      imageUrl={result.imageUrl || null}
    />
  );
}
