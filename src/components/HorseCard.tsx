import { ImageIcon, ArrowUpRight } from "lucide-react";
import type { Horse } from "../data/horses";
import { whatsappLink } from "../data/site";

export default function HorseCard({ horse }: { horse: Horse }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-bronze-800/30 bg-navy-900 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-navy-950/60">
      {/* Media */}
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-850">
        {horse.photo ? (
          <img
            src={horse.photo}
            alt={horse.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // Branded placeholder while the real photo isn't available
          <div className="grain relative grid h-full place-items-center bg-[radial-gradient(circle_at_50%_35%,#0e2456,#051433)]">
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <span className="inline-grid h-12 w-12 place-items-center rounded-full border border-bronze-600/40 text-bronze-500">
                <ImageIcon size={20} />
              </span>
              <span className="text-xs uppercase tracking-[0.28em] text-bronze-500">
                Foto em breve
              </span>
            </div>
          </div>
        )}

        {/* Role badge */}
        <span className="absolute left-4 top-4 rounded-full border border-bronze-600/50 bg-navy-950/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-sm">
          {horse.role}
        </span>

        {horse.available && (
          <span className="absolute right-4 top-4 rounded-full bg-cyan/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-navy-950">
            Cobertura
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-3xl leading-none text-cream">
          {horse.name}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-bronze-500">
          {horse.pedigree}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cream-dim/80">
          {horse.highlight}
        </p>

        <a
          href={whatsappLink(
            `Olá! Gostaria de saber mais sobre ${horse.role === "Garanhão" ? "o garanhão" : "a doadora"} "${horse.name}" do Haras Opalus.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
        >
          {horse.role === "Garanhão" ? "Consultar cobertura" : "Saber mais"}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
