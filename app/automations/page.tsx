"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  Zap,
  CheckCircle2,
  Sparkles,
  Bot,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    label: "Messages Sent",
    value: "248,940",
    change: "+18.4%",
    icon: MessageCircle,
    accent: "from-emerald-500/30 via-emerald-400/10 to-transparent",
    tone: "text-emerald-300",
  },
  {
    label: "Conversion Rate",
    value: "6.8%",
    change: "+0.9%",
    icon: Zap,
    accent: "from-sky-500/30 via-sky-400/10 to-transparent",
    tone: "text-sky-300",
  },
  {
    label: "Revenue Generated",
    value: "$1.72M",
    change: "+12.2%",
    icon: Sparkles,
    accent: "from-purple-500/30 via-purple-400/10 to-transparent",
    tone: "text-purple-300",
  },
];

const flowSteps = [
  {
    title: "Comment",
    description: "Trigger automation when a follower comments on a post.",
    icon: MessageCircle,
    accent: "text-emerald-300",
  },
  {
    title: "DM",
    description: "Send a branded, personalized reply instantly.",
    icon: Send,
    accent: "text-sky-300",
  },
  {
    title: "CTA",
    description: "Deliver the Magic Link or offer with a CTA.",
    icon: Bot,
    accent: "text-purple-300",
  },
  {
    title: "Conversion",
    description: "Track purchases and sign-ups in real time.",
    icon: CheckCircle2,
    accent: "text-amber-300",
  },
];

const automations = [
  {
    name: "Holiday Drop: VIP Access",
    status: "Live",
    conversions: "1,240",
    ctr: "8.1%",
  },
  {
    name: "Skincare Waitlist",
    status: "Optimizing",
    conversions: "830",
    ctr: "6.4%",
  },
  {
    name: "Creator Collab Giveaway",
    status: "Live",
    conversions: "2,390",
    ctr: "9.6%",
  },
  {
    name: "New Collection Teaser",
    status: "Paused",
    conversions: "410",
    ctr: "4.8%",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AutomationsPage() {
  return (
    <section className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Automations</h1>
          <p className="text-sm text-slate-400">
            Magic Link DM automations designed for Instagram conversion.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10">
          <Sparkles className="h-4 w-4 text-emerald-300" />
          New Automation
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-1"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stat.accent}`}
              />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-emerald-300">
                    {stat.change} vs last week
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className={`h-5 w-5 ${stat.tone}`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="rounded-2xl border border-white/5 bg-white/5 p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Automation Flow</h2>
            <p className="text-xs text-slate-400">
              Orchestrated Instagram comment-to-DM funnel.
            </p>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
            Live pipeline
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-1 items-center gap-4">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative flex-1 rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className={`h-4 w-4 ${step.accent}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="rounded-2xl border border-white/5 bg-white/5 p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Automation Library</h2>
            <p className="text-xs text-slate-400">
              Monitor your highest-performing DM sequences.
            </p>
          </div>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 hover:bg-white/10">
            View All
          </button>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950/70 text-xs uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="px-5 py-4">Automation</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Conversions</th>
                <th className="px-5 py-4">CTR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {automations.map((automation) => (
                <tr key={automation.name} className="hover:bg-white/5">
                  <td className="px-5 py-4 font-semibold text-white">
                    {automation.name}
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                      {automation.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-emerald-300">
                    {automation.conversions}
                  </td>
                  <td className="px-5 py-4 text-slate-200">
                    {automation.ctr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
