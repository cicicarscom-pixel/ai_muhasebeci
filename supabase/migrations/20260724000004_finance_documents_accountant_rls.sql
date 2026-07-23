-- Create a security definer function to check if the current user is an accountant with access to the given organization
CREATE OR REPLACE FUNCTION public.check_accountant_document_access(doc_org_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.accounting_firm_members afm
    JOIN public.accountant_taxpayer_links atl 
      ON afm.accounting_firm_id = atl.accounting_firm_id
    WHERE afm.user_id = auth.uid()
      AND atl.taxpayer_organization_id = doc_org_id
  );
END;
$$;

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their documents" ON public.finance_documents;
DROP POLICY IF EXISTS "Users can insert their documents" ON public.finance_documents;
DROP POLICY IF EXISTS "Users can update their documents" ON public.finance_documents;
DROP POLICY IF EXISTS "Users can delete their documents" ON public.finance_documents;

-- Recreate policies with the new accountant access check
CREATE POLICY "Users and accountants can view documents" 
ON public.finance_documents FOR SELECT 
USING (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()) OR
    public.check_accountant_document_access(organization_id)
);

CREATE POLICY "Users can insert their documents" 
ON public.finance_documents FOR INSERT 
WITH CHECK (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users and accountants can update documents" 
ON public.finance_documents FOR UPDATE 
USING (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()) OR
    public.check_accountant_document_access(organization_id)
);

CREATE POLICY "Users and accountants can delete documents" 
ON public.finance_documents FOR DELETE 
USING (
    organization_id = auth.uid() OR 
    organization_id IN (SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()) OR
    public.check_accountant_document_access(organization_id)
);
