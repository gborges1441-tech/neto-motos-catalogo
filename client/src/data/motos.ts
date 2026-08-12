// Style reminder: data supports the Arquivo de Performance direction; keep labels concise, factual and editorial.

export type MotoImage = {
  src: string;
  label: string;
  alt: string;
};

export type MotoHotspot = {
  id: string;
  label: string;
  detail: string;
  value: string;
  x: number;
  y: number;
};

export type Moto = {
  id: string;
  name: string;
  eyebrow: string;
  category: string;
  price: string;
  priceNote: string;
  description: string;
  highlights: string[];
  images: MotoImage[];
  specs: Array<{ label: string; value: string }>;
  hotspots: MotoHotspot[];
  source: string;
  sourceLabel: string;
};

const official = {
  shi250: {
    hero: "/manus-storage/shi-250-01_49314458.webp",
    gallery: "/manus-storage/shi-250-05_da2c62f1.webp",
    detail: "/manus-storage/shi-250-08_25bdff28.webp",
    panel: "/manus-storage/shi-250-panel_2f379e5e.webp",
  },
  shi175s: {
    hero: "/manus-storage/shi-175s-01_e529b115.webp",
    gallery: "/manus-storage/shi-175s-04_06baa5a6.webp",
    detail: "/manus-storage/shi-175s-08_48bfa8cf.webp",
  },
  jef170: {
    hero: "/manus-storage/jef-170-01_9802b6ac.webp",
    gallery: "/manus-storage/jef-170-04_58e8e21a.webp",
    detail: "/manus-storage/jef-170-08_636ae066.webp",
  },
  urbanLite: {
    hero: "/manus-storage/urban-lite-01_590efdb7.webp",
    gallery: "/manus-storage/urban-lite-04_05d012f1.webp",
    detail: "/manus-storage/urban-lite-08_39b3a83a.webp",
  },
};

