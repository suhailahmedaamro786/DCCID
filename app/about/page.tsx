import { Target, Eye, Flag, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export default function AboutPage() {
  return <><PageHero eyebrow="About DCCI" title="A chamber built to connect, represent and support business." description="Learn about Dadu Chamber of Commerce & Industry, its role in the local business community and its digital services."/>
    <Container className="py-20">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr]"><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-600">Who we are</p><h2 className="mt-4 text-4xl font-black">An institutional voice for Dadu's commercial community.</h2><div className="mt-6 space-y-5 leading-8 text-slate-600"><p>Dadu Chamber of Commerce & Industry serves as a platform for businesses, traders, entrepreneurs and professionals to engage with the chamber and with one another.</p><p>The website is designed to provide a modern public information layer for the chamber: leadership, committee information, membership guidance, announcements, events, news and documents.</p></div></Reveal><Reveal delay={.1}><div className="rounded-3xl bg-navy-950 p-8 text-white"><Building2 className="text-gold-400"/><h3 className="mt-6 text-2xl font-black">Dadu · Sindh</h3><p className="mt-3 leading-7 text-slate-300">A dedicated digital presence for a growing business community.</p></div></Reveal></div>
      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {[[Eye,"Vision","A stronger, connected and informed business community."],[Target,"Mission","Represent, connect and support businesses through meaningful chamber engagement."],[Flag,"Objectives","Improve communication, encourage collaboration and make business information accessible."]].map(([Icon,title,text],i)=>{const I=Icon as typeof Eye; return <Reveal key={title as string} delay={i*.06}><div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft"><I className="text-gold-600"/><h3 className="mt-5 text-xl font-extrabold">{title as string}</h3><p className="mt-3 leading-7 text-slate-600">{text as string}</p></div></Reveal>})}
      </div>
    </Container></>;
}