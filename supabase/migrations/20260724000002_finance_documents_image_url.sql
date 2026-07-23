-- Add image_url and missing fields if any
ALTER TABLE public.finance_documents
ADD COLUMN IF NOT EXISTS image_url TEXT,
ADD COLUMN IF NOT EXISTS title TEXT;
