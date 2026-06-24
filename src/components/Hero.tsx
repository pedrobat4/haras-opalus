import { motion } from "motion/react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink } from "../data/site";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.13, duration: 0.9, ease },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Atmospheric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#0e2456_0%,#051433_45%,#030b1f_100%)]" />
      <div className="glow-drift absolute -top-1/4 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(149,120,67,0.22),transparent_70%)] blur-2xl" />
      <div className="absolute bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(0,182,255,0.10),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Emblem with rotating ring */}
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="relative mb-9"
        >
          <div className="spin-slow absolute inset-0 -m-4 rounded-full border border-dashed border-bronze-600/40" />
          <img
            src="/assets/logo-opalus.png"
            alt="Haras Opalus — Mangalarga Marchador"
            className="relative h-32 w-32 rounded-full ring-1 ring-bronze-500/50 shadow-2xl shadow-navy-950/60 sm:h-40 sm:w-40"
          />
        </motion.div>

        <motion.p
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="eyebrow mb-5"
        >
          Montes Claros · Minas Gerais
        </motion.p>

        <motion.h1
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-7xl md:text-[5.5rem]"
        >
          Um cavalo é{" "}
          <span className="text-gold-grad italic">poesia</span>
          <br />
          em movimento
        </motion.h1>

        <motion.p
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-2xl text-base leading-relaxed text-cream-dim sm:text-lg"
        >
          É força sem violência. É liberdade, beleza e paixão sem limites. No
          Haras Opalus, criamos e selecionamos o Mangalarga Marchador com
          excelência genética e profundo respeito pelos animais.
        </motion.p>

        <motion.div
          custom={4}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink(
              "Olá! Vim pelo site do Haras Opalus e gostaria de conhecer os animais e as coberturas disponíveis."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 to-bronze-600 px-8 py-4 font-semibold tracking-wide text-navy-900 shadow-lg shadow-bronze-900/40 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={19} />
            Falar com o Haras
          </a>
          <a
            href="#plantel"
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 font-medium tracking-wide text-cream transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            Conhecer o plantel
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#sobre"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-bronze-500"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="nudge" size={28} />
      </a>
    </section>
  );
}
