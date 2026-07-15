import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { getPendingDocumentsAction } from '../../../../modules/ledger-ai/application/read-documents.action';

export default async function ApprovalPage() {
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

  const result = await getPendingDocumentsAction(firmMember.accounting_firm_id);
  const documents = result.data || [];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Evrak Onay Kuyruğu</h1>
          <p className="text-gray-500">Yapay zeka tarafından işlenmiş ve onayınızı bekleyen fiş/faturalar.</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
          {documents.length} Bekleyen Evrak
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 border-b text-gray-900">
            <tr>
              <th className="p-4 font-medium">Mükellef</th>
              <th className="p-4 font-medium">Tedarikçi</th>
              <th className="p-4 font-medium">Tarih</th>
              <th className="p-4 font-medium">Tutar</th>
              <th className="p-4 font-medium text-right">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {documents.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  Şu an onay bekleyen evrak bulunmuyor. Harika!
                </td>
              </tr>
            ) : (
              documents.map((doc: any) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">{doc.organizations?.name || 'Bilinmiyor'}</td>
                  <td className="p-4">{doc.vendor_name || 'Okunamadı'}</td>
                  <td className="p-4">{doc.issue_date || '-'}</td>
                  <td className="p-4">{doc.total_amount ? `${doc.total_amount} ${doc.currency}` : '-'}</td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/ledger/approval/${doc.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      İncele ve Onayla
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
