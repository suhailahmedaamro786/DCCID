import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound(){
  return <Container className="grid min-h-[60vh] place-items-center py-20 text-center"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-gold-600">404</p><h1 className="mt-3 text-5xl font-black text-navy-950">Page not found</h1><p className="mx-auto mt-4 max-w-md leading-7 text-slate-600">The page you are looking for does not exist or has moved.</p><Link href="/" className="mt-7 inline-flex rounded-xl bg-navy-950 px-5 py-3 font-bold text-white">Back to homepage</Link></div></Container>
}