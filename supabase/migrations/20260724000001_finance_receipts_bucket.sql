-- Create the storage bucket for finance receipts if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('finance_receipts', 'finance_receipts', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Create policies for finance_receipts bucket
-- Allow anyone to upload (for prototype) and read (since it's public)
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'finance_receipts');

CREATE POLICY "Upload Access" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'finance_receipts');
