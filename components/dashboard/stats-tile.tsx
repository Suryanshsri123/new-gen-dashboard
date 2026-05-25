export default function StatsTile() {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6 min-h-[180px] flex flex-col justify-between">

      <div>
        <p className="text-sm text-zinc-400 mb-2">
          Productivity
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          86%
        </h2>
      </div>

      <div className="space-y-3">

        <div className="h-3 rounded-full bg-white/5 overflow-hidden">
          <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-emerald-400 to-green-500" />
        </div>

        <div className="flex justify-between text-sm text-zinc-500">
          <span>Weekly Goal</span>
          <span>18h / 21h</span>
        </div>

      </div>

    </section>
  );
}