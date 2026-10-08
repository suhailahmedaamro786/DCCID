import Link from "next/link";
import { ArrowRight, Building2, Handshake, Landmark, Megaphone, ShieldCheck, UsersRound } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { LeadershipCard } from "@/components/LeadershipCard";
import { NewsCard } from "@/components/NewsCard";
import { leadership, news, benefits } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white grid-pattern">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl animate-pulse-soft" /><div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <Container className="relative grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-gold-400">Dadu · Sindh · Pakistan</p>
            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Building a stronger <span className="text-gold-400">business community.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Dadu Chamber of Commerce & Industry connects businesses, represents the commercial community and provides a trusted platform for information, services and collaboration.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about" className="btn-lift inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-3.5 text-sm font-extrabold text-navy-950 hover:bg-gold-300">Explore DCCI <ArrowRight size={17}/></Link>
              <Link href="/membership" className="btn-lift inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/10">Membership Information</Link>
            </div>
          </Reveal>
          <Reveal delay={.12}>
            <div className="glass-card rounded-[28px] border border-white/10 bg-white/[.06] p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-white/[.08] to-transparent p-7">
                <div className="mb-12 flex items-center justify-between"><span className="text-sm font-bold">DCCI / 2026</span><span className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_18px_#e9c46a]"/></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    [Building2, "Business Representation"], [Handshake, "Networking & Collaboration"],
                    [Megaphone, "Chamber Communication"], [ShieldCheck, "Trusted Institution"]
                  ].map(([Icon, label]) => {
                    const I = Icon as typeof Building2;
                    return <div key={label as string} className="glass-card rounded-2xl border border-white/10 bg-white/5 p-5"><I size={22} className="text-gold-400"/><p className="mt-4 text-sm font-bold">{label as string}</p></div>
                  })}
                </div>
                <div className="mt-4 rounded-2xl bg-gold-400 p-5 text-navy-950"><p className="text-xs font-bold uppercase tracking-[.15em]">Our focus</p><p className="mt-2 text-lg font-black">Connect · Represent · Support · Grow</p></div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="grid gap-5 py-7 sm:grid-cols-3">
          {[["District Focus", "Dadu District"], ["Region", "Sindh, Pakistan"], ["Purpose", "Business Community"]].map(([a,b]) => <div key={a} className="group flex items-center gap-3"><Landmark className="text-gold-600 transition-transform duration-300 group-hover:-translate-y-1" size={20}/><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">{a}</p><p className="text-sm font-extrabold text-navy-950">{b}</p></div></div>)}
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-600">About the Chamber</p><h2 className="mt-4 text-4xl font-black tracking-tight text-navy-950">A professional platform for Dadu's business community.</h2></Reveal>
          <Reveal delay={.08}><div className="space-y-5 text-base leading-8 text-slate-600"><p>Dadu Chamber of Commerce & Industry provides an institutional platform where the local business community can connect, communicate and engage around shared commercial interests.</p><p>This new digital experience is designed to make chamber information easier to discover — from leadership and membership to news, events, notices and resources.</p><Link href="/about" className="inline-flex items-center gap-2 font-bold text-navy-950">Learn more about DCCI <ArrowRight size={16}/></Link></div></Reveal>
        </Container>
      </section>

      <section className="bg-slate-100 py-24">
        <Container>
          <Reveal><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-600">Leadership</p><h2 className="mt-3 text-4xl font-black text-navy-950">Office Bearers</h2></div><Link href="/leadership" className="inline-flex items-center gap-2 text-sm font-bold text-navy-950">View leadership <ArrowRight size={16}/></Link></div></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{leadership.map((person, i) => <Reveal key={person.name} delay={i*.05}><LeadershipCard {...person}/></Reveal>)}</div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-600">Member Value</p><h2 className="mt-3 text-4xl font-black text-navy-950">What DCCI stands for</h2><p className="mt-4 leading-7 text-slate-600">A clearer, more accessible chamber experience built around the needs of businesses and the wider commercial community.</p></div></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{benefits.map(([title, text], i) => <Reveal key={title} delay={i*.06}><div className="card-lift rounded-2xl border border-slate-200 bg-white p-7 shadow-soft"><UsersRound className="text-gold-600"/><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div></Reveal>)}</div>
        </Container>
      </section>

      <section className="bg-navy-950 py-24 text-white">
        <Container>
          <Reveal><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-400">Latest</p><h2 className="mt-3 text-4xl font-black">News & Updates</h2></div><Link href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-white">View all updates <ArrowRight size={16}/></Link></div></Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{news.map((item, i) => <Reveal key={item.slug} delay={i*.06}><div className="[&>article]:bg-white"><NewsCard {...item}/></div></Reveal>)}</div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-navy-950 to-navy-800 px-7 py-12 text-white sm:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-400">Connect with DCCI</p><h2 className="mt-3 max-w-2xl text-3xl font-black">Looking for chamber information or membership guidance?</h2><p className="mt-4 max-w-2xl text-slate-300">Contact the chamber office for official information and assistance.</p></div><Link href="/contact" className="btn-lift inline-flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-3.5 text-sm font-extrabold text-navy-950">Contact Office <ArrowRight size={17}/></Link></div>
          </div>
        </Container>
      </section>
    </>
  );
}