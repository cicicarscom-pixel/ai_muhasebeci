import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { documentId } = await req.json();

    if (!documentId) {
      return NextResponse.json({ success: false, error: 'Document ID is required' }, { status: 400 });
    }

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Auth check
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ success: false, error: 'Sunucu yapılandırması eksik (Service Role Key)' }, { status: 500 });
    }

    const supabaseAdmin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data: document, error: fetchError } = await supabaseAdmin
      .from('finance_documents')
      .select('image_url')
      .eq('id', documentId)
      .single();

    if (fetchError || !document) {
      return NextResponse.json({ success: false, error: 'Belge bulunamadı veya zaten silinmiş.' }, { status: 404 });
    }

    let storagePromise = Promise.resolve();
    if (document.image_url) {
      try {
        const urlObj = new URL(document.image_url);
        const parts = urlObj.pathname.split('/');
        const bucketIndex = parts.indexOf('finance_receipts');
        if (bucketIndex !== -1 && parts.length > bucketIndex + 1) {
          const path = parts.slice(bucketIndex + 1).join('/');
          storagePromise = supabaseAdmin.storage.from('finance_receipts').remove([path]).catch(err => console.error('Storage error:', err)) as any;
        }
      } catch (e) {}
    }

    const p1 = supabaseAdmin.from('accounting_drafts').delete().eq('document_id', documentId);
    const p2 = supabaseAdmin.from('document_events').delete().eq('document_id', documentId);
    const p3 = supabaseAdmin.from('client_documents').delete().eq('document_id', documentId);

    await Promise.all([storagePromise, p1, p2, p3]);
    
    const { data: deletedRows, error: deleteError } = await supabaseAdmin
      .from('finance_documents')
      .delete()
      .eq('id', documentId)
      .select('id');

    if (deleteError) {
      return NextResponse.json({ success: false, error: deleteError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API delete error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
