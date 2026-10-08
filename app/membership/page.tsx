import type { Metadata } from "next";
export const metadata: Metadata = { title: "Membership", description: "Membership information, requirements and application guidance for Dadu Chamber of Commerce & Industry.", alternates: { canonical: "https://dccidadu.org.pk/membership" } };
import { CheckCircle2, UserPlus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function MembershipPage() {
  const steps=[
    ["01","Confirm requirements","Review the applicable membership category and required documentation."],
    ["02","Submit application","Complete the chamber's approved membership application and supporting documents."],
    ["03","Verification","The chamber office reviews the submitted information according to its procedures."],
    ["04","Membership","Receive official confirmation and access applicable chamber services."]
  ];
  return <><PageHero eyebrow="Membership" title="Become part of Dadu's business community." description="Membership information should be simple to understand, easy to access and backed by official chamber procedures."/>
  <Container className="py-20"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-600">Why membership</p><h2 className="mt-4 text-4xl font-black">A stronger network starts with participation.</h2><div className="mt-6 space-y-4">{["Business representation","Networking opportunities","Chamber information and updates","Access to member-focused resources"].map(x=><p key={x} className="flex gap-3 text-slate-700"><CheckCircle2 className="shrink-0 text-gold-600" size={20}/>{x}</p>)}</div></Reveal>
  <div className="grid gap-4">{steps.map(([num,title,text],i)=><Reveal key={num} delay={i*.05}><div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-sm font-black text-gold-400">{num}</span><div><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div></div></Reveal>)}</div></div>
  <div className="mt-14 rounded-2xl bg-slate-100 p-7"><div className="flex gap-4"><UserPlus className="text-gold-600"/><div><h3 className="font-extrabold">Need the official membership form?</h3><p className="mt-2 text-sm text-slate-600">The approved form and current fee/document requirements should be uploaded to Resources by the chamber office.</p><Link href="/contact" className="mt-4 inline-block font-bold text-navy-950">Contact the chamber office →</Link></div></div></div></Container></>;
}