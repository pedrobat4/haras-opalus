import Reveal from "./Reveal";

const traits = [
  "Marcha",
  "Morfologia",
  "Temperamento",
  "Funcionalidade",
  "Docilidade",
  "Potencial genético",
];

export default function Breed() {
  return (
    <section
      id="raca"
      className="grain relative overflow-hidden border-y border-bronze-800/30 py-28 sm:py-36"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#030b1f_0%,#0a1c4a_50%,#051433_100%)]" />
      <div className="glow-drift absolute right-[-10%] top-1/4 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(0,182,255,0.12),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-6">A Raça</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-medium leading-tight text-cream sm:text-6xl">
            Mangalarga Marchador,
            <br />
            <span className="text-gold-grad italic">patrimônio nacional</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream-dim">
            No Haras Opalus, o Mangalarga Marchador é tratado com admiração e
            responsabilidade. Cada animal é acompanhado com atenção ao
            temperamento, à marcha, à morfologia, à funcionalidade e ao
            potencial genético.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-cream-dim/80">
            Nosso trabalho busca unir beleza, docilidade, força e desempenho,
            preservando as qualidades que fazem da raça um verdadeiro patrimônio
            nacional.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {traits.map((t) => (
              <li
                key={t}
                className="rounded-full border border-bronze-600/40 bg-navy-900/50 px-5 py-2 text-sm tracking-wide text-gold-200 backdrop-blur-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
