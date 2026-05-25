export default function HeroTile() {
  return (
    <section className="min-h-[520px] rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-8 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col justify-between h-full">

        <div>
          <p className="text-zinc-400 mb-2">
            Welcome back 👋
          </p>

          <h1 className="text-6xl tracking-tight font-bold mb-4">
            Suryansh
          </h1>

          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full mb-10">
            🔥 12 Day Learning Streak
          </div>

          <div className="flex flex-wrap gap-6">

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 min-w-[180px] transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
              <p className="text-zinc-400 text-sm mb-1">
                Active Courses
              </p>

              <h2 className="text-3xl font-bold">
                4
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 min-w-[180px] transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
              <p className="text-zinc-400 text-sm mb-1">
                Completion Rate
              </p>

              <h2 className="text-3xl font-bold">
                78%
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 min-w-[180px] transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
              <p className="text-zinc-400 text-sm mb-1">
                Hours Learned
              </p>

              <h2 className="text-3xl font-bold">
                126h
              </h2>
            </div>

          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 max-w-md">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <p className="text-zinc-400 text-sm mb-2">
              Current Focus
            </p>

            <h3 className="font-semibold text-lg">
              AI Engineering
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <p className="text-zinc-400 text-sm mb-2">
              Weekly Goal
            </p>

            <h3 className="font-semibold text-lg">
              18 Hours
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}