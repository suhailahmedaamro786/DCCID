import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export function NewsCard({ slug, category, title, date, excerpt }: { slug: string; category: string; title: string; date: string; excerpt: string }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-slate-300">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-gold-600">{category}</span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500"><CalendarDays size={14}/>{date}</span>
      </div>
      <h3 className="text-xl font-extrabold leading-snug text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt}</p>
      <Link href={`/news/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-800">Read update <ArrowUpRight size={16}/></Link>
    </article>
  );
}