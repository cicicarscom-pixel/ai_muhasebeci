import { SupabaseClient } from '@supabase/supabase-js';
import { CreateInvitationInput, Invitation } from '../domain/invitation';

export class InvitationRepository {
  constructor(private supabase: SupabaseClient) {}

  async create(input: CreateInvitationInput): Promise<Invitation> {
    const { data, error } = await this.supabase
      .from('ledger_invitations')
      .insert({
        accounting_firm_id: input.accounting_firm_id,
        accountant_id: input.accountant_id,
        company_name: input.company_name,
        phone_e164: input.phone_e164,
        token_hash: input.token_hash,
        expires_at: input.expires_at,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Davet oluşturulamadı: ${error.message}`);
    }

    return data as Invitation;
  }

  async hasActiveInvitationForPhone(phone_e164: string): Promise<boolean> {
    const { data, error } = await this.supabase
      .from('ledger_invitations')
      .select('id')
      .eq('phone_e164', phone_e164)
      .in('status', ['pending', 'sent', 'delivered'])
      .gt('expires_at', new Date().toISOString())
      .limit(1);

    if (error) {
      throw new Error(`Aktif davet kontrolü başarısız: ${error.message}`);
    }

    return data && data.length > 0;
  }

  async updateStatus(
    id: string, 
    updates: Partial<Pick<Invitation, 'status' | 'delivery_status' | 'provider_message_id' | 'sent_at'>>
  ): Promise<void> {
    const { error } = await this.supabase
      .from('ledger_invitations')
      .update(updates)
      .eq('id', id);

    if (error) {
      throw new Error(`Davet durumu güncellenemedi: ${error.message}`);
    }
  }
}
