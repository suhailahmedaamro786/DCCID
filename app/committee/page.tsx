import type { Metadata } from "next";
export const metadata: Metadata = { title: "Executive Committee", description: "Executive committee, governance information and official records of Dadu Chamber of Commerce & Industry.", alternates: { canonical: "https://dccidadu.org.pk/committee" } };
import { UsersRound, FileText, BriefcaseBusiness } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    Icon: UsersRound,
    title: "Committee Members",
    text: "Publish the approved current executive committee roster here.",
  },
  {
    Icon: BriefcaseBusiness,
    title: "Committee Roles",
    text: "Organize portfolios, responsibilities and chamber functions clearly.",
  },
  {
    Icon: FileText,
    title: "Official Records",
    text: "Provide approved minutes, notices and committee documents in one place.",
  },
];

export default function CommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="Executive Committee"
        title="Executive Committee & Chamber Governance"
        description="A structured space for executive committee information, office notices, meeting records and official governance documents."
      />
      <Container className="py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
                <Icon className="text-gold-600" />
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
