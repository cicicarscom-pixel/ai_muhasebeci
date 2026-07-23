import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import ApprovedPage from '@/components/ledger/approved/ApprovedPage';

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return <div className="p-8 text-center"><h2 className="text-xl font-bold">Lütfen Giriş Yapın</h2></div>;
  }

  // Get firm ID
  const { data: firmMember } = await supabase
    .from('accounting_firm_members')
    .select('accounting_firm_id')
    .eq('user_id', user.id)
    .single();

  if (!firmMember) return <div className="p-8">Müşavir yetkiniz bulunmuyor.</div>;

  // Sadece bu müşavire bağlı mükelleflerin belgelerini getir
  const { data: linkedTaxpayers } = await supabase
    .from('accountant_taxpayer_links')
    .select('taxpayer_id')
    .eq('accounting_firm_id', firmMember.accounting_firm_id);

  const taxpayerIds = linkedTaxpayers?.map(link => link.taxpayer_id) || [];

  let documents = [];
  if (taxpayerIds.length > 0) {
    const { data, error } = await supabase
      .from('finance_documents')
      .select(`
        *,
        organizations:organization_id (id, name, logo_url)
      `)
      .in('organization_id', taxpayerIds)
      .in('ledger_official_status', ['archived', 'onaylandi'])
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching approved documents:', error);
    } else {
      documents = data || [];
    }
  }

  return <ApprovedPage documents={documents} />;
}
