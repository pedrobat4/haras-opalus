import Reveal from "./Reveal";
import HorseCard from "./HorseCard";
import { doadoras, garanhoes } from "../data/horses";

export default function Plantel() {
  return (
    <section id="plantel" className="relative bg-navy-900 py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_20%_100%,#0a1c4a_0%,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">Nosso Plantel</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              O futuro da nossa genética{" "}
              <span className="text-gold-grad italic">começa aqui</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-cream-dim/85">
              Matrizes e reprodutores escolhidos por genética, funcionalidade,
              temperamento, fertilidade e capacidade de transmitir
              características superiores às futuras gerações.
            </p>
          </Reveal>
        </div>

        {/* Doadoras */}
        <Reveal>
          <div className="rule-diamond mb-10">
            <h3 className="shrink-0 font-display text-3xl text-gold-300">
              Nossas Doadoras
            </h3>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doadoras.map((h, i) => (
            <Reveal key={h.name} delay={(i % 3) * 0.1}>
              <HorseCard horse={h} />
            </Reveal>
          ))}
        </div>

        {/* Garanhões */}
        <Reveal>
          <div className="rule-diamond mb-10 mt-24">
            <h3 className="shrink-0 font-display text-3xl text-gold-300">
              Nossos Garanhões
            </h3>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {garanhoes.map((h, i) => (
            <Reveal key={h.name} delay={(i % 3) * 0.1}>
              <HorseCard horse={h} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
