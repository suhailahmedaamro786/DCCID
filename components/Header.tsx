"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(7,17,31,.04)]">
      <div className="bg-navy-950 text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 text-[11px] font-medium tracking-wide">
          <span className="font-semibold">Dadu Chamber of Commerce & Industry</span>
          <a href="tel:03337063343" className="hidden items-center gap-2 text-slate-300 transition hover:text-gold-400 sm:flex"><Phone size={12}/> 03337063343</a>
        </div>
      </div>
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-950 text-sm font-black text-gold-400 shadow-lg transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl">DCCI</span>
          <span>
            <span className="block text-sm font-extrabold tracking-tight text-navy-950">DADU CHAMBER</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[.22em] text-slate-500">Commerce & Industry</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-navy-950 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold-400 after:transition-transform hover:after:scale-x-100">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link href="/contact" className="btn-lift inline-flex items-center gap-2 rounded-xl bg-navy-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800">
            Contact Chamber <ArrowUpRight size={16} />
          </Link>
        </div>

        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-navy-950 transition hover:border-gold-400 hover:bg-white xl:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="animate-in border-t border-slate-200 bg-white/98 shadow-xl xl:hidden">
          <nav className="container-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-transparent px-3 py-3 font-semibold text-slate-700 transition hover:border-gold-200 hover:bg-gold-50 hover:text-navy-950">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}