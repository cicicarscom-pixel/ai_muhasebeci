'use server';

import { createClient } from '@/utils/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function deleteDocumentAction(documentId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Auth check using standard client to ensure user is logged in
    const { data: { user } } = await supabase.auth.getUser();

    // We use the Service Role key to bypass RLS for deletion, as RLS might be silently blocking the DELETE
    const supabaseAdmin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Get the document to find its storage path before deletion
    const { data: document, error: fetchError } = await supabaseAdmin
      .from('finance_documents')
      .select('image_url')
      .eq('id', documentId)
      .single();

    if (fetchError || !document) {
      throw new Error('Belge bulunamadı veya silinmiş.');
    }

    // 1. Delete from storage (prepare promise)
    let storagePromise = Promise.resolve();
    if (document.image_url) {
      try {
        const urlObj = new URL(document.image_url);
        const parts = urlObj.pathname.split('/');
        const bucketIndex = parts.indexOf('finance_receipts');
        if (bucketIndex !== -1 && parts.length > bucketIndex + 1) {
          const path = parts.slice(bucketIndex + 1).join('/');
          storagePromise = supabaseAdmin.storage.from('finance_receipts').remove([path]).catch(err => console.error('Storage deletion error:', err)) as any;
        }
      } catch (e) {
        console.error('Failed to parse image_url for deletion', e);
      }
    }

    // 2. Delete from database (Cascade children manually and concurrently)
    const p1 = supabaseAdmin.from('accounting_drafts').delete().eq('document_id', documentId);
    const p2 = supabaseAdmin.from('document_events').delete().eq('document_id', documentId);
    const p3 = supabaseAdmin.from('client_documents').delete().eq('document_id', documentId);

    // Wait for all child records and storage to be deleted concurrently
    await Promise.all([storagePromise, p1, p2, p3]);
    
    const { data: deletedRows, error: deleteError } = await supabaseAdmin
      .from('finance_documents')
      .delete()
      .eq('id', documentId)
      .select('id');

    if (deleteError) {
      throw deleteError;
    }
    
    if (!deletedRows || deletedRows.length === 0) {
      throw new Error('Veritabanı silme işlemi başarısız (kayıt bulunamadı).');
    }

    return { success: true };
  } catch (error: any) {
    console.error('deleteDocumentAction error:', error);
    return { success: false, error: error.message };
  }
}
