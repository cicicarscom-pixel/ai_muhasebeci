'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function approveDocumentAction(
  documentId: string, 
  accountId: string, 
  rememberRule: boolean,
  vendorName: string,
  vendorTaxId: string
) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Oturum bulunamadı.');

    // 1. Get the document to verify firm access
    const { data: document, error: docError } = await supabase
      .from('finance_documents')
      .select('organization_id')
      .eq('id', documentId)
      .single();

    if (docError || !document) throw new Error('Belge bulunamadı.');

    // 2. Update Draft Status
    const { error: draftError } = await supabase
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

    // 3. Update Document Status
    const { error: updateDocError } = await supabase
      .from('finance_documents')
      .update({ ledger_official_status: 'onaylandi' })
      .eq('id', documentId);

    if (updateDocError) throw new Error('Belge durumu güncellenemedi.');

    // 4. Create Memory Rule if requested
    if (rememberRule && vendorName && document.organization_id) {
      // Create a rule for this taxpayer + supplier
      const { data: rule, error: ruleError } = await supabase
        .from('ledger_ai_rules')
        .insert({
          scope_level: 'taxpayer_supplier_rule',
          taxpayer_organization_id: document.organization_id,
          supplier_tax_identifier: vendorTaxId || vendorName, // Use name as fallback if no tax ID
          rule_type: 'account_code_mapping',
          condition_json: { vendor_name: vendorName },
          action_json: { account_code: accountId },
          created_by_user_id: user.id
        })
        .select('id')
        .single();

      if (!ruleError && rule) {
        // Log the decision event
        await supabase.from('ai_decision_events').insert({
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
    return { success: false, error: error.message };
  }
}
