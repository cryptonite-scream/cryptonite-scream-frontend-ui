"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Briefcase,
  Users,
  TrendingUp,
  Percent,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    label: "Total Campaigns",
    value: "128",
    change: "+12%",
    icon: Briefcase,
    gradient: "from-emerald-500/20 via-emerald-400/5 to-transparent",
    accent: "text-emerald-300",
  },
  {
    label: "Active Creators",
    value: "1,245",
    change: "+8%",
    icon: Users,
    gradient: "from-sky-500/20 via-sky-400/5 to-transparent",
    accent: "text-sky-300",
  },
  {
    label: "Revenue Generated",
    value: "$3.42M",
    change: "+21%",
    icon: TrendingUp,
    gradient: "from-purple-500/20 via-purple-400/5 to-transparent",
    accent: "text-purple-300",
  },
  {
    label: "Conversion Rate",
    value: "4.7%",
    change: "+0.6%",
    icon: Percent,
    gradient: "from-amber-500/20 via-amber-400/5 to-transparent",
    accent: "text-amber-300",
  },
];

const engagementData = [
  { month: "Jan", engagement: 42 },
  { month: "Feb", engagement: 58 },
  { month: "Mar", engagement: 66 },
  { month: "Apr", engagement: 62 },
  { month: "May", engagement: 74 },
  { month: "Jun", engagement: 81 },
  { month: "Jul", engagement: 76 },
  { month: "Aug", engagement: 88 },
  { month: "Sep", engagement: 94 },
  { month: "Oct", engagement: 90 },
  { month: "Nov", engagement: 102 },
  { month: "Dec", engagement: 110 },
];

const kanbanColumns = [
  {
    title: "Draft",
    items: [
      { name: "Luxe Skincare Launch", budget: "$42k", status: "Draft" },
      { name: "Streetwear Drop", budget: "$18k", status: "Draft" },
    ],
  },
  {
    title: "Active",
    items: [
      { name: "Tech Creator Sprint", budget: "$96k", status: "Active" },
      { name: "Wellness Retreat", budget: "$54k", status: "Active" },
    ],
  },
  {
    title: "Reviewing",
    items: [
      { name: "Luxury Travel Edit", budget: "$68k", status: "Reviewing" },
    ],
  },
  {
    title: "Completed",
    items: [
      { name: "Holiday Gifting", budget: "$120k", status: "Completed" },
      { name: "Athleisure Capsule", budget: "$32k", status: "Completed" },
    ],
  },
];

const creatorRows = [
  {
    name: "Avery James",
    followers: "1.2M",
    engagement: "6.4%",
    revenue: "$142k",
    status: "Elite",
  },
  {
    name: "Nina Solace",
    followers: "820k",
    engagement: "5.7%",
    revenue: "$96k",
    status: "Rising",
  },
  {
    name: "Leo Arc",
    followers: "2.1M",
    engagement: "7.1%",
    revenue: "$210k",
    status: "Elite",
  },
  {
    name: "Maya Quinn",
    followers: "540k",
    engagement: "4.9%",
    revenue: "$68k",
    status: "Active",
  },
  {
    name: "Kai Monroe",
    followers: "1.5M",
    engagement: "6.0%",
    revenue: "$128k",
    status: "Elite",
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

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-slate-400">
            Real-time performance across campaigns, creators, and revenue.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10">
          <Sparkles className="h-4 w-4 text-emerald-300" />
          AI Insights
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.length === 0 ? (
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-slate-400">
            No stats available yet.
          </div>
        ) : (
          stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-1`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stat.gradient}`}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                    <div className="mt-3 text-2xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs text-emerald-300">
                      {stat.change} vs last month
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className={`h-5 w-5 ${stat.accent}`} />
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-2xl border border-white/5 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Engagement Over Time</h2>
              <p className="text-xs text-slate-400">
                Weekly average engagement per campaign
              </p>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              +14% QoQ
            </span>
          </div>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ stroke: "rgba(148,163,184,0.3)" }}
                  contentStyle={{
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(148,163,184,0.2)",
                    borderRadius: 12,
                    color: "#e2e8f0",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="#34d399"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-2xl border border-white/5 bg-white/5 p-6"
        >
          <h2 className="text-lg font-semibold">Highlights</h2>
          <p className="text-xs text-slate-400">
            Real-time signals across campaigns
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                label: "Top campaign",
                value: "Luxury Travel Edit",
                detail: "CTR 5.2%",
              },
              {
                label: "Fastest growing",
                value: "Tech Creator Sprint",
                detail: "+18% engagement",
              },
              {
                label: "Highest ROI",
                value: "Holiday Gifting",
                detail: "4.9x",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-emerald-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="rounded-2xl border border-white/5 bg-white/5 p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Campaign Kanban</h2>
            <p className="text-xs text-slate-400">
              Drag and drop campaigns through your pipeline
            </p>
          </div>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 hover:bg-white/10">
            New Campaign
          </button>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {kanbanColumns.length === 0 ? (
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-400">
              No campaigns yet.
            </div>
          ) : (
            kanbanColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-2xl border border-white/5 bg-slate-950/60 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">
                    {column.title}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {column.items.length}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <div
                      key={item.name}
                      draggable
                      className="cursor-grab rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.8)] transition hover:-translate-y-1 hover:border-white/20"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.name}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Budget</span>
                        <span className="text-emerald-300">{item.budget}</span>
                      </div>
                      <div className="mt-2 inline-flex rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
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
            <h2 className="text-lg font-semibold">Creator Performance</h2>
            <p className="text-xs text-slate-400">
              High-signal metrics across your top creators
            </p>
          </div>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 hover:bg-white/10">
            Export Report
          </button>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950/70 text-xs uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Followers</th>
                <th className="px-5 py-4">Engagement</th>
                <th className="px-5 py-4">Revenue</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {creatorRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-6 text-center text-sm text-slate-400"
                  >
                    No creator data available.
                  </td>
                </tr>
              ) : (
                creatorRows.map((row) => (
                  <tr key={row.name} className="hover:bg-white/5">
                    <td className="px-5 py-4 font-semibold text-white">
                      {row.name}
                    </td>
                    <td className="px-5 py-4 text-slate-300">
                      {row.followers}
                    </td>
                    <td className="px-5 py-4 text-emerald-300">
                      {row.engagement}
                    </td>
                    <td className="px-5 py-4 text-slate-200">
                      {row.revenue}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
