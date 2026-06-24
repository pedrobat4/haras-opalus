/* ============================================================
   HARAS OPALUS — Plantel
   Cadastre aqui as doadoras e os garanhões. Quando tiver as
   fotos dos animais, coloque-as em /public/assets e informe o
   caminho no campo `photo` (ex.: "/assets/garanhao-x.jpg").
   ============================================================ */

export type Horse = {
  name: string;
  /** "Doadora" | "Garanhão" */
  role: string;
  pedigree: string;
  /** linha curta de destaque (conquistas, características) */
  highlight: string;
  /** caminho da foto em /public/assets — deixe vazio para mostrar o placeholder */
  photo?: string;
  /** true para garanhões com cobertura disponível */
  available?: boolean;
};

export const doadoras: Horse[] = [
  {
    name: "Doadora I",
    role: "Doadora",
    pedigree: "Linhagem a definir",
    highlight: "Marca de qualidade e morfologia funcional",
  },
  {
    name: "Doadora II",
    role: "Doadora",
    pedigree: "Linhagem a definir",
    highlight: "Temperamento equilibrado e fertilidade comprovada",
  },
  {
    name: "Doadora III",
    role: "Doadora",
    pedigree: "Linhagem a definir",
    highlight: "Genética consistente e linhagem reconhecida",
  },
];

export const garanhoes: Horse[] = [
  {
    name: "Garanhão I",
    role: "Garanhão",
    pedigree: "Linhagem a definir",
    highlight: "Imprime marcha, funcionalidade e tradição",
    available: true,
  },
  {
    name: "Garanhão II",
    role: "Garanhão",
    pedigree: "Linhagem a definir",
    highlight: "Consistência genética e morfologia premiada",
    available: true,
  },
];