export const motos: Moto[] = [
  {
    id: "shi-250",
    name: "SHI 250",
    eyebrow: "CAPÍTULO 01 / TRAIL",
    category: "Trail / 250 cc",
    price: "R$ 21.490,00",
    priceNote: "Referência oficial. Frete, seguro, documentação e condições: consulte o Neto.",
    description:
      "Uma trail de 250 cc para quem procura versatilidade entre o asfalto e os caminhos que começam depois dele.",
    highlights: ["Motor 249,9 cc", "6 marchas", "Full LED + DRL", "Freios a disco nas duas rodas"],
    images: [
      { src: official.shi250.hero, label: "Vista principal", alt: "Shineray SHI 250 em foto oficial de produto" },
      { src: official.shi250.gallery, label: "Ângulo editorial", alt: "Shineray SHI 250 em vista lateral oficial" },
      { src: official.shi250.detail, label: "Detalhes", alt: "Detalhe da Shineray SHI 250 em foto oficial" },
      { src: official.shi250.panel, label: "Painel", alt: "Painel digital da Shineray SHI 250" },
    ],
    specs: [
      { label: "Cilindrada", value: "249,9 cc" },
      { label: "Potência", value: "19,3 CV / 8.000 rpm" },
      { label: "Torque", value: "18 N.m / 6.000 rpm" },
      { label: "Câmbio", value: "6 marchas" },
      { label: "Freios", value: "Disco dianteiro e traseiro" },
      { label: "Suspensão", value: "Invertida / monoshock" },
      { label: "Rodas", value: "Raiadas" },
      { label: "Iluminação", value: "Full LED + DRL" },
    ],
    hotspots: [
      { id: "motor", label: "Motor", detail: "Monocilíndrico, 4T, 2 válvulas, SOHC balanceado.", value: "249,9 cc", x: 39, y: 56 },
      { id: "freio", label: "Freios", detail: "Conjunto a disco nas rodas dianteira e traseira.", value: "Disco / disco", x: 69, y: 69 },
      { id: "painel", label: "Painel", detail: "Leitura digital de combustível, velocidade, marcha e odômetro.", value: "100% digital", x: 55, y: 27 },
    ],
    source: "https://www.shineray.com.br/produto/shi-250/",
    sourceLabel: "Fonte de produto: Shineray do Brasil",
  },
  {
    id: "shi-175s-efi",
    name: "SHI 175S EFI",
    eyebrow: "CAPÍTULO 02 / TRAIL",
    category: "Trail / 175 cc",
    price: "R$ 17.990,00",
    priceNote: "Referência oficial. Consulte estoque, disponibilidade de cores e condições com o Neto.",
    description:
      "Uma trail de presença forte, com injeção eletrônica e conjunto preparado para acompanhar a rotina com mais liberdade.",
    highlights: ["Injeção eletrônica", "Rodas 19 / 17", "Disco nas duas rodas", "Monoshock traseiro"],
    images: [
      { src: official.shi175s.hero, label: "Vista principal", alt: "Shineray SHI 175S EFI em foto oficial de produto" },
      { src: official.shi175s.gallery, label: "Ângulo editorial", alt: "Shineray SHI 175S EFI em vista lateral oficial" },
      { src: official.shi175s.detail, label: "Detalhes", alt: "Detalhe da Shineray SHI 175S EFI em foto oficial" },
    ],
    specs: [
      { label: "Cilindrada", value: "175,11 cc" },
      { label: "Potência", value: "15,63 CV / 8.500 rpm" },
      { label: "Torque", value: "14 N.m / 6.500 rpm" },
      { label: "Câmbio", value: "5 marchas" },
      { label: "Tanque", value: "14,5 L" },
      { label: "Freios", value: "Disco dianteiro e traseiro" },
      { label: "Rodas", value: "19” / 17”" },
      { label: "Suspensão", value: "Telescópica / monoshock" },
    ],
    hotspots: [
      { id: "efi", label: "Injeção", detail: "Alimentação por injeção eletrônica conforme a ficha de referência.", value: "EFI", x: 37, y: 57 },
      { id: "trail", label: "Conjunto trail", detail: "Rodas 19/17 e suspensão monoshock para a proposta trail.", value: "19” / 17”", x: 74, y: 72 },
    ],
    source: "https://www.shineray.com.br/produto/shi-175s-efi/",
    sourceLabel: "Fonte de produto: Shineray do Brasil",
  },
  {
    id: "jef-170",
    name: "JEF 170",
    eyebrow: "CAPÍTULO 03 / STREET",
    category: "Street / 170 cc",
    price: "R$ 15.390,00",
    priceNote: "Referência oficial. Especificações vigentes, estoque e condições: consulte o Neto.",
    description:
      "Uma street de desenho direto e postura urbana, para quem quer colocar a cidade em movimento com personalidade.",
    highlights: ["Painel digital", "Rodas 17”", "Freio dianteiro a disco", "Monoshock traseiro"],
    images: [
      { src: official.jef170.hero, label: "Vista principal", alt: "Shineray JEF 170 em foto oficial de produto" },
      { src: official.jef170.gallery, label: "Ângulo editorial", alt: "Shineray JEF 170 em vista lateral oficial" },
      { src: official.jef170.detail, label: "Detalhes", alt: "Detalhe da Shineray JEF 170 em foto oficial" },
    ],
    specs: [
      { label: "Cilindrada", value: "Consultar ficha vigente" },
      { label: "Potência", value: "Consultar ficha vigente" },
      { label: "Câmbio", value: "Consultar ficha vigente" },
      { label: "Painel", value: "Digital" },
      { label: "Freio dianteiro", value: "Disco" },
      { label: "Rodas", value: "17”" },
      { label: "Suspensão traseira", value: "Monoshock" },
      { label: "Disponibilidade", value: "Consultar Neto Motos" },
    ],
    hotspots: [
      { id: "street", label: "Street", detail: "Conjunto urbano com rodas de 17 polegadas e desenho direto.", value: "17”", x: 70, y: 72 },
      { id: "digital", label: "Painel", detail: "Painel digital para concentrar a leitura durante a condução.", value: "Digital", x: 55, y: 26 },
    ],
    source: "https://www.shineray.com.br/produto/jef-170/",
    sourceLabel: "Fonte de produto: Shineray do Brasil",
  },
  {
    id: "urban-lite",
    name: "URBAN LITE",
    eyebrow: "CAPÍTULO 04 / SCOOTER",
    category: "Scooter / 150 cc",
    price: "R$ 12.490,00",
    priceNote: "Referência oficial. Consulte disponibilidade, cores, documentação e condições com o Neto.",
    description:
      "A praticidade de uma scooter com leitura urbana, espaço para o dia a dia e uma condução que pede menos esforço.",
    highlights: ["CVT automático", "Painel digital", "Guarda-volumes", "Full LED"],
    images: [
      { src: official.urbanLite.hero, label: "Vista principal", alt: "Shineray URBAN LITE em foto oficial de produto" },
      { src: official.urbanLite.gallery, label: "Ângulo editorial", alt: "Shineray URBAN LITE em vista lateral oficial" },
      { src: official.urbanLite.detail, label: "Detalhes", alt: "Detalhe da Shineray URBAN LITE em foto oficial" },
    ],
    specs: [
      { label: "Cilindrada", value: "149,48 cc" },
      { label: "Potência", value: "13,5 cv / 7.500 rpm" },
      { label: "Torque", value: "11 N.m / 5.000 rpm" },
      { label: "Câmbio", value: "CVT automático" },
      { label: "Tanque", value: "8 L" },
      { label: "Freios", value: "Disco / tambor; CBS" },
      { label: "Rodas", value: "130/60-13”" },
      { label: "Iluminação", value: "Full LED" },
    ],
    hotspots: [
      { id: "cvt", label: "CVT", detail: "Transmissão automática para uma rotina urbana mais simples.", value: "Automático", x: 42, y: 63 },
      { id: "storage", label: "Guarda-volumes", detail: "Praticidade de armazenamento para o uso cotidiano.", value: "Urbano", x: 67, y: 50 },
    ],
    source: "https://www.shineray.com.br/produto/urban-lite/",
    sourceLabel: "Fonte de produto: Shineray do Brasil",
  },
];

export const coverMoto = motos[0];
