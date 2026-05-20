"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";
import { Calendar, ChevronDown, Sparkles } from "lucide-react";

const engagementData = [
  { week: "W1", rate: 4.2 },
  { week: "W2", rate: 4.9 },
  { week: "W3", rate: 5.1 },
  { week: "W4", rate: 4.7 },
  { week: "W5", rate: 5.6 },
  { week: "W6", rate: 6.1 },
  { week: "W7", rate: 5.8 },
  { week: "W8", rate: 6.4 },
];

const revenueData = [
  { channel: "Stories", revenue: 420 },
  { channel: "Reels", revenue: 680 },
  { channel: "Feed", revenue: 540 },
  { channel: "DM", revenue: 760 },
  { channel: "Live", revenue: 310 },
];

const funnelData = [
  { stage: "Impressions", value: 120000 },
  { stage: "Engaged", value: 42000 },
  { stage: "Clicks", value: 12000 },
  { stage: "Conversions", value: 3800 },
];

const metrics = [
  { label: "CTR", value: "5.6%", change: "+0.8%" },
  { label: "CPM", value: "$12.40", change: "-4.1%" },
  { label: "ROI", value: "4.9x", change: "+0.6x" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AnalyticsPage() {
  return (
    <section className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
          <p className="text-sm text-slate-400">
            Clean, real-time insight into engagement, revenue, and conversion.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10">
            <Calendar className="h-4 w-4 text-emerald-300" />
            Last 30 days
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10">
            <Sparkles className="h-4 w-4 text-purple-300" />
            All Campaigns
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.7)]"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              {metric.label}
            </p>
            <div className="mt-3 flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-white">
                {metric.value}
              </p>
              <span className="text-xs text-emerald-300">
                {metric.change}
              </span>
            </div>
          </motion.div>
        ))}
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
              <h2 className="text-lg font-semibold">Engagement Rate</h2>
              <p className="text-xs text-slate-400">Weekly engagement trend</p>
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
                  dataKey="week"
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
                  dataKey="rate"
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
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Conversion Funnel</h2>
              <p className="text-xs text-slate-400">Impressions to purchases</p>
            </div>
          </div>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <Tooltip
                  contentStyle={{
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(148,163,184,0.2)",
                    borderRadius: 12,
                    color: "#e2e8f0",
                  }}
                />
                <Funnel dataKey="value" data={funnelData} isAnimationActive>
                  <LabelList
                    dataKey="stage"
                    position="right"
                    fill="#e2e8f0"
                    fontSize={12}
                  />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
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
            <h2 className="text-lg font-semibold">Revenue Attribution</h2>
            <p className="text-xs text-slate-400">
              Channel contribution to total revenue
            </p>
          </div>
        </div>
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis
                dataKey="channel"
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
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#a855f7"
                fill="url(#revenueGradient)"
                strokeWidth={2}
                fillOpacity={0.2}
              />
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  );
}
