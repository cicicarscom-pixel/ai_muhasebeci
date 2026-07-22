'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { approveDocumentAction } from '../../../modules/ledger-ai/application/approve-document.action';

export default function ApprovalClient({ document, draft, lines, imageUrl }: { document: any, draft: any, lines: any[], imageUrl: string | null }) {
  const router = useRouter();
  const [accountId, setAccountId] = useState(draft?.ledger_account_code || '');
  const [rememberRule, setRememberRule] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApprove = async () => {
    if (!accountId) {
      alert('Lütfen bir hesap kodu giriniz.');
      return;
    }

    setIsSubmitting(true);
    const res = await approveDocumentAction(
      document.id, 
      accountId, 
      rememberRule, 
      document.vendor_name, 
      document.vendor_tax_identifier
    );

    if (!res.success) {
      alert('Onaylama başarısız: ' + res.error);
      setIsSubmitting(false);
    } else {
      router.push('/approval');
      router.refresh();
    }
  };

  return (
    <div className="flex h-full w-full bg-gray-50">
      {/* Left Pane: Document Image */}
      <div className="w-1/2 p-4 border-r border-gray-200 bg-gray-100 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Orijinal Belge</h2>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-300 overflow-auto flex justify-center p-4">
          {imageUrl ? (
            <img src={imageUrl} alt="Document" className="object-contain h-full w-full" />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Görsel yüklenemedi.
            </div>
          )}
        </div>
      </div>

      {/* Right Pane: Extracted Data & Action */}
      <div className="w-1/2 p-6 flex flex-col h-full overflow-auto bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Evrak İnceleme: {document.organizations?.name}</h2>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Onay Bekliyor</span>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Tedarikçi (Satıcı)</label>
            <div className="p-3 border rounded-lg bg-gray-50 font-medium">{document.vendor_name || '-'}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Vergi No / TCKN</label>
            <div className="p-3 border rounded-lg bg-gray-50 font-medium">{document.vendor_tax_identifier || '-'}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Tarih</label>
            <div className="p-3 border rounded-lg bg-gray-50 font-medium">{document.issue_date || '-'}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Belge Tipi</label>
            <div className="p-3 border rounded-lg bg-gray-50 font-medium capitalize">{document.document_type}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 border rounded-xl bg-gray-50 border-gray-200">
            <div className="text-sm text-gray-500 mb-1">Matrah (Net)</div>
            <div className="text-xl font-bold">{document.net_amount} {document.currency}</div>
          </div>
          <div className="p-4 border rounded-xl bg-gray-50 border-gray-200">
            <div className="text-sm text-gray-500 mb-1">KDV (Vergi)</div>
            <div className="text-xl font-bold text-blue-600">{document.tax_amount} {document.currency}</div>
          </div>
          <div className="p-4 border rounded-xl bg-blue-50 border-blue-200">
            <div className="text-sm text-blue-700 mb-1">Genel Toplam</div>
            <div className="text-2xl font-bold text-blue-900">{document.total_amount} {document.currency}</div>
          </div>
        </div>

        {/* AI Karar ve Taslak Bölümü */}
        <div className="mt-auto border-t pt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Muhasebe Taslağı (Ledger AI)
          </h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Hesap Kodu Önerisi / Seçimi</label>
            <input 
              type="text" 
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="Örn: 770.01.02"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-lg"
            />
          </div>

          {document.vendor_name && (
            <div className="flex items-start gap-3 mb-6 bg-purple-50 p-4 rounded-lg border border-purple-100">
              <input 
                type="checkbox" 
                id="remember" 
                checked={rememberRule}
                onChange={(e) => setRememberRule(e.target.checked)}
                className="mt-1 w-5 h-5 rounded text-purple-600 focus:ring-purple-500 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-purple-900 cursor-pointer">
                <strong>Hafızaya Kaydet (Kural Oluştur):</strong> Bundan sonra <strong>{document.organizations?.name}</strong> mükellefi için <strong>{document.vendor_name}</strong> firmasından gelen faturalara otomatik olarak <strong>{accountId || '...'}</strong> hesap kodunu öner.
              </label>
            </div>
          )}

          <div className="flex gap-4">
            <button 
              onClick={() => router.push('/approval')}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button 
              onClick={handleApprove}
              disabled={isSubmitting}
              className="flex-1 bg-green-600 text-white font-medium rounded-xl py-3 hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Onaylanıyor...' : 'Taslağı Resmî Kayda Çevir ve Onayla'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
