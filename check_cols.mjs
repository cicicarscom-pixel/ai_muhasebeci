import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing keys");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase.rpc('get_columns_test', {}); // Just selecting 1 row to see fields
  
  const { data: row, error: err2 } = await supabase
    .from('finance_documents')
    .select('*')
    .limit(1)
    .single();
    
  console.log("Columns in finance_documents:", Object.keys(row || {}));
}

run();
