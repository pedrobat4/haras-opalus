/* ============================================================
   HARAS OPALUS — Configurações do site
   Edite aqui os dados de contato, WhatsApp e redes sociais.
   ============================================================ */

export const site = {
  name: "Haras Opalus",
  tagline: "Mangalarga Marchador",
  slogan: "Movidos por paixão e tradição.",

  // WhatsApp internacional, só dígitos: 55 (Brasil) + 38 (DDD) + 9 + número.
  // Informado (38) 8822-4571 — incluído o 9 obrigatório de celular.
  whatsapp: "5538988224571",

  email: "contato@opalas.com.br",

  instagram: "harasopalus",
  instagramUrl: "https://instagram.com/harasopalus",

  address: {
    city: "Montes Claros",
    state: "MG",
    // Endereço completo a ser informado pelo cliente
    line: "Montes Claros — Minas Gerais",
  },

  hours: {
    weekdays: "Segunda a Sexta · 7h às 17h",
    weekend: "Finais de semana · mediante agendamento",
  },
} as const;

/** Monta um link de WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
