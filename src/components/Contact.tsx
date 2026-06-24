import Reveal from "./Reveal";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Instagram } from "./Glyphs";
import { site, whatsappLink } from "../data/site";

export default function Contact() {
  return (
    <section id="contato" className="relative bg-navy-900 py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_0%,#0a1c4a_0%,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left — invite */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Contato</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
                Venha conhecer o{" "}
                <span className="text-gold-grad italic">Haras Opalus</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-cream-dim/85">
                Será um prazer apresentar nossos animais, nossa estrutura e a
                forma como vivemos o universo do Mangalarga Marchador. Fale
                conosco com tranquilidade — atendemos com a atenção que cada
                criador merece.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site do Haras Opalus e gostaria de mais informações."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 to-bronze-600 px-8 py-4 font-semibold tracking-wide text-navy-900 shadow-lg shadow-bronze-900/40 transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle size={19} />
                Conversar no WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Right — details */}
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "E-mail",
                value: site.email,
                href: `mailto:${site.email}`,
              },
              {
                icon: MapPin,
                label: "Localização",
                value: site.address.line,
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: `@${site.instagram}`,
                href: site.instagramUrl,
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <a
                  href={item.href ?? undefined}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-start gap-5 rounded-2xl border border-bronze-800/30 bg-navy-850/50 p-6 transition-all ${
                    item.href
                      ? "hover:border-gold-400/40 hover:bg-navy-800/60"
                      : ""
                  }`}
                >
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bronze-800/40 text-gold-400 ring-1 ring-bronze-600/40">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-bronze-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg text-cream">{item.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="flex items-start gap-5 rounded-2xl border border-bronze-800/30 bg-navy-850/50 p-6">
                <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bronze-800/40 text-gold-400 ring-1 ring-bronze-600/40">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-bronze-500">
                    Horário de atendimento
                  </p>
                  <p className="mt-1 text-cream">{site.hours.weekdays}</p>
                  <p className="text-cream-dim/80">{site.hours.weekend}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
