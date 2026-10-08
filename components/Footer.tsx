import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.8fr_.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 font-black text-gold-400">DCCI</span>
              <div><p className="font-extrabold">Dadu Chamber of Commerce & Industry</p><p className="text-xs text-slate-400">Business community · Dadu, Sindh</p></div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              A professional digital platform for chamber information, business community updates, member services and public communication.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-gold-400">Explore</p>
            <div className="grid gap-3 text-sm text-slate-300">
              <Link href="/about" className="hover:text-white">About DCCI</Link>
              <Link href="/leadership" className="hover:text-white">Leadership</Link>
              <Link href="/membership" className="hover:text-white">Membership</Link>
              <Link href="/news" className="hover:text-white">News & Updates</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-gold-400">Resources</p>
            <div className="grid gap-3 text-sm text-slate-300">
              <Link href="/events" className="hover:text-white">Events</Link>
              <Link href="/resources" className="hover:text-white">Downloads</Link>
              <Link href="/committee" className="hover:text-white">Committee</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-gold-400">Chamber Office</p>
            <div className="space-y-4 text-sm text-slate-300">
              <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-gold-400" size={17}/>1st Floor, Al Qadir Trade Centre, New Chowk, Dadu, Sindh</p>
              <p className="flex gap-3"><Mail className="mt-1 shrink-0 text-gold-400" size={17}/>info@dccidadu.org.pk</p>
              <p className="flex gap-3"><Phone className="mt-1 shrink-0 text-gold-400" size={17}/>03131282605 · 03337063343 · 03313653717</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dadu Chamber of Commerce & Industry. All rights reserved.</p>
          <p>Official digital platform · Built for a modern business community</p>
        </div>
      </Container>
    </footer>
  );
}