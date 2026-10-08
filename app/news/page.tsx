import type { Metadata } from "next";
export const metadata: Metadata = { title: "News & Updates", description: "Verified chamber news, announcements and business community updates from Dadu Chamber of Commerce & Industry.", alternates: { canonical: "https://dccidadu.org.pk/news" } };
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/data/site";

export default function NewsPage(){return <><PageHero eyebrow="News & Updates" title="Chamber news, announcements and business community updates." description="A central publishing space for verified DCCI news and official public updates."/><Container className="py-20"><div className="grid gap-6 lg:grid-cols-3">{news.map((item,i)=><Reveal key={item.slug} delay={i*.06}><NewsCard {...item}/></Reveal>)}</div></Container></>}