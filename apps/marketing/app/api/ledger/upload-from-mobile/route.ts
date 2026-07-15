import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { processDocumentAction } from '@/modules/ledger-ai/application/process-document.action';

export async function POST(req: NextRequest) {
  try {
    // 1. Verify Authorization Header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing or invalid Authorization header' }, { status: 401 });
    }
    const token = authHeader.split(' ')[1];

    const adminSupabase = createAdminClient();

    // 2. Get User from Token
    const { data: { user }, error: authError } = await adminSupabase.auth.getUser(token);
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    // 3. Parse Request Body
    const body = await req.json();
    const { image, mimeType, transactionType } = body; // image is base64Data

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // 4. Find User's Organization
    const { data: orgMember, error: orgError } = await adminSupabase
      .from('organization_members')
      .select('organization_id')
      .eq('user_id', user.id)
      .single();

    if (orgError || !orgMember) {
      return NextResponse.json({ error: 'User does not belong to any organization' }, { status: 403 });
    }
    const orgId = orgMember.organization_id;

    // 5. Find Linked Accounting Firm
    const { data: link, error: linkError } = await adminSupabase
      .from('accountant_taxpayer_links')
      .select('accounting_firm_id')
      .eq('taxpayer_organization_id', orgId)
      .eq('status', 'active')
      .single();

    if (linkError || !link) {
      return NextResponse.json({ error: 'No active accounting firm link found' }, { status: 403 });
    }
    const firmId = link.accounting_firm_id;

    // 6. Decode Base64 and Upload to Supabase Storage
    // Remove any data URI prefix if it exists (handles images and PDFs)
    const base64Data = image.replace(/^data:(image|application)\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const actualMimeType = mimeType || 'image/jpeg';
    const fileExt = actualMimeType === 'application/pdf' ? 'pdf' : 'jpg';
    
    const storagePath = `receipts/${user.id}/${Date.now()}.${fileExt}`;
    
    const { error: uploadError } = await adminSupabase.storage
      .from('documents')
      .upload(storagePath, buffer, {
        contentType: actualMimeType,
        upsert: false
      });

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return NextResponse.json({ error: 'Failed to upload document image. ' + uploadError.message }, { status: 500 });
    }

    // 7. Insert Record into accounting_documents
    const { data: document, error: insertError } = await adminSupabase
      .from('accounting_documents')
      .insert({
        accounting_firm_id: firmId,
        taxpayer_organization_id: orgId,
        uploaded_by_user_id: user.id,
        storage_bucket: 'documents',
        storage_path: storagePath,
        mime_type: actualMimeType,
        document_type: transactionType === 'income' ? 'sales_invoice' : 'purchase_invoice',
        processing_status: 'processing',
        review_status: 'pending',
        source: 'flow_mobile'
      })
      .select('id')
      .single();

    if (insertError || !document) {
      console.error('Document insert error:', insertError);
      return NextResponse.json({ error: 'Failed to create document record' }, { status: 500 });
    }

    // 8. Trigger AI Processing
    const processRes = await processDocumentAction(document.id);

    if (!processRes.success) {
      console.error('AI Processing failed:', processRes.error);
      // We don't fail the request completely so the document stays in the queue for manual review.
    }

    // 9. Fetch processed data and save to old `transactions` table for the mobile app's calendar!
    const { data: updatedDoc } = await adminSupabase
      .from('accounting_documents')
      .select('*')
      .eq('id', document.id)
      .single();

    if (updatedDoc && updatedDoc.total_amount) {
      const txType = updatedDoc.document_type === 'sales_invoice' ? 'income' : 'expense';
      
      await adminSupabase.from('transactions').insert({
        profile_id: user.id,
        title: updatedDoc.vendor_name || 'Fatura/Fiş',
        amount: updatedDoc.total_amount,
        type: txType,
        date: updatedDoc.issue_date || new Date().toISOString().split('T')[0],
        receipt_url: storagePath
      });
    }

    // Return success
    return NextResponse.json({ 
      success: true, 
      documentId: document.id, 
      message: 'Belge başarıyla onay kuyruğuna gönderildi ve takvime işlendi.' 
    });

  } catch (error: any) {
    console.error('Mobile upload API error:', error);
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
  }
}
