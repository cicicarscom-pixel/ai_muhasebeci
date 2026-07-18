-- Paylaşımlı bağlantı tablosu
CREATE TABLE IF NOT EXISTS shared_accountant_taxpayer_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  accounting_firm_id UUID NOT NULL,
  accountant_id UUID NOT NULL,
  taxpayer_id UUID NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(accounting_firm_id, taxpayer_id)
);

ALTER TABLE shared_accountant_taxpayer_links ENABLE ROW LEVEL SECURITY;
