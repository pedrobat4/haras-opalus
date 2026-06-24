import Reveal from "./Reveal";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";
import { Diamond } from "./Glyphs";

export default function CtaBand() {
  return (
    <section className="grain relative overflow-hidden border-y border-bronze-800/30 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(100%_120%_at_50%_0%,#14306e_0%,#051433_55%,#030b1f_100%)]" />
      <div className="glow-drift absolute left-1/2 top-1/2 h-[40vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(149,120,67,0.18),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Diamond className="mx-auto h-3 w-3 text-gold-400" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-7 font-display text-3xl font-medium italic leading-snug text-cream sm:text-[2.6rem]">
            “Onde a paixão pelo cavalo encontra a responsabilidade de construir
            gerações.”
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-gold-400">
            Haras Opalus
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <a
            href={whatsappLink(
              "Olá! Vim pelo site do Haras Opalus e gostaria de conversar sobre os animais e as coberturas disponíveis."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 to-bronze-600 px-9 py-4 font-semibold tracking-wide text-navy-900 shadow-lg shadow-bronze-900/40 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={19} />
            Fale conosco pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
