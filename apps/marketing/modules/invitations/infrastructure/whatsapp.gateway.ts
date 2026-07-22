import { Invitation } from "../domain/invitation";

export interface DeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface MessagingGateway {
  sendInvitation(invitation: Invitation, rawToken: string): Promise<DeliveryResult>;
}

export class MockWhatsAppGateway implements MessagingGateway {
  async sendInvitation(invitation: Invitation, rawToken: string): Promise<DeliveryResult> {
    const inviteUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/invite?token=${rawToken}`;
    
    const message = `
Merhaba ${invitation.company_name},

Mali müşaviriniz sizi Workigom Flow'a davet etti.

Faturalarınızı güvenli biçimde yüklemek ve mali müşavirinizle bağlantı kurmak için davetinizi açın:
${inviteUrl}

Bu bağlantı 48 saat geçerlidir.
    `.trim();

    console.log(`\n[MOCK WHATSAPP MESSAGE to ${invitation.phone_e164}]\n${message}\n`);

    // Simulate network delay to mimic an external API call
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      success: true,
      messageId: `mock-msg-${Date.now()}`
    };
  }
}
