-- Setup for ledger_accounting_firms
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS ledger_accounting_firms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  firm_name TEXT NOT NULL,
  connection_code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE ledger_accounting_firms ENABLE ROW LEVEL SECURITY;

-- Allow accountants to read their own firm profile
CREATE POLICY "Users can view their own accounting firm" 
ON ledger_accounting_firms 
FOR SELECT 
USING (auth.uid() = user_id);

-- Note: Insertions are handled via Server Actions using the Admin Service Key, 
-- bypassing RLS, so no INSERT policy is strictly required for public users.
