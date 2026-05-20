"use client";

import { Bell, Search } from "lucide-react";

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/5 bg-slate-950/80 px-8 py-4 backdrop-blur-xl">
      <div className="flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-slate-300">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          placeholder="Search campaigns, creators, analytics..."
        />
      </div>
      <div className="ml-6 flex items-center gap-4">
        <button className="relative rounded-full border border-white/5 bg-white/5 p-2 text-slate-300 hover:text-white">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400" />
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400/80 via-sky-400/80 to-purple-500/80" />
      </div>
    </header>
  );
}
