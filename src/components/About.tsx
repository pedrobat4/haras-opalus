import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-navy-900 py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_15%_0%,#0a1c4a_0%,transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        {/* Left — emblem */}
        <Reveal>
          <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
            <div className="absolute h-3/4 w-3/4 rounded-full bg-[radial-gradient(circle,rgba(149,120,67,0.18),transparent_70%)] blur-2xl" />
            <img
              src="/assets/logo-opalus.png"
              alt="Emblema Haras Opalus"
              className="relative h-56 w-56 rounded-full ring-1 ring-bronze-500/40 shadow-2xl shadow-navy-950/50 sm:h-64 sm:w-64"
            />
          </div>
        </Reveal>

        {/* Right — copy */}
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Sobre o Haras</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
              Um sonho que encontrou{" "}
              <span className="text-gold-grad italic">seu propósito</span>
            </h2>
          </Reveal>

          <div className="mt-7 space-y-5 text-cream-dim/90">
            <Reveal delay={0.1}>
              <p>
                O Haras Opalus nasceu da realização de um sonho cultivado desde
                a infância por seu fundador,{" "}
                <span className="font-semibold text-cream">José Flávio</span>.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                O que começou como admiração pelos cavalos transformou-se, ao
                longo dos anos, em uma paixão vivida diariamente — e no
                compromisso de contribuir para o fortalecimento da raça
                Mangalarga Marchador, por meio de uma criação pautada em
                responsabilidade, respeito e constante busca pela excelência.
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
