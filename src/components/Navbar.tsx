import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "../data/site";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "O Haras" },
  { href: "#raca", label: "Mangalarga" },
  { href: "#servicos", label: "Serviços" },
  { href: "#plantel", label: "Plantel" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-md border-b border-bronze-800/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src="/assets/logo-opalus.png"
            alt="Haras Opalus"
            className="h-11 w-11 rounded-full ring-1 ring-bronze-600/50 transition-transform duration-500 group-hover:rotate-6"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.18em] text-cream">
              HARAS OPALUS
            </span>
            <span className="text-[0.62rem] tracking-[0.34em] text-gold-400/90 uppercase mt-0.5">
              Mangalarga Marchador
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium tracking-wide text-cream-dim transition-colors hover:text-cream after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(
              "Olá! Vim pelo site do Haras Opalus e gostaria de mais informações."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-400/5 px-5 py-2 text-sm font-semibold tracking-wide text-gold-300 transition-all hover:bg-gold-400 hover:text-navy-900"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-cream p-1"
            aria-label="Abrir menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden mx-5 mt-3 rounded-2xl border border-bronze-800/40 bg-navy-950/95 backdrop-blur-lg"
          >
            {links.map((l) => (
              <li key={l.href} className="border-b border-bronze-800/20 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-cream-dim hover:text-gold-300 hover:bg-navy-800/60 transition-colors tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="p-4">
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site do Haras Opalus e gostaria de mais informações."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gold-400 px-5 py-3 text-center font-semibold text-navy-900"
              >
                Falar no WhatsApp
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
