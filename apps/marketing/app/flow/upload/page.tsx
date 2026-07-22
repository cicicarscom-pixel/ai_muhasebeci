import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import UploadDocumentClient from './UploadDocumentClient';

export default async function FlowUploadPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Get user's organization
  const { data: orgMember } = await supabase
    .from('organization_members')
    .select('organization_id')
    .eq('user_id', user.id)
    .single();

  if (!orgMember) {
    return <div className="p-4 text-red-500">Kayıtlı bir işletmeniz bulunmuyor. Lütfen önce hesabınızı kurun.</div>;
  }

  // Get active connection firm
  const { data: link } = await supabase
    .from('accountant_taxpayer_links')
    .select('accounting_firm_id')
    .eq('taxpayer_organization_id', orgMember.organization_id)
    .eq('status', 'active')
    .single();

  if (!link) {
    return <div className="p-4 text-amber-500">Mali müşavir bağlantınız bulunmuyor veya henüz onaylanmamış. Lütfen önce "Bağlantı Kodu" ile müşavirinize bağlanın.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Belge Yükle</h1>
        <p className="text-sm text-gray-500">Fiş veya fatura fotoğrafını çekin.</p>
      </div>
      <div className="p-4">
        <UploadDocumentClient 
          orgId={orgMember.organization_id} 
          firmId={link.accounting_firm_id} 
        />
      </div>
    </div>
  );
}
