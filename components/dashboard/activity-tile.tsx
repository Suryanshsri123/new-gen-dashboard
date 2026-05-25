export default function ActivityTile() {
  return (
    <section className="h-full rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div>
          <p className="text-sm text-zinc-400 mb-1">
            Weekly Activity
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            Learning Heatmap
          </h2>
        </div>

        <div className="text-sm text-zinc-500">
          +12%
        </div>

      </div>

      <div className="grid grid-cols-7 gap-3">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-xl transition-all duration-300 hover:scale-110 ${
              Math.random() > 0.45
                ? "bg-gradient-to-br from-emerald-400 to-green-500"
                : "bg-white/5"
            }`}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between text-sm text-zinc-500">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
        <span>Sun</span>
      </div>

    </section>
  );
}