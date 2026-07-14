"use client";

import { Client } from "@/data/mock/clients";
import { ClientListItem } from "./ClientListItem";
import { Search } from "lucide-react";

interface ClientListProps {
  clients: Client[];
  selectedClientId: string | undefined;
  onSelect: (id: string) => void;
  query: string;
  onQueryChange: (val: string) => void;
}

export function ClientList({ clients, selectedClientId, onSelect, query, onQueryChange }: ClientListProps) {
  return (
    <div className="flex flex-col rounded-[16px] border border-white/5 bg-[#12151C] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      {/* Search Bar */}
      <div className="border-b border-white/5 bg-[#161B22] p-1 sticky top-0 z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-1 w-1 -translate-y-1/2 text-[#8B949E]" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Mükellef ara (⌘K)"
            className="h-10 w-full rounded-xl border border-white/10 bg-[#12151C] pl-9 pr-1 text-sm text-white placeholder:text-[#8B949E] focus:border-cyan-400/30 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-1 space-y-3">
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
