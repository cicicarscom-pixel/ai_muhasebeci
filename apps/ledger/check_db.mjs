import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing supabase keys");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDocs() {
  const { data, error } = await supabase
    .from('finance_documents')
    .select(`
      id,
      organization_id,
      title,
      vendor_name,
      tax_details,
      amount_minor,
      ledger_official_status,
      type
    `)
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error("Error fetching:", error);
    return;
  }
  
  console.log("Documents:", JSON.stringify(data, null, 2));
}

checkDocs();
