import { getDocumentDetailsAction } from '../../../../modules/ledger-ai/application/read-documents.action';
import ApprovalClient from './ApprovalClient';
import Link from 'next/link';

export default async function DocumentApprovalDetailPage({ params }: { params: { id: string } }) {
  const result = await getDocumentDetailsAction(params.id);

  if (!result.success || !result.document) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl text-red-600 mb-4">Hata: {result.error || 'Belge bulunamadı'}</h2>
        <Link href="/ledger/approval" className="text-blue-600 underline">Geri Dön</Link>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)]">
      <ApprovalClient 
        document={result.document} 
        draft={result.draft} 
        lines={result.lines || []} 
        imageUrl={result.imageUrl || null} 
      />
    </div>
  );
}
