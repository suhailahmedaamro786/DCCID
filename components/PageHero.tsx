import { Container } from "./Container";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-navy-950 py-20 text-white grid-pattern">
      <Container>
        <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-gold-400">{eyebrow}</p>
        <h1 className="max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
      </Container>
    </section>
  );
}