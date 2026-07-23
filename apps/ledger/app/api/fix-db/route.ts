import { NextResponse } from 'next/server';
import { createAdminClient } from '@/utils/supabase/admin';

export async function GET() {
  try {
    const supabase = createAdminClient();

    // Fix Organizations RLS
    const { error: dropError } = await supabase.rpc('execute_sql', {
      sql_string: 'DROP POLICY IF EXISTS "Accountants can view linked taxpayer orgs" ON public.organizations;'
    });
    
    // Note: since we probably don't have execute_sql RPC available in the database, 
    // the above might fail. In that case we can't run arbitrary SQL from the client unless 
    // we use a direct Postgres connection. Next.js doesn't have pg installed by default in this repo.
    
    return NextResponse.json({ 
      message: 'Lütfen Supabase SQL Editor üzerinden size gönderdiğim kodu çalıştırın. Güvenlik nedeniyle API üzerinden SQL çalıştırılamadı.',
      dropError
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
