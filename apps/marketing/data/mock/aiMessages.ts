export interface AIMessage {
  id: string;
  clientId: string;
  timestamp: string;
  sender: "Ledger AI" | "Client" | "System" | "Accountant";
  content: string;
  result?: string;
  actionRequired?: boolean;
}

export const aiMessages: AIMessage[] = [
  {
    id: "msg-1",
    clientId: "client-1",
    timestamp: "Bugün 09:30",
    sender: "Ledger AI",
    content: "WhatsApp üzerinden Mayıs dönemi belgeleri için hatırlatma gönderildi.",
    result: "Davet gönderildi",
  },
  {
    id: "msg-2",
    clientId: "client-1",
    timestamp: "Bugün 09:42",
    sender: "Client",
    content: "Hastaydım, yarın yükleyeceğim.",
    result: "Evrak yükleyecek",
  },
  {
    id: "msg-3",
    clientId: "client-1",
    timestamp: "Bugün 09:43",
    sender: "System",
    content: "Takip tarihi yarın 10:00 olarak güncellendi.",
  },
  {
    id: "msg-4",
    clientId: "client-1",
    timestamp: "Bugün 09:44",
    sender: "Ledger AI",
    content: "Geçmiş olsun Ahmet Bey. Yarın tekrar hatırlatacağım.",
  },
  {
    id: "msg-5",
    clientId: "client-1",
    timestamp: "Bugün 09:45",
    sender: "System",
    content: "Muhasebeciye bilgi verildi.",
    actionRequired: false,
  },
  {
    id: "msg-6",
    clientId: "client-2",
    timestamp: "2 gün önce 14:00",
    sender: "Ledger AI",
    content: "Flow davetiyesi e-posta ve WhatsApp üzerinden gönderildi.",
    result: "Davet gönderildi",
  },
  {
    id: "msg-7",
    clientId: "client-3",
    timestamp: "Dün 14:22",
    sender: "Ledger AI",
    content: "Aktivasyon hatırlatması yapıldı. Yanıt bekleniyor.",
    result: "Yanıt bekleniyor",
  }
];
