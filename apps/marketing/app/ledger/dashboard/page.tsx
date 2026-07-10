"use client";

import React from "react";

export default function Dashboard() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
        .border-subtle { border: 1px solid rgba(255, 255, 255, 0.08); }
        .ai-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
      `}} />
      <div className="bg-[#0D1014] text-on-surface font-body-md min-h-screen flex overflow-hidden">
        {/* SideNavBar */}
        <nav className="w-[200px] h-screen fixed left-0 top-0 bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant flex flex-col py-stack-md px-gutter z-50">
          <div className="mb-stack-lg flex items-center gap-3 px-2">
            <span className="material-symbols-outlined text-primary-container text-3xl">psychology</span>
            <div>
              <h1 className="font-display-lg text-headline-md font-bold text-on-surface dark:text-on-surface m-0 leading-tight">Workigom v2</h1>
              <p className="font-label-md text-label-md text-on-surface-variant m-0">AI Operating System</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <ul className="space-y-1">
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">dashboard</span> Dashboard
                </a>
              </li>
              <li>
                {/* Active State: Smart Inbox */}
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface-container-high dark:bg-surface-container-high text-primary-container dark:text-primary-container font-semibold transition-colors opacity-80 duration-150 font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>inbox</span> Smart Inbox
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">group</span> Clients
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">psychology</span> AI Assistant
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">description</span> Documents
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">fact_check</span> Approvals
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">rule</span> Rules Engine
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">settings_suggest</span> Automation
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">analytics</span> Reports
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">link</span> Connections
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-stack-md border-t border-outline-variant dark:border-outline-variant mt-auto">
            <ul className="space-y-1">
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">settings</span> Settings
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors font-body-md text-body-md" href="#">
                  <span className="material-symbols-outlined text-xl">help</span> Support
                </a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3 px-3">
              <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border-subtle">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body-sm text-body-sm text-on-surface truncate">Accountant Profile</p>
              </div>
            </div>
          </div>
        </nav>

        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-200px)] h-14 bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant flex items-center justify-between px-gutter ml-[200px] z-40">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input className="w-full bg-[#0D1014] border border-outline-variant text-on-surface text-body-sm font-body-sm rounded-lg pl-9 pr-3 py-1.5 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" placeholder="Search documents, suppliers..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#171B21] border-subtle rounded-full cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary-container text-sm">memory</span>
              <span className="font-label-md text-label-md text-primary-container font-medium">AI: 42 Docs Processed</span>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-xl">account_circle</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="ml-[200px] mt-14 flex-1 flex flex-col h-[calc(100vh-56px)] w-[calc(100%-200px)] bg-[#0D1014] relative">
          <div className="flex-1 flex overflow-hidden p-unit gap-unit">
            
            {/* Column 1: Smart Inbox List */}
            <div className="w-[260px] flex-shrink-0 flex flex-col bg-[#171B21] border-subtle rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-subtle flex justify-between items-center bg-[#1C2128]">
                <h2 className="font-label-md text-label-md text-on-surface font-semibold tracking-wider uppercase">Inbox <span className="text-on-surface-variant ml-1 font-normal">(12)</span></h2>
                <div className="flex gap-1">
                  <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant"><span className="material-symbols-outlined text-sm">filter_list</span></button>
                  <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant"><span className="material-symbols-outlined text-sm">sort</span></button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                
                {/* Active Item */}
                <div className="p-3 rounded-lg bg-[#1C2128] border border-primary-container/30 cursor-pointer relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container rounded-l-lg"></div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">Shell Energy Ltd</span>
                    <span className="font-mono-sm text-mono-sm text-on-surface-variant">Today, 09:41</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">INV-2023-8991</span>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-container ai-pulse"></div>
                        <span className="font-label-md text-[10px] text-primary-container uppercase">Ready (99%)</span>
                      </div>
                    </div>
                    <span className="font-mono-sm text-mono-sm font-medium text-on-surface">£450.20</span>
                  </div>
                </div>

                {/* Inactive Items */}
                <div className="p-3 rounded-lg hover:bg-[#1C2128] border border-transparent border-subtle cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">AWS EMEA SARL</span>
                    <span className="font-mono-sm text-mono-sm text-on-surface-variant">Yesterday</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">12489992</span>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
                        <span className="font-label-md text-[10px] text-error uppercase">Review (64%)</span>
                      </div>
                    </div>
                    <span className="font-mono-sm text-mono-sm font-medium text-on-surface">£1,240.00</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg hover:bg-[#1C2128] border border-transparent border-subtle cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">Adobe Systems</span>
                    <span className="font-mono-sm text-mono-sm text-on-surface-variant">Oct 12</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">ADB-441-A</span>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-container"></div>
                        <span className="font-label-md text-[10px] text-primary-container uppercase">Ready (98%)</span>
                      </div>
                    </div>
                    <span className="font-mono-sm text-mono-sm font-medium text-on-surface">£54.99</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Document Preview */}
            <div className="flex-1 min-w-[300px] flex flex-col bg-[#171B21] border-subtle rounded-xl overflow-hidden">
              <div className="px-3 py-2 border-b border-subtle flex justify-between items-center bg-[#1C2128]">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant"><span className="material-symbols-outlined text-sm">view_sidebar</span></button>
                  <span className="font-label-md text-label-md text-on-surface-variant border-l border-subtle pl-2">INV-2023-8991.pdf</span>
                </div>
                <div className="flex items-center gap-1 bg-[#0D1014] rounded-md p-0.5 border-subtle">
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant"><span className="material-symbols-outlined text-sm">zoom_out</span></button>
                  <span className="font-mono-sm text-mono-sm text-on-surface px-1">100%</span>
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant"><span className="material-symbols-outlined text-sm">zoom_in</span></button>
                  <div className="w-px h-4 bg-outline-variant mx-1"></div>
                  <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant"><span className="material-symbols-outlined text-sm">rotate_right</span></button>
                </div>
              </div>
              <div className="flex-1 flex overflow-hidden bg-[#0D1014] relative p-4 items-center justify-center">
                <div className="w-full max-w-md aspect-[1/1.4] bg-white rounded shadow-md relative overflow-hidden">
                  <div className="bg-cover bg-center w-full h-full opacity-90 mix-blend-multiply" data-alt="..." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkDQVfvyqRW-rDkXjmdVFTEHxeVi5IN48C3MFTjNGepYvzkUd56nJqI57ssgrvn_dXO2oBkkcLeGeiTw3vOKDD6FiJYWzRZ57ToX2RjpfPT6iYVI7fXXl9niCal96ghcjJ4iSrmeZAoyecu6fJ_AXd8g0uYN5xRFh7YNT_rzhlG2_P9EgGiLC0hpUTU2fCfBnf7vK-hGbI3iyCbyVJ84zs3a8TTBBujiSBoqt4agRZAbR4T6SyGxw9bX5t1OvSYRDhqgtPfcMMH18')"}}></div>
                  <div className="absolute top-[15%] right-[10%] w-[25%] h-[4%] border-2 border-primary-container bg-primary-container/10 rounded-sm"></div>
                  <div className="absolute top-[25%] left-[10%] w-[35%] h-[8%] border-2 border-primary-container bg-primary-container/10 rounded-sm"></div>
                  <div className="absolute bottom-[20%] right-[10%] w-[20%] h-[3%] border-2 border-error bg-error/10 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Column 3: Extraction / Metadata */}
            <div className="w-[280px] flex-shrink-0 flex flex-col bg-[#171B21] border-subtle rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-subtle bg-[#1C2128]">
                <h2 className="font-label-md text-label-md text-on-surface font-semibold tracking-wider uppercase">Extracted Data</h2>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant mb-1.5 block">Supplier Name</label>
                  <div className="relative group">
                    <input className="w-full bg-[#0D1014] border border-outline-variant text-on-surface text-body-sm font-body-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary-container transition-colors" type="text" defaultValue="Shell Energy Ltd" />
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-primary-container text-xs opacity-0 group-hover:opacity-100 transition-opacity">auto_awesome</span>
                  </div>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant mb-1.5 block">Invoice Number</label>
                  <input className="w-full bg-[#0D1014] border border-outline-variant text-on-surface text-body-sm font-body-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary-container transition-colors" type="text" defaultValue="INV-2023-8991" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant mb-1.5 block">Issue Date</label>
                    <input className="w-full bg-[#0D1014] border border-outline-variant text-on-surface text-body-sm font-body-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary-container transition-colors" type="text" defaultValue="24 Oct 2023" />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant mb-1.5 block">Due Date</label>
                    <input className="w-full bg-[#0D1014] border border-outline-variant text-on-surface text-body-sm font-body-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary-container transition-colors" type="text" defaultValue="24 Nov 2023" />
                  </div>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant mb-1.5 block">Category</label>
                  <div className="relative">
                    <select className="w-full bg-[#0D1014] border border-outline-variant text-on-surface text-body-sm font-body-sm rounded-md pl-3 pr-8 py-2 appearance-none focus:outline-none focus:border-primary-container transition-colors">
                      <option>Utilities - Fuel & Energy</option>
                      <option>Office Supplies</option>
                      <option>Software Subscriptions</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="font-label-md text-label-md text-on-surface-variant">Tax / VAT ID</label>
                    <span className="font-label-md text-[10px] text-orange-400">Low Confidence</span>
                  </div>
                  <input className="w-full bg-[#0D1014] border border-orange-500/50 shadow-[0_0_8px_rgba(249,115,22,0.15)] text-on-surface text-body-sm font-body-sm rounded-md px-3 py-2 focus:outline-none focus:border-orange-500 transition-colors" type="text" defaultValue="GB82381283" />
                </div>
              </div>
            </div>

            {/* Column 4: Decision Center / AI Panel */}
            <div className="w-[280px] flex-shrink-0 flex flex-col gap-unit">
              <div className="flex-1 bg-[#171B21] border-subtle rounded-xl flex flex-col overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="px-4 py-3 border-b border-subtle bg-[#1C2128] flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">memory</span>
                  <h2 className="font-label-md text-label-md text-primary-container font-semibold tracking-wider uppercase">AI Analysis</h2>
                </div>
                <div className="p-4 space-y-4 flex-1 overflow-y-auto custom-scrollbar">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary-container text-[12px]">check</span>
                    </div>
                    <div>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">Supplier Recognized</p>
                      <p className="font-mono-sm text-mono-sm text-on-surface-variant mt-0.5">Matched with Vendor ID: V-8891 (99.6%)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary-container text-[12px]">label</span>
                    </div>
                    <div>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">Category Suggested</p>
                      <p className="font-mono-sm text-mono-sm text-on-surface-variant mt-0.5">Utilities based on historical data.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary-container text-[12px]">account_balance</span>
                    </div>
                    <div>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">Ledger Account: 760</p>
                      <p className="font-mono-sm text-mono-sm text-on-surface-variant mt-0.5">Rule triggered: "Shell Energy Default"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[#1C2128] border-t border-subtle grid grid-cols-2 gap-2">
                  <button className="col-span-2 bg-primary-container text-on-primary font-body-sm font-semibold py-2.5 px-4 rounded-md hover:bg-primary-fixed-dim transition-colors flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined text-sm">done_all</span> Approve & Post
                  </button>
                  <button className="bg-[#0D1014] text-on-surface font-body-sm py-2 px-3 rounded-md border border-subtle hover:bg-surface-container-low transition-colors text-center">
                    Edit Draft
                  </button>
                  <button className="bg-[#0D1014] text-error font-body-sm py-2 px-3 rounded-md border border-subtle hover:bg-error/10 transition-colors text-center">
                    Reject
                  </button>
                  <button className="col-span-2 bg-transparent text-primary-container font-body-sm py-1.5 px-3 rounded-md border border-dashed border-primary-container/30 hover:bg-primary-container/5 transition-colors text-center flex justify-center items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-xs">school</span> Teach AI
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Panel: Line Items */}
          <div className="h-[160px] flex-shrink-0 bg-[#171B21] border-t border-subtle mx-unit mb-unit rounded-b-xl overflow-hidden flex flex-col">
            <div className="px-4 py-2 border-b border-subtle bg-[#1C2128] flex justify-between items-center">
              <h2 className="font-label-md text-label-md text-on-surface font-semibold tracking-wider uppercase">Line Items</h2>
              <div className="flex items-center gap-4">
                <span className="font-mono-sm text-mono-sm text-on-surface-variant">Net: £375.17</span>
                <span className="font-mono-sm text-mono-sm text-on-surface-variant">Tax: £75.03</span>
                <span className="font-mono-sm text-mono-sm font-semibold text-primary-container">Total: £450.20</span>
              </div>
            </div>
            <div className="flex-1 overflow-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#0D1014] sticky top-0 z-10">
                  <tr>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle w-10">#</th>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle">Description</th>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle w-24">Account</th>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle text-right w-20">Qty</th>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle text-right w-24">Unit Price</th>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle w-24">Tax Code</th>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle text-right w-28">Total</th>
                    <th className="px-4 py-2 font-label-md text-[11px] text-on-surface-variant font-medium border-b border-subtle w-10"></th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  <tr className="hover:bg-[#1C2128] border-b border-subtle/50 group">
                    <td className="px-4 py-2 text-on-surface-variant font-mono-sm">1</td>
                    <td className="px-4 py-2"><input className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-sm" type="text" defaultValue="Electricity Supply - Oct 23" /></td>
                    <td className="px-4 py-2 font-mono-sm text-primary-container">760</td>
                    <td className="px-4 py-2 text-right"><input className="w-full bg-transparent border-none p-0 focus:ring-0 text-right text-on-surface font-mono-sm" type="text" defaultValue="1.00" /></td>
                    <td className="px-4 py-2 text-right font-mono-sm">£375.17</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high border-subtle text-xs font-mono-sm text-on-surface-variant">20% (S)</span>
                    </td>
                    <td className="px-4 py-2 text-right font-mono-sm font-medium">£450.20</td>
                    <td className="px-4 py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-on-surface-variant hover:text-error"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#1C2128]">
                    <td className="px-4 py-2 text-on-surface-variant font-mono-sm">*</td>
                    <td className="px-4 py-2 text-on-surface-variant italic text-xs">Add new line...</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Floating AI Copilot */}
          <div className="absolute bottom-6 right-6 flex flex-col items-end gap-2 z-50 group">
            <div className="w-64 bg-[#1C2128] border border-primary-container/30 rounded-xl p-3 shadow-lg shadow-black/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-200 pointer-events-none group-hover:pointer-events-auto">
              <p className="font-body-sm text-body-sm text-on-surface mb-2">I noticed the VAT number confidence is low (64%). Should I create a validation rule for this supplier?</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-primary-container/10 hover:bg-primary-container/20 text-primary-container border border-primary-container/30 rounded py-1 font-label-md text-xs transition-colors">Yes, create rule</button>
                <button className="flex-1 bg-[#0D1014] hover:bg-surface-container-low text-on-surface-variant border border-subtle rounded py-1 font-label-md text-xs transition-colors">Dismiss</button>
              </div>
            </div>
            <button className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-xl">temp_preferences_custom</span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
