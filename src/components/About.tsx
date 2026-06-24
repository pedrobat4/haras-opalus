import Reveal from "./Reveal";
import { Horseshoe } from "./Glyphs";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-navy-900 py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_15%_0%,#0a1c4a_0%,transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        {/* Left — emblem panel */}
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-bronze-700/40" />
            <div className="spin-slow absolute inset-6 rounded-full border border-dashed border-bronze-600/25" />
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,#0e2456,#051433)] ring-1 ring-bronze-700/30" />
            <div className="absolute inset-0 grid place-items-center">
              <img
                src="/assets/logo-opalus.png"
                alt="Emblema Haras Opalus"
                className="h-48 w-48 rounded-full ring-1 ring-bronze-500/40 shadow-xl shadow-navy-950/50 sm:h-56 sm:w-56"
              />
            </div>
            <Horseshoe className="absolute -bottom-2 -right-2 h-16 w-16 text-bronze-600/60" />
          </div>
        </Reveal>

        {/* Right — copy */}
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Sobre o Haras</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
              Nasceu da realização de um{" "}
              <span className="text-gold-grad italic">sonho de infância</span>
            </h2>
          </Reveal>

          <div className="mt-7 space-y-5 text-cream-dim/90">
            <Reveal delay={0.1}>
              <p>
                O Haras Opalus nasceu do sonho do seu fundador,{" "}
                <span className="font-semibold text-cream">Flávio Oliveira</span>.
                Desde cedo, a admiração pelos cavalos despertou uma paixão que,
                ao longo dos anos, transformou-se em propósito, dedicação e
                compromisso com a criação do Mangalarga Marchador.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Mais do que uma propriedade rural, o Haras Opalus representa um
                projeto construído com amor pela raça, respeito aos animais e
                valorização das tradições do campo. Cada animal carrega uma
                história. Cada acasalamento é planejado com responsabilidade.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Acreditamos que criar cavalos é muito mais do que formar
                plantéis. É preservar legados, construir gerações e honrar uma
                tradição que atravessa o tempo.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="mt-9 flex items-center gap-4">
              <span className="h-px w-12 bg-bronze-600" />
              <p className="font-display text-2xl italic text-gold-300">
                Movidos por paixão e tradição.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
