import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// read .env.local manually
const envPath = path.resolve(process.cwd(), '../../.env');
let envContent = '';
try {
  envContent = fs.readFileSync(envPath, 'utf-8');
} catch (e) {
  console.log('No .env found');
}

const lines = envContent.split('\n');
let supabaseUrl = '';
let supabaseKey = '';

for (const line of lines) {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) supabaseUrl = line.split('=')[1].trim();
  if (line.startsWith('SUPABASE_SERVICE_ROLE_KEY=')) supabaseKey = line.split('=')[1].trim();
}

if (!supabaseUrl || !supabaseKey) {
  console.log('Missing env vars');
  process.exit(1);
}

const adminSupabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('--- LINKING TEST USER ---');
  
  // 1. Get the target doc's organization_id
  const { data: docs } = await adminSupabase.from('finance_documents').select('*');
  if (!docs || docs.length === 0) {
    console.log('No documents found in DB. Test cannot proceed.');
    return;
  }
  const targetOrgId = docs[0].organization_id;
  console.log('Target Organization ID:', targetOrgId);

  // 2. Get an accountant user
  const { data: members } = await adminSupabase.from('accounting_firm_members').select('*').limit(1);
  if (!members || members.length === 0) {
    console.log('No accounting firm members found.');
    return;
  }
  const firmId = members[0].accounting_firm_id;
  console.log('Target Firm ID:', firmId);

  // 3. Check if link exists
  const { data: links } = await adminSupabase
    .from('accountant_taxpayer_links')
    .select('*')
    .eq('accounting_firm_id', firmId)
    .eq('taxpayer_organization_id', targetOrgId);

  if (links && links.length > 0) {
    console.log('Link ALREADY EXISTS:', links[0]);
  } else {
    // 4. Create the link
    console.log('Creating link...');
    const { data: inserted, error } = await adminSupabase
      .from('accountant_taxpayer_links')
      .insert({
        accounting_firm_id: firmId,
        taxpayer_organization_id: targetOrgId,
        status: 'active'
      })
      .select();
    
    if (error) console.log('Error creating link:', error);
    else console.log('Successfully created link:', inserted);
  }
}

run();
