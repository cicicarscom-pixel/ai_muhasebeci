"use client";

import { useMemo, useState } from "react";
import { Client } from "@/modules/clients/application/get-clients.action";
import { AdvisorInviteCard } from "./AdvisorInviteCard";
import { ClientList } from "./ClientList";
import { ClientDetail } from "./ClientDetail";

interface ClientsPageProps {
  advisorCode: string | null;
  clients: Client[];
}

export function ClientsPage({ advisorCode, clients }: ClientsPageProps) {
  const [selectedClientId, setSelectedClientId] = useState(clients[0]?.id);
  const [query, setQuery] = useState("");

  const filteredClients = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("tr");

    if (!normalized) return clients;

    return clients.filter((client) =>
      [
        client?.companyName,
        client?.contactName,
        client?.taxNumber,
        client?.email,
      ].some((value) =>
        value ? value.toLocaleLowerCase("tr").includes(normalized) : false,
      ),
    );
  }, [query]);

  const selectedClient =
    clients.find((client) => client.id === selectedClientId) ?? clients[0];

  return (
    <section className="flex h-full min-h-0 flex-col gap-1 overflow-hidden p-1">
      <AdvisorInviteCard advisorCode={advisorCode || "Bağlantı Kodunuz Bekleniyor"} />

      <div className="grid min-h-0 flex-1 grid-cols-[minmax(19rem,34%)_minmax(0,1fr)] gap-1">
        <ClientList
          clients={filteredClients}
          selectedClientId={selectedClient?.id}
          onSelect={setSelectedClientId}
          query={query}
          onQueryChange={setQuery}
        />

        {selectedClient ? (
          <ClientDetail client={selectedClient} />
        ) : (
          <div className="flex items-center justify-center rounded-2xl border border-white/5 bg-[#161B22] text-sm text-[#8B949E]">
            Görüntülenecek mükellef bulunamadı.
          </div>
        )}
      </div>
    </section>
  );
}
