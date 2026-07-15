'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { uploadDocumentAction } from '../../../../modules/ledger-ai/application/upload-document.action';
import { processDocumentAction } from '../../../../modules/ledger-ai/application/process-document.action';

export default function UploadDocumentClient({ orgId, firmId }: { orgId: string, firmId: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setStatus('uploading');
      setErrorMsg('');

      const supabase = createClient();
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${orgId}/${fileName}`;

      // 1. Upload to Supabase Storage (Private Bucket)
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file);

      if (uploadError) throw new Error('Dosya yüklenemedi: ' + uploadError.message);

      // 2. Create Document Record
      const uploadRes = await uploadDocumentAction(firmId, orgId, filePath, file.type, file.size);
      
      if (!uploadRes.success || !uploadRes.documentId) {
        throw new Error(uploadRes.error || 'Veritabanı kaydı oluşturulamadı.');
      }

      // 3. Trigger AI Processing
      setStatus('processing');
      const processRes = await processDocumentAction(uploadRes.documentId);

      if (!processRes.success) {
        throw new Error(processRes.error || 'Yapay zeka işleme hatası.');
      }

      setStatus('success');
      setFile(null);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message || 'Beklenmeyen bir hata oluştu.');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          Belgeniz başarıyla yüklendi ve işlendi! Müşavirinizin onayına sunuldu.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
          {errorMsg}
        </div>
      )}

      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50">
        <input 
          type="file" 
          accept="image/*,application/pdf"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
          disabled={status === 'uploading' || status === 'processing'}
        />
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
          </div>
          <span className="font-medium text-gray-700">
            {file ? file.name : 'Fotoğraf Çek veya Seç'}
          </span>
        </label>
      </div>

      <button
        onClick={handleUpload}
        disabled={!file || status === 'uploading' || status === 'processing'}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-blue-700"
      >
        {status === 'uploading' && 'Yükleniyor...'}
        {status === 'processing' && 'Yapay Zeka İnceliyor...'}
        {status === 'idle' && file && 'Yükle ve Gönder'}
        {status === 'idle' && !file && 'Lütfen Belge Seçin'}
        {(status === 'success' || status === 'error') && !file && 'Lütfen Belge Seçin'}
        {(status === 'success' || status === 'error') && file && 'Tekrar Dene'}
      </button>

      {status === 'processing' && (
        <p className="text-xs text-center text-gray-500 animate-pulse">
          Ledger AI belgedeki verileri okuyor, bu işlem 10-15 saniye sürebilir...
        </p>
      )}
    </div>
  );
}
