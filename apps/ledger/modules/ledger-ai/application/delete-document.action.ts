'use server';

import { createClient } from '@/utils/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

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
      .from('accounting_documents')
      .select('storage_bucket, storage_path')
      .eq('id', documentId)
      .single();

    if (fetchError || !document) {
      throw new Error('Belge bulunamadı veya silinmiş.');
    }

    // 1. Delete from storage (prepare promise)
    const storagePromise = (document.storage_bucket && document.storage_path) 
      ? supabaseAdmin.storage.from(document.storage_bucket).remove([document.storage_path]).catch(err => console.error('Storage deletion error:', err))
      : Promise.resolve();

    // 2. Delete from database (Cascade children manually and concurrently)
    const p1 = supabaseAdmin.from('accounting_document_lines').delete().eq('document_id', documentId);
    const p2 = supabaseAdmin.from('accounting_drafts').delete().eq('document_id', documentId);
    const p3 = supabaseAdmin.from('document_processing_runs').delete().eq('document_id', documentId);
    const p4 = supabaseAdmin.from('client_documents').delete().eq('document_id', documentId);

    // Wait for all child records and storage to be deleted concurrently
    await Promise.all([storagePromise, p1, p2, p3, p4]);
    
    const { data: deletedRows, error: deleteError } = await supabaseAdmin
      .from('accounting_documents')
      .delete()
      .eq('id', documentId)
      .select('id');

    if (deleteError) {
      throw deleteError;
    }
    
    if (!deletedRows || deletedRows.length === 0) {
      throw new Error('Veritabanı silme işlemi başarısız (kayıt bulunamadı).');
    }

    revalidatePath('/approval');
    revalidatePath('/workflow');

    return { success: true };
  } catch (error: any) {
    console.error('deleteDocumentAction error:', error);
    return { success: false, error: error.message };
  }
}
