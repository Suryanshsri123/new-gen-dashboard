"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { name: "Dashboard", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="hidden md:flex flex-col w-64 bg-zinc-950/80 backdrop-blur-xl border-r border-white/10 p-4 sticky top-0 h-screen">

      <div className="text-3xl font-black tracking-tight mb-10">
        Nexus
      </div>

      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left overflow-hidden transition-all duration-300 hover:bg-white/5"
            >
              {active === item.name && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              <Icon className="w-5 h-5 relative z-10 text-zinc-300" />

              <span className="relative z-10 font-medium text-zinc-200">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-zinc-400 mb-2">
            Pro Membership
          </p>

          <h3 className="font-semibold mb-3">
            Unlock AI Insights
          </h3>

          <button className="w-full rounded-xl bg-white text-black py-2 text-sm font-semibold hover:bg-zinc-200 transition-all">
            Upgrade
          </button>
        </div>
      </div>

    </nav>
  );
}