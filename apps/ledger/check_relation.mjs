import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing supabase keys");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkRelation() {
  const { data, error } = await supabase
    .from('finance_documents')
    .select(`
      id,
      organization_id,
      organizations (name),
      organizations2:organizations (name)
    `)
    .limit(1);

  if (error) {
    console.error("Error:", error);
    return;
  }
  
  console.log("Data:", JSON.stringify(data, null, 2));
}

checkRelation();
