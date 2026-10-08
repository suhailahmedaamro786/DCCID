"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="bg-navy-950 text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 text-[11px] font-medium tracking-wide">
          <span>Dadu Chamber of Commerce & Industry</span>
          <span className="hidden sm:block text-slate-300">Dadu District · Sindh · Pakistan</span>
        </div>
      </div>
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-950 text-sm font-black text-gold-400 shadow-lg">DCCI</span>
          <span>
            <span className="block text-sm font-extrabold tracking-tight text-navy-950">DADU CHAMBER</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[.22em] text-slate-500">Commerce & Industry</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-navy-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800">
            Contact Chamber <ArrowUpRight size={16} />
          </Link>
        </div>

        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-lg p-2 xl:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <nav className="container-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}