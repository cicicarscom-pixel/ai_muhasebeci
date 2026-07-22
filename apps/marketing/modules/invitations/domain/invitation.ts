export type InvitationStatus = 
  | 'pending'
  | 'sent'
  | 'delivered'
  | 'accepted'
  | 'expired'
  | 'cancelled'
  | 'failed';

export interface Invitation {
  id: string;
  accounting_firm_id: string;
  accountant_id: string;
  taxpayer_id?: string | null;
  company_name: string;
  phone_e164: string;
  token_hash: string;
  status: InvitationStatus;
  expires_at: string; // ISO String
  accepted_at?: string | null; // ISO String
  sent_at?: string | null; // ISO String
  delivery_status?: string | null;
  provider_message_id?: string | null;
  created_at: string; // ISO String
}

export interface CreateInvitationInput {
  accounting_firm_id: string;
  accountant_id: string;
  company_name: string;
  phone_e164: string;
  token_hash: string;
  expires_at: string;
}
