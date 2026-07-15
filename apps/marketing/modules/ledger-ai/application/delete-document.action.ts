'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function deleteDocumentAction(documentId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Get the document to find its storage path before deletion
    const { data: document, error: fetchError } = await supabase
      .from('accounting_documents')
      .select('storage_bucket, storage_path')
      .eq('id', documentId)
      .single();

    if (fetchError || !document) {
      throw new Error('Belge bulunamadı veya erişim yetkiniz yok.');
    }

    // 1. Delete from storage
    if (document.storage_bucket && document.storage_path) {
      const { error: storageError } = await supabase.storage
        .from(document.storage_bucket)
        .remove([document.storage_path]);
        
      if (storageError) {
        console.error('Storage deletion error:', storageError);
        // We continue even if storage deletion fails so the DB record is cleaned up
      }
    }

    // 2. Delete from database (cascade should handle lines, drafts, etc. if set up, 
    // otherwise we just delete the main record. Since we don't have cascade confirmed, 
    // we should delete drafts and lines first manually just in case)
    await supabase.from('accounting_document_lines').delete().eq('document_id', documentId);
    await supabase.from('accounting_drafts').delete().eq('document_id', documentId);
    await supabase.from('document_processing_runs').delete().eq('document_id', documentId);
    
    const { error: deleteError } = await supabase
      .from('accounting_documents')
      .delete()
      .eq('id', documentId);

    if (deleteError) {
      throw deleteError;
    }

    revalidatePath('/ledger/approval');
    revalidatePath('/ledger/workflow');

    return { success: true };
  } catch (error: any) {
    console.error('deleteDocumentAction error:', error);
    return { success: false, error: error.message };
  }
}
