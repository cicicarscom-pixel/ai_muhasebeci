'use server';

import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { cookies } from 'next/headers';

export type ClientConnectionStatus =
  | 'connected'
  | 'invited'
  | 'activation_pending'
  | 'waiting_reply'
  | 'inactive'
  | 'invite_failed';

export interface Client {
  id: string;
  companyName: string;
  initials: string;
  taxNumber: string;
  taxOffice: string;
  contactName: string;
  phone: string;
  email: string;
  connectionStatus: ClientConnectionStatus;
  lastContact: string;
  lastLogin?: string;
  assignedAccountant: string;
  country: string;
  language: string;
  nextFollowUp?: string;
  recentAIAction?: string;
}

export async function getClientsAction(): Promise<{ advisorCode: string | null; clients: Client[] }> {
  try {
    const cookieStore = await cookies();
    const supabaseUserClient = createClient(cookieStore);
    const adminSupabase = createAdminClient();

    // 1. Get current logged-in user
    const { data: { user }, error: authError } = await supabaseUserClient.auth.getUser();
    
    if (authError || !user) {
      return { advisorCode: null, clients: [] };
    }

    const accountantId = user.id;

    // 2. Fetch connection_code from ledger_accounting_firms
    let { data: firmData } = await adminSupabase
      .from('ledger_accounting_firms')
      .select('id, connection_code')
      .eq('user_id', accountantId)
      .single();

    let advisorCode = firmData?.connection_code || null;
    
    if (!firmData) {
      // Auto-generate if missing (e.g. user logged in without custom registration)
      const connectionCode = `WG-${Math.floor(10000 + Math.random() * 90000)}`;
      const { data: newFirm, error: insertError } = await adminSupabase
        .from('ledger_accounting_firms')
        .insert({
          user_id: accountantId,
          firm_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Yeni Firma',
          connection_code: connectionCode
        })
        .select('id, connection_code')
        .single();
        
      if (insertError) {
        advisorCode = `Hata (Insert): ${insertError.message}`;
        console.error('Auto-generate firm error:', insertError);
      } else if (newFirm) {
        firmData = newFirm;
        advisorCode = newFirm.connection_code;
      }
    } else if (!advisorCode) {
      // Firm exists but connection_code is missing
      const connectionCode = `WG-${Math.floor(10000 + Math.random() * 90000)}`;
      const { data: updatedFirm, error: updateError } = await adminSupabase
        .from('ledger_accounting_firms')
        .update({ connection_code: connectionCode })
        .eq('id', firmData.id)
        .select('id, connection_code')
        .single();
        
      if (updateError) {
        advisorCode = `Hata (Update): ${updateError.message}`;
        console.error('Update firm error:', updateError);
      } else if (updatedFirm) {
        firmData = updatedFirm;
        advisorCode = updatedFirm.connection_code;
      }
    }

    const firmId = firmData?.id;
    
    let clientsList: Client[] = [];

    // If we have a firm, fetch the clients
    if (firmId) {
      // 3. Fetch Invitations
      const { data: invitations } = await adminSupabase
        .from('ledger_invitations')
        .select('*')
        .eq('accounting_firm_id', firmId);

      if (invitations) {
        const invitedClients = invitations.map((inv: any) => ({
          id: inv.id,
          companyName: inv.company_name || 'İsimsiz Firma',
          initials: (inv.company_name || 'İ F').substring(0, 2).toUpperCase(),
          taxNumber: '-', // Not available in invitation
          taxOffice: '-',
          contactName: '-',
          phone: inv.phone_e164 || '',
          email: '-',
          connectionStatus: (inv.status === 'pending' || inv.status === 'sent') ? 'invited' : 
                             inv.status === 'accepted' ? 'connected' : 'waiting_reply',
          lastContact: inv.sent_at ? new Date(inv.sent_at).toLocaleDateString('tr-TR') : 'Henüz gönderilmedi',
          assignedAccountant: 'Siz',
          country: 'Türkiye',
          language: 'Türkçe',
        } as Client));
        
        // We only add those that aren't fully connected yet to avoid duplicates if they exist in shared links
        const pendingInvites = invitedClients.filter((c: Client) => c.connectionStatus !== 'connected');
        clientsList = [...clientsList, ...pendingInvites];
      }

      // 4. Fetch Connected Clients (from shared_accountant_taxpayer_links)
      const { data: sharedLinks } = await adminSupabase
        .from('shared_accountant_taxpayer_links')
        .select(`
          id,
          status,
          created_at,
          taxpayer_id
        `)
        .eq('accounting_firm_id', firmId);
        
      if (sharedLinks && sharedLinks.length > 0) {
        // We do a loop to fetch the taxpayer profile data
        for (const link of sharedLinks) {
          const { data: profile } = await adminSupabase
            .from('profiles')
            .select('full_name')
            .eq('id', link.taxpayer_id)
            .single();

          clientsList.push({
            id: link.id,
            companyName: profile?.full_name || `Bağlı Firma (${link.taxpayer_id.substring(0,4)})`,
            initials: (profile?.full_name || 'B F').substring(0, 2).toUpperCase(),
            taxNumber: '-',
            taxOffice: '-',
            contactName: profile?.full_name || 'Yetkili',
            phone: '-',
            email: '-',
            connectionStatus: link.status === 'pending' ? 'activation_pending' : 'connected',
            lastContact: new Date(link.created_at).toLocaleDateString('tr-TR'),
            assignedAccountant: 'Siz',
            country: 'Türkiye',
            language: 'Türkçe',
          } as Client);
        }
      }
    }

    return { advisorCode, clients: clientsList };

  } catch (error) {
    console.error('getClientsAction Error:', error);
    return { advisorCode: null, clients: [] };
  }
}
