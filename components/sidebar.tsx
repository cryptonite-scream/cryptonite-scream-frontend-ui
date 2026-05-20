"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Megaphone,
  Users,
  Sparkles,
  LineChart,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Campaigns", icon: Megaphone },
  { label: "Creators", icon: Users },
  { label: "Automations", icon: Sparkles },
  { label: "Analytics", icon: LineChart },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-white/5 bg-slate-950/80 px-6 py-8 lg:flex lg:flex-col">
      <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Click
      </div>
      <div className="mt-10 flex flex-1 flex-col gap-2">
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-4 w-4 text-slate-400 group-hover:text-emerald-300" />
            <span>{item.label}</span>
          </motion.button>
        ))}
      </div>
      <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-slate-400">
        AI-first operating system for creators and brands.
      </div>
    </aside>
  );
}
