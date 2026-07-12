"use client";

import { useMemo, useState } from "react";
import { clients } from "@/data/mock/clients";
import { ClientsHeader } from "./ClientsHeader";
import { AdvisorInviteCard } from "./AdvisorInviteCard";
import { ClientList } from "./ClientList";
import { ClientDetail } from "./ClientDetail";

export function ClientsPage() {
  const [selectedClientId, setSelectedClientId] = useState(clients[0]?.id);
  const [query, setQuery] = useState("");

  const filteredClients = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("tr");

    if (!normalized) return clients;

    return clients.filter((client) =>
      [
        client.companyName,
        client.contactName,
        client.taxNumber,
        client.email,
      ].some((value) =>
        value.toLocaleLowerCase("tr").includes(normalized),
      ),
    );
  }, [query]);

  const selectedClient =
    clients.find((client) => client.id === selectedClientId) ?? clients[0];

  return (
    <section className="flex h-full min-h-0 flex-col gap-4 overflow-hidden p-4">
      <ClientsHeader />

      <AdvisorInviteCard advisorCode="WG-73492" />

      <div className="grid min-h-0 flex-1 grid-cols-[minmax(19rem,34%)_minmax(0,1fr)] gap-4">
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
