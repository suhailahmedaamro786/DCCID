import { UserRound } from "lucide-react";

export function LeadershipCard({ role, name, initials }: { role: string; name: string; initials: string }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold-400/60">
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700">
        <div className="grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-white/10 text-2xl font-black text-gold-400 backdrop-blur">
          <span>{initials}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[.15em] text-gold-600">{role}</p>
        <h3 className="mt-2 text-lg font-extrabold text-navy-950">{name}</h3>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><UserRound size={14}/> DCCI Office Bearer</div>
      </div>
    </article>
  );
}