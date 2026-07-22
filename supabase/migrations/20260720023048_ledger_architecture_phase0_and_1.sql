-- Phase 0: Safe Migration
DO $$
BEGIN
    -- Rename legacy tables if they exist to avoid dropping data
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'payments') THEN
        ALTER TABLE public.payments RENAME TO legacy_payments;
    END IF;

    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'payment_allocations') THEN
        ALTER TABLE public.payment_allocations RENAME TO legacy_payment_allocations;
    END IF;

    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'country_tax_schemas') THEN
        ALTER TABLE public.country_tax_schemas RENAME TO legacy_country_tax_schemas;
    END IF;
END $$;

-- Phase 3/2: Ledger AI Settings / Extraction Schemas
CREATE TABLE IF NOT EXISTS public.extraction_schemas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- e.g. 'Logo Yazılım Çıktı Şablonu'
    version INT NOT NULL DEFAULT 1,
    schema_definition JSONB NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.extraction_schemas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view schemas of their org" ON public.extraction_schemas;
CREATE POLICY "Users can view schemas of their org" 
ON public.extraction_schemas FOR SELECT 
USING (organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()));

DROP POLICY IF EXISTS "Users can insert schemas to their org" ON public.extraction_schemas;
CREATE POLICY "Users can insert schemas to their org" 
ON public.extraction_schemas FOR INSERT 
WITH CHECK (organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()));

DROP POLICY IF EXISTS "Users can update schemas of their org" ON public.extraction_schemas;
CREATE POLICY "Users can update schemas of their org" 
ON public.extraction_schemas FOR UPDATE 
USING (organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()));

-- Phase 1: Flow Side - Simplified Finance Documents
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'finance_documents') THEN
        CREATE TABLE public.finance_documents (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
            
            type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
            counterparty_name TEXT, 
            
            amount_minor BIGINT NOT NULL DEFAULT 0,
            currency_code TEXT NOT NULL DEFAULT 'TRY',
            
            tax_details JSONB, 
            due_date DATE, -- For AI end-of-month rollover
            
            -- Phase 1 strictly requested statuses
            document_status TEXT NOT NULL DEFAULT 'draft'
                CHECK (document_status IN ('draft', 'confirmed', 'cancelled')),
                
            payment_status TEXT NOT NULL DEFAULT 'unpaid'
                CHECK (payment_status IN ('unpaid', 'partial', 'paid')),
                
            -- Phase 0 Schema Versioning
            extraction_schema_id UUID REFERENCES public.extraction_schemas(id),
            extraction_schema_version INT,
            
            export_batch_id TEXT,
            exported_at TIMESTAMPTZ,
            archived_at TIMESTAMPTZ,
            
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        ALTER TABLE public.finance_documents ENABLE ROW LEVEL SECURITY;

        CREATE POLICY "Users can view documents of their org" 
        ON public.finance_documents FOR SELECT 
        USING (organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()));

        CREATE POLICY "Users can insert documents to their org" 
        ON public.finance_documents FOR INSERT 
        WITH CHECK (organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()));

        CREATE POLICY "Users can update documents of their org" 
        ON public.finance_documents FOR UPDATE 
        USING (organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()));
    ELSE
        -- If it exists, alter to match strict Phase 1 requirements
        -- Drop old constraints
        ALTER TABLE public.finance_documents DROP CONSTRAINT IF EXISTS finance_documents_document_status_check;
        ALTER TABLE public.finance_documents DROP CONSTRAINT IF EXISTS finance_documents_payment_status_check;
        
        -- Add due_date and extraction version if they don't exist
        ALTER TABLE public.finance_documents ADD COLUMN IF NOT EXISTS due_date DATE;
        ALTER TABLE public.finance_documents ADD COLUMN IF NOT EXISTS extraction_schema_id UUID REFERENCES public.extraction_schemas(id);
        ALTER TABLE public.finance_documents ADD COLUMN IF NOT EXISTS extraction_schema_version INT;
        
        -- Add new constraints
        ALTER TABLE public.finance_documents ADD CONSTRAINT finance_documents_document_status_check 
            CHECK (document_status IN ('draft', 'confirmed', 'cancelled'));
            
        ALTER TABLE public.finance_documents ADD CONSTRAINT finance_documents_payment_status_check 
            CHECK (payment_status IN ('unpaid', 'partial', 'paid'));
    END IF;
END $$;


-- Phase 0: Audit Log (Document Events)
CREATE TABLE IF NOT EXISTS public.document_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    finance_document_id UUID NOT NULL REFERENCES public.finance_documents(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Can be null if AI made the change
    event_type TEXT NOT NULL, -- 'ai_extraction', 'manual_update', 'status_change', 'exported'
    old_value JSONB,
    new_value JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.document_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view events of their org's documents" ON public.document_events;
CREATE POLICY "Users can view events of their org's documents" 
ON public.document_events FOR SELECT 
USING (finance_document_id IN (SELECT id FROM public.finance_documents WHERE organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid())));

DROP POLICY IF EXISTS "Users can insert events to their org's documents" ON public.document_events;
CREATE POLICY "Users can insert events to their org's documents" 
ON public.document_events FOR INSERT 
WITH CHECK (finance_document_id IN (SELECT id FROM public.finance_documents WHERE organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid())));
