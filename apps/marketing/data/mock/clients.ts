export type ClientConnectionStatus =
  | "connected"
  | "invited"
  | "activation_pending"
  | "waiting_reply"
  | "inactive"
  | "invite_failed";

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

export const clients: Client[] = [
  {
    id: "client-1",
    companyName: "ABC Yazılım Ltd. Şti.",
    initials: "AB",
    taxNumber: "123 456 7890",
    taxOffice: "Maslak",
    contactName: "Ahmet Demir",
    phone: "+90 555 123 45 42",
    email: "ahmet.demir@abcyazilim.com",
    connectionStatus: "connected",
    lastContact: "Bugün 09:31",
    lastLogin: "Bugün 10:42",
    assignedAccountant: "Volkan A.",
    country: "Türkiye",
    language: "Türkçe",
    nextFollowUp: "21.05.2026 10:00",
    recentAIAction: "Hatırlatma gönderildi",
  },
  {
    id: "client-2",
    companyName: "XYZ Gıda San. Ltd.",
    initials: "XY",
    taxNumber: "987 654 3210",
    taxOffice: "Kadıköy",
    contactName: "Mehmet Yılmaz",
    phone: "+90 532 987 65 18",
    email: "mehmet@xyzgida.com",
    connectionStatus: "invited",
    lastContact: "Davet 2 gün önce gönderildi",
    assignedAccountant: "Elif K.",
    country: "Türkiye",
    language: "Türkçe",
  },
  {
    id: "client-3",
    companyName: "DEF İnşaat A.Ş.",
    initials: "DE",
    taxNumber: "456 789 1234",
    taxOffice: "Beşiktaş",
    contactName: "Ayşe Kaya",
    phone: "+90 544 321 09 72",
    email: "ayse@definsaat.com",
    connectionStatus: "waiting_reply",
    lastContact: "Dün 14:22",
    assignedAccountant: "Ahmet Y.",
    country: "Türkiye",
    language: "Türkçe",
    recentAIAction: "Yanıt bekleniyor",
  },
  {
    id: "client-4",
    companyName: "Global Danışmanlık A.Ş.",
    initials: "GL",
    taxNumber: "789 123 4567",
    taxOffice: "Şişli",
    contactName: "Canan Güven",
    phone: "+90 505 456 78 55",
    email: "canan@globaldanismanlik.com",
    connectionStatus: "connected",
    lastContact: "Geçen hafta",
    lastLogin: "Bugün 10:42",
    assignedAccountant: "Volkan A.",
    country: "Türkiye",
    language: "Türkçe",
  },
  {
    id: "client-5",
    companyName: "Nova Teknoloji Ltd.",
    initials: "NO",
    taxNumber: "321 654 9870",
    taxOffice: "Kartal",
    contactName: "Emre Arslan",
    phone: "+90 555 111 22 31",
    email: "emre@novateknoloji.com",
    connectionStatus: "inactive",
    lastContact: "3 ay önce",
    assignedAccountant: "Elif K.",
    country: "Türkiye",
    language: "Türkçe",
  },
  {
    id: "client-6",
    companyName: "Atlas Lojistik A.Ş.",
    initials: "AT",
    taxNumber: "654 987 3210",
    taxOffice: "Pendik",
    contactName: "Burak Çelik",
    phone: "+90 532 222 33 66",
    email: "burak@atlaslojistik.com",
    connectionStatus: "waiting_reply",
    lastContact: "3 gün önce",
    assignedAccountant: "Ahmet Y.",
    country: "Türkiye",
    language: "Türkçe",
  },
  {
    id: "client-7",
    companyName: "Mavi Perakende Ltd.",
    initials: "MA",
    taxNumber: "147 258 3690",
    taxOffice: "Beyoğlu",
    contactName: "Deniz Yıldız",
    phone: "+90 544 333 44 77",
    email: "deniz@maviperakende.com",
    connectionStatus: "activation_pending",
    lastContact: "Bugün 11:15",
    assignedAccountant: "Volkan A.",
    country: "Türkiye",
    language: "Türkçe",
  },
  {
    id: "client-8",
    companyName: "Vega Restoran İşletmeleri",
    initials: "VE",
    taxNumber: "258 369 1470",
    taxOffice: "Bakırköy",
    contactName: "Ali Can",
    phone: "+90 505 444 55 88",
    email: "ali@vegarestoran.com",
    connectionStatus: "invite_failed",
    lastContact: "Dün 16:45",
    assignedAccountant: "Elif K.",
    country: "Türkiye",
    language: "Türkçe",
  },
  {
    id: "client-9",
    companyName: "Orion Otomotiv A.Ş.",
    initials: "OR",
    taxNumber: "369 147 2580",
    taxOffice: "Ümraniye",
    contactName: "Selin Yılmaz",
    phone: "+90 555 555 66 99",
    email: "selin@orionotomotiv.com",
    connectionStatus: "connected",
    lastContact: "Bugün 13:20",
    lastLogin: "Bugün 14:00",
    assignedAccountant: "Ahmet Y.",
    country: "Türkiye",
    language: "Türkçe",
    recentAIAction: "Evrak yüklendi",
  },
  {
    id: "client-10",
    companyName: "Eksen Sağlık Hizmetleri",
    initials: "EK",
    taxNumber: "951 753 8520",
    taxOffice: "Şişli",
    contactName: "Kemal Demir",
    phone: "+90 532 666 77 00",
    email: "kemal@eksensaglik.com",
    connectionStatus: "connected",
    lastContact: "Dün 09:00",
    lastLogin: "Dün 15:30",
    assignedAccountant: "Volkan A.",
    country: "Türkiye",
    language: "Türkçe",
  }
];
