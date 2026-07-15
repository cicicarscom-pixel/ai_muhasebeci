'use server';

import { createAdminClient } from '@/utils/supabase/admin';
import { GeminiDocumentProvider } from '../providers/gemini-document.provider';

export async function processDocumentAction(documentId: string) {
  const adminSupabase = createAdminClient();
  const provider = new GeminiDocumentProvider();

  try {
    // 1. Get document details
    const { data: document, error: docError } = await adminSupabase
      .from('accounting_documents')
      .select('*')
      .eq('id', documentId)
      .single();

    if (docError || !document) throw new Error('Belge bulunamadı.');

    // 2. Generate short-lived signed URL for the image
    const { data: signedUrlData, error: signedUrlError } = await adminSupabase
      .storage
      .from(document.storage_bucket)
      .createSignedUrl(document.storage_path, 60); // 60 seconds

    if (signedUrlError || !signedUrlData) {
      throw new Error('Dosya erişim linki oluşturulamadı.');
    }

    // 3. Process with AI
    const startedAt = new Date().toISOString();
    const extractionResult = await provider.extractDocumentData(
      signedUrlData.signedUrl,
      document.mime_type || 'image/jpeg'
    );

    // 4. Save Processing Run (AI Decision Event)
    const { data: runRecord, error: runError } = await adminSupabase
      .from('document_processing_runs')
      .insert({
        document_id: documentId,
        model_provider: provider.getProviderId(),
        model_name: 'gemini-1.5-pro-latest',
        raw_output: extractionResult as any,
        normalized_output: extractionResult as any, // In a real app, map this further using rules
        started_at: startedAt,
        completed_at: new Date().toISOString()
      })
      .select('id')
      .single();

    if (runError) console.error('Error saving processing run:', runError);

    // 5. Save Accounting Draft
    // Basic heuristics for Income/Expense based on document type or vendor (For now assume Expense)
    const transactionType = 'expense'; 
    const { data: draftRecord, error: draftError } = await adminSupabase
      .from('accounting_drafts')
      .insert({
        document_id: documentId,
        taxpayer_organization_id: document.taxpayer_organization_id,
        transaction_type: transactionType,
        currency: extractionResult.currency,
        net_amount: extractionResult.netAmount,
        tax_amount: extractionResult.taxAmount,
        gross_amount: extractionResult.totalAmount,
        prepared_by_ai: true,
        draft_status: 'prepared'
      })
      .select('id')
      .single();

    if (draftError) throw new Error('Taslak oluşturulamadı.');

    // 6. Save Document Lines
    if (extractionResult.lines && extractionResult.lines.length > 0) {
      const linesToInsert = extractionResult.lines.map(line => ({
        document_id: documentId,
        description: line.description,
        quantity: line.quantity,
        unit_price: line.unitPrice,
        tax_rate: line.taxRate,
        net_amount: line.netAmount,
        tax_amount: line.taxAmount,
        total_amount: line.totalAmount
      }));

      await adminSupabase.from('accounting_document_lines').insert(linesToInsert);
    }

    // 7. Update Document Status
    await adminSupabase
      .from('accounting_documents')
      .update({
        document_type: extractionResult.documentType,
        processing_status: 'completed',
        review_status: 'pending',
        issue_date: extractionResult.issueDate,
        vendor_name: extractionResult.vendorName,
        vendor_tax_identifier: extractionResult.vendorTaxIdentifier,
        currency: extractionResult.currency,
        net_amount: extractionResult.netAmount,
        tax_amount: extractionResult.taxAmount,
        total_amount: extractionResult.totalAmount
      })
      .eq('id', documentId);

    return { success: true };
  } catch (error: any) {
    console.error('AI Processing Error:', error);

    // Mark as failed
    await adminSupabase
      .from('accounting_documents')
      .update({
        processing_status: 'failed',
        review_status: 'pending' // Still requires human intervention
      })
      .eq('id', documentId);

    return { success: false, error: error.message };
  }
}
