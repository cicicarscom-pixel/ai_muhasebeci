'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { cookies } from 'next/headers';

export async function uploadDocumentAction(
  firmId: string,
  orgId: string,
  storagePath: string,
  mimeType: string,
  fileSize: number
) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: 'Yetkisiz erişim. Lütfen giriş yapın.' };
    }

    const adminSupabase = createAdminClient();

    // Verify user belongs to the organization
    const { data: orgMember } = await adminSupabase
      .from('organization_members')
      .select('id')
      .eq('organization_id', orgId)
      .eq('user_id', user.id)
      .single();

    if (!orgMember) {
      return { success: false, error: 'Bu kuruma belge yükleme yetkiniz yok.' };
    }

    // Create document record
    const { data: document, error: insertError } = await adminSupabase
      .from('accounting_documents')
      .insert({
        accounting_firm_id: firmId,
        taxpayer_organization_id: orgId,
        uploaded_by_user_id: user.id,
        storage_bucket: 'documents',
        storage_path: storagePath,
        mime_type: mimeType,
        document_type: 'other', // Will be updated by AI
        processing_status: 'processing',
        review_status: 'pending',
        source: 'flow_web'
      })
      .select('id')
      .single();

    if (insertError || !document) {
      console.error('Document insert error:', insertError);
      return { success: false, error: 'Belge kaydı oluşturulamadı.' };
    }

    // Trigger AI processing asynchronously (do not await so client doesn't block)
    // Note: In Next.js App Router, floating promises inside server actions might be cancelled when the response ends.
    // For a robust system, this should be sent to a queue (e.g. Supabase Edge Functions or Inngest).
    // For now, we will await it but return success to client quickly if we use an API route, 
    // or just await it here to ensure it completes on Vercel (max duration applies).
    
    return { success: true, documentId: document.id };
  } catch (error: any) {
    console.error('Upload Exception:', error);
    return { success: false, error: 'Sunucu hatası: ' + (error.message || 'Bilinmiyor') };
  }
}
