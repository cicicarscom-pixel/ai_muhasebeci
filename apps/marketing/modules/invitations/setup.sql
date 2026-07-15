-- Davet durumları için enum (İsteğe bağlı, ancak veri bütünlüğünü sağlar)
CREATE TYPE invitation_status AS ENUM (
  'pending',
  'sent',
  'delivered',
  'accepted',
  'expired',
  'cancelled',
  'failed'
);

-- invitations tablosu oluşturulması
CREATE TABLE invitations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  accounting_firm_id UUID NOT NULL,
  accountant_id UUID NOT NULL, -- auth.users tablosuna foreign key olarak bağlanabilir
  taxpayer_id UUID, -- Mükellef kayıt olunca/kabul edince bu alan dolacak
  company_name TEXT NOT NULL,
  phone_e164 TEXT NOT NULL,
  token_hash TEXT NOT NULL, -- Ham token değil, sadece SHA-256 hash saklanır
  status invitation_status NOT NULL DEFAULT 'pending',
  expires_at TIMESTAMPTZ NOT NULL,
  accepted_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  delivery_status TEXT,
  provider_message_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Sadece E.164 formatında numaraların girilmesini zorlayan constraint (isteğe bağlı ama önerilir)
  CONSTRAINT chk_phone_e164 CHECK (phone_e164 ~ '^\+[1-9]\d{1,14}$')
);

-- İndekslemeler (Performans ve benzersizlik)
-- Aynı numaraya aynı anda birden fazla bekleyen/gönderilen davet gitmemesi için mantıksal kontroller yapılabilir.
CREATE INDEX idx_invitations_phone_status ON invitations (phone_e164, status);
CREATE INDEX idx_invitations_token_hash ON invitations (token_hash);

-- Supabase RLS Policy Kuralları (Örnek)
ALTER TABLE invitations ENABLE ROW LEVEL SECURITY;

-- Müşavirlerin sadece kendi firmalarının davetlerini görmesi için:
-- CREATE POLICY "Accountants can view their firm's invitations" ON invitations FOR SELECT USING (
--   accounting_firm_id IN (SELECT firm_id FROM accountant_firms WHERE user_id = auth.uid())
-- );
