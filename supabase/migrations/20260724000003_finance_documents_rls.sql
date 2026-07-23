-- Fix RLS for finance_documents
-- Drop existing restrictive policies if they exist
DROP POLICY IF EXISTS "Users can view documents of their org" ON public.finance_documents;
DROP POLICY IF EXISTS "Users can insert documents to their org" ON public.finance_documents;
DROP POLICY IF EXISTS "Users can update documents of their org" ON public.finance_documents;

-- Create policies for finance_documents
CREATE POLICY "Users can view their documents" 
ON public.finance_documents FOR SELECT 
USING (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can insert their documents" 
ON public.finance_documents FOR INSERT 
WITH CHECK (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can update their documents" 
ON public.finance_documents FOR UPDATE 
USING (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can delete their documents" 
ON public.finance_documents FOR DELETE 
USING (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid())
);
