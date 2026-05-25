"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  progress: number;
  icon_name: string;
}

export default function CourseCard({
  title,
  progress,
  icon_name,
}: Props) {

  const Icon =
    Icons[icon_name as keyof typeof Icons] ||
    Icons.BookOpen;

  return (
    <motion.article
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6 min-h-[220px]"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-all duration-500" />

      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl group-hover:scale-125 transition-transform duration-700" />

      <div className="relative z-10 flex flex-col h-full justify-between">

        <div className="flex items-start justify-between">

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <Icon className="w-6 h-6 text-indigo-400" />
          </div>

          <span className="text-sm font-medium text-zinc-400">
            {progress}%
          </span>

        </div>

        <div className="mt-10">

          <h3 className="text-3xl tracking-tight font-semibold leading-tight mb-8">
            {title}
          </h3>

          <div className="h-2 rounded-full bg-white/5 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-500"
            />

          </div>

        </div>

      </div>

    </motion.article>
  );
}