'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { cookies } from 'next/headers';

export async function getPendingDocumentsAction(firmId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('finance_documents')
      .select(`
        id,
        type,
        created_at,
        title,
        amount_minor,
        currency_code,
        ledger_official_status,
        flow_payment_status,
        organization_id,
        organizations (name)
      `)
      .eq('ledger_official_status', 'taslak')
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
      .from('finance_documents')
      .select(`
        *,
        organization_id,
        organizations (name)
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

    return {
      success: true,
      document,
      draft,
      lines: lines || [],
      imageUrl: document.image_url || null
    };
  } catch (error: any) {
    console.error('getDocumentDetailsAction error:', error);
    return { success: false, error: error.message };
  }
}
