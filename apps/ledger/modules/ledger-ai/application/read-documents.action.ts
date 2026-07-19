'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { cookies } from 'next/headers';

export async function getPendingDocumentsAction(firmId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('accounting_documents')
      .select(`
        id,
        document_type,
        issue_date,
        vendor_name,
        total_amount,
        currency,
        processing_status,
        review_status,
        created_at,
        organizations!accounting_documents_taxpayer_organization_id_fkey (name)
      `)
      .eq('accounting_firm_id', firmId)
      .eq('review_status', 'pending')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('getPendingDocumentsAction error:', error);
    return { success: false, error: error.message };
  }
}

export async function getDocumentDetailsAction(documentId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Get document metadata
    const { data: document, error: docError } = await supabase
      .from('accounting_documents')
      .select(`
        *,
        organizations!accounting_documents_taxpayer_organization_id_fkey (name)
      `)
      .eq('id', documentId)
      .single();

    if (docError || !document) throw new Error('Belge bulunamadı.');

    // Get Accounting Draft
    const { data: draft } = await supabase
      .from('accounting_drafts')
      .select('*')
      .eq('document_id', documentId)
      .single();

    // Get Document Lines
    const { data: lines } = await supabase
      .from('accounting_document_lines')
      .select('*')
      .eq('document_id', documentId)
      .order('created_at', { ascending: true });

    // Generate Signed URL for the image using Admin Client (since bucket is private without RLS)
    const adminSupabase = createAdminClient();
    const { data: signedUrlData, error: signedUrlError } = await adminSupabase
      .storage
      .from(document.storage_bucket)
      .createSignedUrl(document.storage_path, 3600); // 1 hour

    if (signedUrlError) {
      console.error('Error generating signed URL:', signedUrlError);
    }

    return {
      success: true,
      document,
      draft,
      lines: lines || [],
      imageUrl: signedUrlData?.signedUrl || null
    };
  } catch (error: any) {
    console.error('getDocumentDetailsAction error:', error);
    return { success: false, error: error.message };
  }
}
