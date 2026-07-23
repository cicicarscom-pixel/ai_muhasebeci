-- Allow accountants to view the organizations of their linked taxpayers
CREATE POLICY "Accountants can view linked taxpayer orgs"
ON public.organizations FOR SELECT
USING (
  id IN (
    SELECT taxpayer_organization_id
    FROM public.accountant_taxpayer_links
    WHERE accounting_firm_id IN (
      SELECT organization_id FROM public.organization_members WHERE user_id = auth.uid()
    )
    AND status = 'active'
  )
);
