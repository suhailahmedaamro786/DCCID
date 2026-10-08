import type { Metadata } from "next";
export const metadata: Metadata = { title: "DCCI Leadership", description: "Meet the office bearers and leadership information of Dadu Chamber of Commerce & Industry.", alternates: { canonical: "https://dccidadu.org.pk/leadership" } };
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { LeadershipCard } from "@/components/LeadershipCard";
import { Reveal } from "@/components/Reveal";
import { leadership } from "@/data/site";

export default function LeadershipPage() {
  return <><PageHero eyebrow="Leadership" title="DCCI Office Bearers" description="Meet the chamber leadership presented on this digital platform. Official records should be used for final term and designation confirmation."/><Container className="py-20"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{leadership.map((person,i)=><Reveal key={person.name} delay={i*.05}><LeadershipCard {...person}/></Reveal>)}</div></Container></>;
}