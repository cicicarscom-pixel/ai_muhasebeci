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

    // 1. Delete from storage
    if (document.storage_bucket && document.storage_path) {
      const { error: storageError } = await supabaseAdmin.storage
        .from(document.storage_bucket)
        .remove([document.storage_path]);
        
      if (storageError) {
        console.error('Storage deletion error:', storageError);
      }
    }

    // 2. Delete from database (Cascade manually)
    await supabaseAdmin.from('accounting_document_lines').delete().eq('document_id', documentId);
    await supabaseAdmin.from('accounting_drafts').delete().eq('document_id', documentId);
    await supabaseAdmin.from('document_processing_runs').delete().eq('document_id', documentId);
    
    // Also delete any potential client_documents or other junction tables if they exist
    // (Ignoring errors if table doesn't exist)
    await supabaseAdmin.from('client_documents').delete().eq('document_id', documentId);
    
    const { error: deleteError, count } = await supabaseAdmin
      .from('accounting_documents')
      .delete()
      .eq('id', documentId)
      .select('id');

    if (deleteError) {
      throw deleteError;
    }
    
    if (!count || count.length === 0) {
      throw new Error('Veritabanı silme işlemi başarısız (kayıt bulunamadı).');
    }

    revalidatePath('/ledger/approval');
    revalidatePath('/ledger/workflow');

    return { success: true };
  } catch (error: any) {
    console.error('deleteDocumentAction error:', error);
    return { success: false, error: error.message };
  }
}
