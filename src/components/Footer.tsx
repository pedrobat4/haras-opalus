import { Mail } from "lucide-react";
import { Instagram } from "./Glyphs";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-bronze-800/30 bg-navy-950 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-7 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo-opalus.png"
              alt="Haras Opalus"
              className="h-14 w-14 rounded-full ring-1 ring-bronze-600/50"
            />
            <div>
              <p className="font-display text-2xl tracking-[0.16em] text-cream">
                HARAS OPALUS
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold-400/90">
                Mangalarga Marchador
              </p>
            </div>
          </div>

          <p className="max-w-xs font-display text-lg italic text-cream-dim/80">
            Movidos por paixão e tradição.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              aria-label="E-mail"
              className="inline-grid h-11 w-11 place-items-center rounded-full border border-bronze-700/40 text-cream-dim transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <Mail size={18} />
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-grid h-11 w-11 place-items-center rounded-full border border-bronze-700/40 text-cream-dim transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-bronze-800/20 pt-7 text-center text-xs text-cream-dim/50">
          <p>
            © {new Date().getFullYear()} Haras Opalus · {site.address.city} —{" "}
            {site.address.state}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
