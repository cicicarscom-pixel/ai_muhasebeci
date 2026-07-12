"use client";

import { Client } from "@/data/mock/clients";
import { ClientListItem } from "./ClientListItem";

interface ClientListProps {
  clients: Client[];
  selectedClientId: string | undefined;
  onSelect: (id: string) => void;
}

export function ClientList({ clients, selectedClientId, onSelect }: ClientListProps) {
  return (
    <div className="flex flex-col rounded-[16px] border border-white/5 bg-[#12151C] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
        {clients.length > 0 ? (
          clients.map((client) => (
            <ClientListItem
              key={client.id}
              client={client}
              isSelected={client.id === selectedClientId}
              onSelect={onSelect}
            />
          ))
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center text-[#8B949E]">
            <p className="text-sm">Mükellef bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}
