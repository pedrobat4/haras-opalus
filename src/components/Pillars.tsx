import Reveal from "./Reveal";

const pillars = [
  {
    n: "I",
    title: "Cavalos",
    text: "A razão da nossa dedicação. O centro de toda a nossa história.",
  },
  {
    n: "II",
    title: "Paixão",
    text: "O sentimento que move cada escolha e cada conquista.",
  },
  {
    n: "III",
    title: "Tradição",
    text: "A base que sustenta nossa caminhada e honra a cultura do campo.",
  },
];

export default function Pillars() {
  return (
    <section className="relative border-y border-bronze-800/30 bg-navy-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_50%,#0a1c4a_0%,#030b1f_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-12 text-center">Nossos Pilares</p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-bronze-800/30 bg-bronze-800/30 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div className="group relative h-full bg-navy-900 px-8 py-12 text-center transition-colors hover:bg-navy-850">
                <span className="font-display text-5xl text-bronze-600/70 transition-colors group-hover:text-gold-400">
                  {p.n}
                </span>
                <h3 className="mt-3 font-display text-3xl text-cream">{p.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-cream-dim/80">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
