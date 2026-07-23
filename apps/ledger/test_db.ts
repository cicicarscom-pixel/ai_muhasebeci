import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const adminSupabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('Testing db links...');
  // 1. Get the finance document
  const { data: docs } = await adminSupabase.from('finance_documents').select('*');
  console.log(`Found ${docs?.length} documents.`);
  if (!docs || docs.length === 0) return;

  const doc = docs[0];
  console.log(`Document org_id: ${doc.organization_id}`);

  // 2. Check links
  const { data: links } = await adminSupabase
    .from('accountant_taxpayer_links')
    .select('*')
    .eq('taxpayer_organization_id', doc.organization_id);
  
  console.log(`Found ${links?.length} links for this org.`);
  if (links && links.length > 0) {
    console.log(`Link:`, links[0]);

    // 3. Check members
    const { data: members } = await adminSupabase
      .from('accounting_firm_members')
      .select('*')
      .eq('accounting_firm_id', links[0].accounting_firm_id);
    
    console.log(`Found ${members?.length} members for firm ${links[0].accounting_firm_id}.`);
    if (members && members.length > 0) {
      console.log(`Member user_id:`, members[0].user_id);
    }
  } else {
    // maybe taxpayer_organization_id is null? Let's get all links
    const { data: allLinks } = await adminSupabase.from('accountant_taxpayer_links').select('*').limit(5);
    console.log('Sample links:', allLinks);
  }
}

run();
