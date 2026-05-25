"use client";

import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
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

  const Icon: LucideIcon =
    (Icons[icon_name as keyof typeof Icons] as LucideIcon) ||
    Icons.BookOpen;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-all duration-700" />

      <div className="absolute -top-10 -right-10 h-32 w-32 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        <div className="mb-8 flex items-center justify-between">

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <Icon className="w-6 h-6 text-indigo-400" />
          </div>

          <span className="text-sm font-medium text-zinc-400">
            {progress}%
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-8">
          {title}
        </h3>

        <div className="h-2 bg-white/5 rounded-full overflow-hidden">

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

    </motion.article>
  );
}