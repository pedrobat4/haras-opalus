import Reveal from "./Reveal";
import { Sparkles, Dna, FlaskConical, ArrowUpRight } from "lucide-react";
import { whatsappLink } from "../data/site";

const services = [
  {
    icon: Sparkles,
    title: "Coberturas",
    text: "Garanhões selecionados disponíveis para criadores que buscam qualidade, procedência e planejamento genético. Consulte disponibilidade e condições comerciais.",
    cta: "Olá! Gostaria de saber sobre as coberturas disponíveis no Haras Opalus.",
    label: "Consultar coberturas",
  },
  {
    icon: FlaskConical,
    title: "Venda de Embriões",
    text: "Embriões de doadoras com genética consistente, marcha de qualidade e linhagens reconhecidas. Cada embrião nasce de um propósito e de um cruzamento cuidadosamente estudado.",
    cta: "Olá! Tenho interesse na venda de embriões do Haras Opalus.",
    label: "Consultar embriões",
  },
  {
    icon: Dna,
    title: "Planejamento Genético",
    text: "Nosso diferencial está na genética dos cavalos. Acasalamentos planejados para preservar e aprimorar marcha, estrutura, comodidade e versatilidade da raça.",
    cta: "Olá! Gostaria de falar sobre planejamento genético com o Haras Opalus.",
    label: "Falar sobre genética",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-navy-950 py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_0%,#0a1c4a_0%,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">Serviços & Produtos</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              Genética que imprime{" "}
              <span className="text-gold-grad italic">identidade</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-cream-dim/85">
              Cada cobertura e cada embrião representam uma oportunidade de
              incorporar genética selecionada, funcionalidade e tradição à sua
              criação.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-bronze-800/30 bg-navy-900 p-9 transition-all duration-300 hover:border-gold-400/40">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-bronze-700/10 blur-2xl transition-opacity duration-300 group-hover:bg-gold-400/10" />
                <span className="relative inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-bronze-600 to-bronze-900 text-cream shadow-lg shadow-bronze-900/40">
                  <s.icon size={26} />
                </span>
                <h3 className="relative mt-6 font-display text-3xl text-cream">
                  {s.title}
                </h3>
                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-cream-dim/80">
                  {s.text}
                </p>
                <a
                  href={whatsappLink(s.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-gold-300 transition-colors hover:text-gold-200"
                >
                  {s.label}
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
