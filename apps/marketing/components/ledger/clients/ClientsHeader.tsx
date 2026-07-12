"use client";

import { useState } from "react";
import { Filter, Plus } from "lucide-react";
import { AddClientDialog } from "./AddClientDialog";

interface ClientsHeaderProps {}

export function ClientsHeader({}: ClientsHeaderProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center gap-3">
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
