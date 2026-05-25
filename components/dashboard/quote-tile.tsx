export default function QuoteTile() {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6 min-h-[180px] flex flex-col justify-between">

      <div>
        <p className="text-sm text-zinc-400 mb-3">
          Daily Motivation
        </p>

        <blockquote className="text-2xl font-semibold tracking-tight leading-relaxed">
          “Consistency compounds faster than motivation.”
        </blockquote>
      </div>

      <p className="text-sm text-zinc-500 mt-6">
        — Nexus AI
      </p>

    </section>
  );
}