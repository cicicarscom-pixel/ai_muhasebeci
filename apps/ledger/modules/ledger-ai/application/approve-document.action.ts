'use server';

import { createClient } from '@/utils/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function approveDocumentAction(
  documentId: string, 
  accountId: string, 
  rememberRule: boolean,
  vendorName: string,
  vendorTaxId: string,
  fieldValues?: Record<string, string>
) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Oturum bulunamadı.');

    const supabaseAdmin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // DEBUG: Log that the action started
    await supabaseAdmin.from('ai_decision_events').insert({
      document_id: documentId,
      decision_type: 'debug_action_start',
      explanation: 'Server Action approveDocumentAction started successfully.'
    });

    // 1. Get the document to verify firm access
    const { data: document, error: docError } = await supabaseAdmin
      .from('finance_documents')
      .select('organization_id, tax_details')
      .eq('id', documentId)
      .single();

    if (docError || !document) throw new Error('Belge bulunamadı.');

    // 2. Merge existing tax_details with any user edits from fieldValues
    let existingDetails: any = {};
    if (document.tax_details) {
      try {
        existingDetails = typeof document.tax_details === 'string'
          ? JSON.parse(document.tax_details)
          : document.tax_details;
      } catch (e) {}
    }
    const mergedDetails = {
      ...existingDetails,
      ...(fieldValues || {})
    };

    // 3. Update the document - lock all field values and set status to 'onaylandi'
    const { error: updateDocError } = await supabaseAdmin
      .from('finance_documents')
      .update({ 
        ledger_official_status: 'onaylandi',
        tax_details: mergedDetails,
        title: fieldValues?.title || existingDetails.title || vendorName
      })
      .eq('id', documentId);

    if (updateDocError) throw new Error('Belge durumu güncellenemedi: ' + updateDocError.message);

    // 4. Update Draft Status
    const { error: draftError } = await supabaseAdmin
      .from('accounting_drafts')
      .update({
        ledger_account_code: accountId,
        draft_status: 'approved',
        reviewed_by_user_id: user.id,
        reviewed_at: new Date().toISOString()
      })
      .eq('document_id', documentId);

    if (draftError) {
      console.warn('Draft update error (may not exist):', draftError);
    }

    // 5. Create Memory Rule if requested
    if (rememberRule && vendorName && document.organization_id) {
      const { data: rule, error: ruleError } = await supabaseAdmin
        .from('ledger_ai_rules')
        .insert({
          scope_level: 'taxpayer_supplier_rule',
          taxpayer_organization_id: document.organization_id,
          supplier_tax_identifier: vendorTaxId || vendorName,
          rule_type: 'account_code_mapping',
          condition_json: { vendor_name: vendorName },
          action_json: { account_code: accountId },
          created_by_user_id: user.id
        })
        .select('id')
        .single();

      if (!ruleError && rule) {
        await supabaseAdmin.from('ai_decision_events').insert({
          taxpayer_organization_id: document.organization_id,
          document_id: documentId,
          decision_type: 'rule_created',
          explanation: `${vendorName} için ${accountId} hesap kodu kuralı oluşturuldu.`,
          rule_id: rule.id
        });
      }
    }

    return { success: true };
  } catch (error: any) {
    console.error('approveDocumentAction error:', error);
    let msg = 'Bilinmeyen Hata';
    try {
      msg = error?.message || String(error);
    } catch(e) {}
    
    // Attempt to log the error to DB if possible
    try {
      const adminClient = createAdminClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      await adminClient.from('ai_decision_events').insert({
        document_id: documentId,
        decision_type: 'debug_action_error',
        explanation: 'Action caught error: ' + msg
      });
    } catch(e) {}

    return { success: false, error: msg };
  }
}
