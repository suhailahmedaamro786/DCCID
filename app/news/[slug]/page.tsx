import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import { news } from "@/data/site";
import { Container } from "@/components/Container";

export function generateStaticParams(){return news.map(item=>({slug:item.slug}));}
export default async function NewsDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const item=news.find(x=>x.slug===slug); if(!item) notFound();
  return <article><section className="bg-navy-950 py-20 text-white"><Container><Link href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white"><ArrowLeft size={16}/> Back to news</Link><div className="mt-10 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-400">{item.category}</p><h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{item.title}</h1><p className="mt-5 flex items-center gap-2 text-sm text-slate-400"><CalendarDays size={15}/>{item.date}</p></div></Container></section><Container className="max-w-3xl py-16"><p className="text-lg leading-9 text-slate-700">{item.excerpt}</p><div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-7 text-sm leading-7 text-slate-600">This publishing template is ready for approved DCCI article content, images, documents and source references.</div></Container></article>
}