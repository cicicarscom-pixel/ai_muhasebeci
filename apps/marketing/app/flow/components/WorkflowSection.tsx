"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "1. Tarama",
      desc: "Faturanızı çekin veya yükleyin.",
      content: (
        <div className="w-12 h-16 bg-white/5 border border-white/10 rounded-md relative flex flex-col p-1 gap-1">
          <div className="w-full h-[2px] bg-gray-500 rounded"></div>
          <div className="w-[80%] h-[2px] bg-gray-500 rounded"></div>
          <div className="w-full h-[2px] bg-gray-500 rounded mt-1"></div>
          
          {/* Scanning line animation */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px] bg-[#00F0FF] shadow-[0_0_5px_#00F0FF]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ),
      icon: "document_scanner",
      color: "#00F0FF"
    },
    {
      id: 2,
      title: "2. AI Okuma",
      desc: "AI tüm bilgileri otomatik olarak çıkarır.",
      content: (
        <span className="text-[30px] font-black text-[#00F0FF] relative">
          AI
          <motion.span 
            className="absolute inset-0 text-[#00F0FF] blur-[8px]"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            AI
          </motion.span>
        </span>
      ),
      color: "#00F0FF"
    },
    {
      id: 3,
      title: "3. Kategorize",
      desc: "Giderler otomatik kategorize edilir.",
      content: (
        <div className="flex flex-col w-full gap-1.5 p-2">
          <motion.div animate={activeStep === 2 ? { x: [0, 5, 0] } : {}} className="flex items-center gap-2 w-full"><div className="w-3 h-3 rounded bg-[#F5B400] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">restaurant</span></div><span className="text-[8px] text-gray-400">Yemek</span><span className="text-[8px] text-white ml-auto">₺450</span></motion.div>
          <motion.div animate={activeStep === 2 ? { x: [0, 5, 0] } : {}} transition={{ delay: 0.1 }} className="flex items-center gap-2 w-full"><div className="w-3 h-3 rounded bg-[#00F0FF] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">directions_car</span></div><span className="text-[8px] text-gray-400">Ulaşım</span><span className="text-[8px] text-white ml-auto">₺250</span></motion.div>
          <motion.div animate={activeStep === 2 ? { x: [0, 5, 0] } : {}} transition={{ delay: 0.2 }} className="flex items-center gap-2 w-full"><div className="w-3 h-3 rounded bg-[#8A2BE2] flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white">work</span></div><span className="text-[8px] text-gray-400">Ofis</span><span className="text-[8px] text-white ml-auto">₺350</span></motion.div>
        </div>
      ),
      color: "#F5B400"
    },
    {
      id: 4,
      title: "4. Muhasebeci",
      desc: "Muhasebeciniz anında belgeyi alır.",
      content: (
        <>
          <img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full border-2 border-[#161922] mb-2" alt="Muhasebeci" />
          <motion.div 
            animate={activeStep === 3 ? { scale: [1, 1.1, 1] } : {}}
            className="bg-blue-500 text-white text-[7px] font-bold px-2 py-0.5 rounded-full"
          >
            İncele
          </motion.div>
        </>
      ),
      color: "#3B82F6"
    },
    {
      id: 5,
      title: "5. Onay",
      desc: "Onaylanır ve programa aktarılır.",
      content: (
        <motion.div 
          animate={activeStep === 4 ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
          className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        >
          <span className="material-symbols-outlined text-white text-[20px]">check</span>
        </motion.div>
      ),
      color: "#10B981"
    },
    {
      id: 6,
      title: "6. Rapor",
      desc: "Raporlarınız otomatik oluşturulur.",
      content: (
        <div className="flex items-end justify-center gap-1 w-full h-[60%] px-3">
          <motion.div initial={{ height: "20%" }} animate={{ height: activeStep === 5 ? "40%" : "20%" }} className="w-2 bg-[#8A2BE2]/40 rounded-t-sm"></motion.div>
          <motion.div initial={{ height: "40%" }} animate={{ height: activeStep === 5 ? "60%" : "40%" }} className="w-2 bg-[#8A2BE2]/60 rounded-t-sm"></motion.div>
          <motion.div initial={{ height: "60%" }} animate={{ height: activeStep === 5 ? "80%" : "60%" }} className="w-2 bg-[#8A2BE2]/80 rounded-t-sm"></motion.div>
          <motion.div initial={{ height: "80%" }} animate={{ height: activeStep === 5 ? "100%" : "80%" }} className="w-2 bg-[#8A2BE2] rounded-t-sm shadow-[0_0_10px_#8A2BE2]"></motion.div>
        </div>
      ),
      color: "#8A2BE2"
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 mb-32 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111424] border border-[#232B45] mb-6"
      >
        <span className="text-[10px] font-bold tracking-widest text-[#B4B8D0] uppercase">AKILLI MUHASEBE SÜRECİ</span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[32px] md:text-[40px] font-extrabold mb-16 text-center text-white tracking-tight"
      >
        Fatura'dan Rapor'a<br/>Otomatik Yolculuk
      </motion.h2>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 relative">
        
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Card */}
            <motion.div 
              className="flex flex-col items-center z-10 w-[120px]"
              animate={activeStep === index ? { y: -10 } : { y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className={`w-20 md:w-24 h-24 bg-[#0D1017] rounded-xl mb-4 flex flex-col items-center justify-center relative shadow-lg ${step.id === 3 ? 'p-0' : ''}`}
                animate={{ 
                  borderColor: activeStep === index ? step.color : "rgba(255,255,255,0.1)",
                  boxShadow: activeStep === index ? `0 0 20px ${step.color}40` : "0 4px 6px -1px rgba(0,0,0,0.1)"
                }}
                style={{ borderWidth: "1px", borderStyle: "solid" }}
              >
                {step.content}
                
                {/* ID 1 Specific Icon */}
                {step.icon && (
                  <div className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-[#00F0FF] flex items-center justify-center border-2 border-[#07090E] shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                    <span className="material-symbols-outlined text-[12px] text-[#07090E]">{step.icon}</span>
                  </div>
                )}
              </motion.div>
              
              <span className="font-bold text-white text-[13px] mb-1 whitespace-nowrap">{step.title}</span>
              <span className="text-[10px] text-[#8E95B3] text-center w-24 leading-tight">{step.desc}</span>
            </motion.div>

            {/* Connecting Line (Hidden on mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex flex-1 h-[2px] mt-[-60px] relative items-center justify-center min-w-[20px]">
                <div 
                  className="w-full h-[2px] bg-white/10"
                ></div>
                
                {/* Moving dot animation */}
                <motion.div 
                  className="absolute left-0 w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]"
                  style={{ backgroundColor: steps[index + 1].color, color: steps[index + 1].color }}
                  animate={{ 
                    left: activeStep === index ? ["0%", "100%"] : "0%",
                    opacity: activeStep === index ? [0, 1, 0] : 0 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: activeStep === index ? Infinity : 0
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}

      </div>
    </section>
  );
}
