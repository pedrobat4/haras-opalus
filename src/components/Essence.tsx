import Reveal from "./Reveal";
import { Heart, Landmark, Award, ShieldCheck, Handshake, Home } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Paixão",
    text: "O cavalo é o centro da nossa história e da nossa dedicação.",
  },
  {
    icon: Landmark,
    title: "Tradição",
    text: "Valorizamos as raízes, a cultura do campo e a história da raça.",
  },
  {
    icon: Award,
    title: "Excelência",
    text: "Qualidade em cada detalhe: genética, manejo, estrutura e apresentação.",
  },
  {
    icon: ShieldCheck,
    title: "Respeito pelos animais",
    text: "Cuidar bem é princípio, não escolha.",
  },
  {
    icon: Handshake,
    title: "Compromisso",
    text: "Cada decisão é tomada com responsabilidade, seriedade e visão de futuro.",
  },
  {
    icon: Home,
    title: "Família e legado",
    text: "Uma história construída com amor, trabalho e continuidade.",
  },
];

export default function Essence() {
  return (
    <section className="relative bg-navy-900 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Missão & Visão */}
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-bronze-800/30 bg-gradient-to-br from-navy-850 to-navy-900 p-9">
              <p className="eyebrow mb-4">Missão</p>
              <p className="font-display text-2xl leading-snug text-cream sm:text-[1.7rem]">
                Criar, selecionar e valorizar cavalos Mangalarga Marchador com
                excelência genética, cuidado responsável e profundo respeito
                pelos animais — preservando a tradição e fortalecendo a paixão
                pela raça.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full rounded-2xl border border-bronze-800/30 bg-gradient-to-br from-navy-850 to-navy-900 p-9">
              <p className="eyebrow mb-4">Visão</p>
              <p className="font-display text-2xl leading-snug text-cream sm:text-[1.7rem]">
                Ser reconhecido como um haras de referência pela qualidade da
                criação, pela seriedade na seleção dos animais e pela forma
                respeitosa, apaixonada e tradicional de viver o universo do
                Mangalarga Marchador.
              </p>
            </article>
          </Reveal>
        </div>

        {/* Valores */}
        <Reveal>
          <div className="mb-12 mt-24 text-center">
            <p className="eyebrow mb-4">Nossos Valores</p>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              O que nos sustenta
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.1}>
              <article className="group h-full rounded-2xl border border-bronze-800/25 bg-navy-850/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-navy-800/60">
                <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-bronze-800/40 text-gold-400 ring-1 ring-bronze-600/40 transition-colors group-hover:bg-gold-400 group-hover:text-navy-900">
                  <v.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-cream">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim/80">
                  {v.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
