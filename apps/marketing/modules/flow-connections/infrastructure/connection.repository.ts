import { SupabaseClient } from '@supabase/supabase-js';
import { AccountingFirm } from '../domain/connection';

export class ConnectionRepository {
  constructor(private supabase: SupabaseClient) {}

  async findFirmByConnectionCode(code: string): Promise<AccountingFirm | null> {
    // 1. Find the firm
    const { data: firm, error } = await this.supabase
      .from('ledger_accounting_firms')
      .select('id, user_id, connection_code')
      .eq('connection_code', code)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw new Error(`Firma sorgulanırken hata oluştu: ${error.message}`);
    }

    // 2. Try to get the accountant's name from profiles
    const { data: profile } = await this.supabase
      .from('profiles')
      .select('full_name, location')
      .eq('id', firm.user_id)
      .single();

    return {
      ...firm,
      name: profile?.full_name || 'Akbulut Mali Müşavirlik', // Fallback to user's requested default
      location: profile?.location || 'İstanbul / Başakşehir', // Mock or real
      rating: 4.9, // Mocked for UI
      active_taxpayers: 120 // Mocked for UI
    } as AccountingFirm;
  }

  async checkExistingLink(taxpayerId: string, firmId: string): Promise<boolean> {
    const { data, error } = await this.supabase
      .from('shared_accountant_taxpayer_links')
      .select('id')
      .eq('taxpayer_id', taxpayerId)
      .eq('accounting_firm_id', firmId)
      .limit(1);

    if (error) {
      throw new Error(`Bağlantı durumu sorgulanamadı: ${error.message}`);
    }

    return data && data.length > 0;
  }

  async createPendingLink(taxpayerId: string, firmId: string, accountantId: string): Promise<void> {
    const { error } = await this.supabase
      .from('shared_accountant_taxpayer_links')
      .insert({
        taxpayer_id: taxpayerId,
        accounting_firm_id: firmId,
        accountant_id: accountantId,
        status: 'pending' // As per requirements, must be pending for the accountant to approve
      });

    if (error) {
      throw new Error(`Bağlantı talebi oluşturulamadı: ${error.message}`);
    }
  }
}
