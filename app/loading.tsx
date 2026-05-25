export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      
      <div className="animate-pulse space-y-6">

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-7 h-[320px] rounded-3xl bg-zinc-900" />

          <div className="col-span-5 h-[320px] rounded-3xl bg-zinc-900" />

          <div className="col-span-4 h-40 rounded-3xl bg-zinc-900" />
          <div className="col-span-4 h-40 rounded-3xl bg-zinc-900" />
          <div className="col-span-4 h-40 rounded-3xl bg-zinc-900" />

        </div>

      </div>

    </main>
  );
}