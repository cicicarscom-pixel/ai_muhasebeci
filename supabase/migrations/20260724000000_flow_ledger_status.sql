-- Migration for flow_payment_status and ledger_official_status

-- Add new columns
ALTER TABLE public.finance_documents ADD COLUMN flow_payment_status TEXT CHECK (flow_payment_status IN ('paid', 'unpaid', 'partial')) DEFAULT 'paid';
ALTER TABLE public.finance_documents ADD COLUMN ledger_official_status TEXT DEFAULT 'taslak';

-- Migrate data
UPDATE public.finance_documents SET flow_payment_status = payment_status WHERE payment_status IS NOT NULL;

-- Drop old column
ALTER TABLE public.finance_documents DROP COLUMN payment_status;
