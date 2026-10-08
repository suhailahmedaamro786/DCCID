import { UsersRound, FileText, BriefcaseBusiness } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export default function CommitteePage() {
  const items=[
    [UsersRound,"Committee Members","Publish the approved current executive committee roster here."],
    [BriefcaseBusiness,"Committee Roles","Organize portfolios, responsibilities and chamber functions clearly."],
    [FileText,"Official Records","Provide approved minutes, notices and committee documents in one place."]
  ];
  return <><PageHero eyebrow="Executive Committee" title="Executive Committee & Chamber Governance" description="A structured space for executive committee information, office notices, meeting records and official governance documents."/>
  <Container className="py-20"><div className="grid gap-5 md:grid-cols-3">{items.map(([Icon,title,text],i)=>{const I=Icon as typeof UsersRound;return <Reveal key={title} delay={i*.06}><div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft"><I className="text-gold-600"/><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div></Reveal>})}</div></Container></>;
}