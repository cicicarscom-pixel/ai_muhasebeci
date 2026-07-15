require('dotenv').config({path: '.env.local'});
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

supabase.storage.createBucket('documents', { public: false })
  .then(res => console.log('Bucket created:', res))
  .catch(err => console.error('Error creating bucket:', err));
