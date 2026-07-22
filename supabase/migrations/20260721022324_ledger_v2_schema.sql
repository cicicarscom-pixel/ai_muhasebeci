CREATE TYPE invoice_status_enum AS ENUM ('pending', 'locked', 'exported');

CREATE TABLE public.taxpayers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.taxpayers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON public.taxpayers FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON public.taxpayers FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON public.taxpayers FOR UPDATE USING (true);

CREATE TABLE public.invoice_schemas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    taxpayer_id UUID NOT NULL REFERENCES public.taxpayers(id) ON DELETE CASCADE,
    schema_rules JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.invoice_schemas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON public.invoice_schemas FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON public.invoice_schemas FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON public.invoice_schemas FOR UPDATE USING (true);

CREATE TABLE public.invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    taxpayer_id UUID NOT NULL REFERENCES public.taxpayers(id) ON DELETE CASCADE,
    image_url TEXT,
    status invoice_status_enum NOT NULL DEFAULT 'pending',
    preview_data JSONB,
    mapped_data JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON public.invoices FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON public.invoices FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON public.invoices FOR UPDATE USING (true);
