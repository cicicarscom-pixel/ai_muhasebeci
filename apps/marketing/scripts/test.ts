import { createAdminClient } from '@/utils/supabase/admin';

async function test() {
  try {
    const adminSupabase = createAdminClient();
    const { data } = await adminSupabase.from('accounting_documents').select('id, storage_path, processing_status').order('created_at', {ascending: false}).limit(1);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

test();
