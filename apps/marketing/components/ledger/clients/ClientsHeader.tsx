"use client";

import { useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import { AddClientDialog } from "./AddClientDialog";

interface ClientsHeaderProps {
  total: number;
  query: string;
  onQueryChange: (val: string) => void;
}

export function ClientsHeader({ total, query, onQueryChange }: ClientsHeaderProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-white">Mükellefler</h1>
          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-[#8B949E]">
            {total}
          </span>
        </div>
        <p className="mt-1 text-sm text-[#8B949E]">
          Mükelleflerinizi, bağlantı davetlerini ve AI iletişim süreçlerini yönetin.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B949E]" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Mükellef ara (⌘K)"
            className="h-10 w-64 rounded-xl border border-white/10 bg-[#161B22] pl-9 pr-4 text-sm text-white placeholder:text-[#8B949E] focus:border-cyan-400/30 focus:outline-none"
          />
        </div>

        <button className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-[#161B22] px-4 text-sm font-medium text-white transition hover:bg-white/5">
          <Filter className="h-4 w-4" />
          Filtrele
        </button>

        <button
          onClick={() => setIsAddDialogOpen(true)}
          className="flex h-10 items-center gap-2 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#9D5CFF] px-4 text-sm font-semibold text-white transition hover:brightness-110"
        >
          <Plus className="h-4 w-4" />
          Mükellef Ekle
        </button>
      </div>
      
      {isAddDialogOpen && <AddClientDialog onClose={() => setIsAddDialogOpen(false)} />}
    </div>
  );
}
