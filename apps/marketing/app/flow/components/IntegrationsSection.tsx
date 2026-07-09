"use client";

import React from "react";
import { motion } from "framer-motion";

const integrations = [
  { name: "Instagram", desc: "Graph API", icon: "photo_camera", bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]", text: "text-white" },
  { name: "WhatsApp", desc: "Cloud API", icon: "chat", bg: "bg-[#25D366]", text: "text-white" },
  { name: "Facebook", desc: "Messenger", icon: "thumb_up", bg: "bg-[#1877F2]", text: "text-white" },
  { name: "Google", desc: "Business", icon: "mail", bg: "bg-white", text: "text-[#EA4335]" },
  { name: "TikTok", desc: "API", icon: "music_note", bg: "bg-black", text: "text-white" },
  { name: "Google Drive", desc: "RAG Sync", icon: "folder", bg: "bg-[#0F9D58]", text: "text-white" },
  { name: "Zemio", desc: "Sosyal API", icon: "api", bg: "bg-[#8A2BE2]", text: "text-white" },
  { name: "Muhasebe", desc: "Programları", icon: "account_balance", bg: "bg-[#00F0FF]", text: "text-[#07090E]" },
];

export default function IntegrationsSection() {
  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6"
      >
        <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">GÜÇLÜ ENTEGRASYONLAR</span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[28px] md:text-[36px] font-extrabold mb-12 text-center text-white tracking-tight"
      >
        Kullandığınız Platformlarla Tam Entegre
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {integrations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + 0.2 }}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px -5px rgba(0, 240, 255, 0.2)" }}
            className="w-24 h-24 bg-[#0D1017] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer group hover:border-[#00F0FF]/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform`}>
              <span className={`material-symbols-outlined ${item.text} text-[20px]`}>{item.icon}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 text-center relative z-10 group-hover:text-white transition-colors">
              {item.name}<br/>{item.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
