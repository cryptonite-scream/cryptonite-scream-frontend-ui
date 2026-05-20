"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Filter,
} from "lucide-react";

const creators = [
  {
    name: "Avery James",
    handle: "@averyj",
    followers: "1.2M",
    engagement: "6.4%",
    revenue: "$142k",
    status: "Elite",
    niche: "Luxury",
    avatar: "https://i.pravatar.cc/120?img=32",
    campaigns: [
      "Luxe Skincare Launch",
      "Holiday Gifting",
      "Athleisure Capsule",
    ],
    metrics: [
      { label: "Avg CTR", value: "5.1%" },
      { label: "ROAS", value: "4.9x" },
      { label: "Avg Order", value: "$86" },
    ],
  },
  {
    name: "Nina Solace",
    handle: "@ninas",
    followers: "820k",
    engagement: "5.7%",
    revenue: "$96k",
    status: "Rising",
    niche: "Beauty",
    avatar: "https://i.pravatar.cc/120?img=47",
    campaigns: ["Skincare Waitlist", "Wellness Retreat"],
    metrics: [
      { label: "Avg CTR", value: "4.3%" },
      { label: "ROAS", value: "3.8x" },
      { label: "Avg Order", value: "$72" },
    ],
  },
  {
    name: "Leo Arc",
    handle: "@leoarc",
    followers: "2.1M",
    engagement: "7.1%",
    revenue: "$210k",
    status: "Elite",
    niche: "Tech",
    avatar: "https://i.pravatar.cc/120?img=12",
    campaigns: ["Tech Creator Sprint", "Gadget Reveal"],
    metrics: [
      { label: "Avg CTR", value: "6.2%" },
      { label: "ROAS", value: "5.3x" },
      { label: "Avg Order", value: "$104" },
    ],
  },
  {
    name: "Maya Quinn",
    handle: "@mayaq",
    followers: "540k",
    engagement: "4.9%",
    revenue: "$68k",
    status: "Active",
    niche: "Wellness",
    avatar: "https://i.pravatar.cc/120?img=18",
    campaigns: ["Wellness Retreat", "Morning Ritual"],
    metrics: [
      { label: "Avg CTR", value: "3.9%" },
      { label: "ROAS", value: "3.4x" },
      { label: "Avg Order", value: "$64" },
    ],
  },
  {
    name: "Kai Monroe",
    handle: "@kaim",
    followers: "1.5M",
    engagement: "6.0%",
    revenue: "$128k",
    status: "Elite",
    niche: "Fashion",
    avatar: "https://i.pravatar.cc/120?img=5",
    campaigns: ["Streetwear Drop", "Luxury Travel Edit"],
    metrics: [
      { label: "Avg CTR", value: "5.4%" },
      { label: "ROAS", value: "4.2x" },
      { label: "Avg Order", value: "$92" },
    ],
  },
];

const filters = [
  {
    label: "Niche",
    options: ["All", "Luxury", "Beauty", "Tech", "Wellness", "Fashion"],
  },
  {
    label: "Followers",
    options: ["All", "100k+", "500k+", "1M+", "2M+"],
  },
  {
    label: "Engagement",
    options: ["All", ">4%", ">5%", ">6%"],
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

export default function CreatorsPage() {
  const spotlight = creators[0];

  return (
    <section className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Creators</h1>
          <p className="text-sm text-slate-400">
            Manage elite talent and track performance across campaigns.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10">
          <Sparkles className="h-4 w-4 text-emerald-300" />
          Add Creator
        </button>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="rounded-2xl border border-white/5 bg-white/5 p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Filters</h2>
            <p className="text-xs text-slate-400">
              Refine creators by niche and performance signals.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Filter className="h-4 w-4" />
            Smart filters
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {filters.map((filter) => (
            <div
              key={filter.label}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {filter.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {filter.options.map((option, index) => (
                  <button
                    key={option}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      index === 0
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-2xl border border-white/5 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Creator Directory</h2>
              <p className="text-xs text-slate-400">
                Track engagement, revenue, and status at a glance.
              </p>
            </div>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 hover:bg-white/10">
              Export
            </button>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/70 text-xs uppercase tracking-[0.2em] text-slate-500">
                <tr>
                  <th className="px-5 py-4">Creator</th>
                  <th className="px-5 py-4">Followers</th>
                  <th className="px-5 py-4">Engagement</th>
                  <th className="px-5 py-4">Revenue</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {creators.map((creator) => (
                  <tr key={creator.name} className="hover:bg-white/5">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          className="h-10 w-10 rounded-2xl object-cover"
                        />
                        <div>
                          <p className="font-semibold text-white">
                            {creator.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {creator.handle}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-300">
                      {creator.followers}
                    </td>
                    <td className="px-5 py-4 text-emerald-300">
                      {creator.engagement}
                    </td>
                    <td className="px-5 py-4 text-slate-200">
                      {creator.revenue}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {creator.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              <h2 className="text-lg font-semibold">Creator Profile</h2>
              <p className="text-xs text-slate-400">
                Spotlight analytics and campaign history.
              </p>
            </div>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10">
              View
            </button>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-4">
              <img
                src={spotlight.avatar}
                alt={spotlight.name}
                className="h-14 w-14 rounded-2xl object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-white">
                  {spotlight.name}
                </p>
                <p className="text-xs text-slate-500">
                  {spotlight.handle} · {spotlight.niche}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {spotlight.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Active campaigns
              </p>
              <div className="mt-3 space-y-2">
                {spotlight.campaigns.map((campaign) => (
                  <div
                    key={campaign}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300"
                  >
                    <span>{campaign}</span>
                    <span className="flex items-center gap-1 text-emerald-300">
                      <TrendingUp className="h-3 w-3" />
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-transparent p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Star className="h-4 w-4 text-emerald-300" />
                Performance highlight
              </div>
              <p className="mt-2 text-sm text-slate-200">
                {spotlight.name} delivered a 4.9x ROAS across the last 30 days
                with consistent top-tier engagement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
