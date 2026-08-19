// Style reminder: data feeds the Arquivo de Performance direction; every chapter pairs factual guardrails with a human, conversion-oriented narrative.
import { editorialDetails, officialGallerySources, officialSpecs } from "@/data/editorialCatalog";
import { additionalHeroImages } from "@/data/candidateCatalog";

export type MotoImage = {
  src: string;
  label: string;
  alt: string;
};

/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 * Só deve ser preenchido com um GLB/GLTF oficial e autorizado da fabricante.
 * A ausência do objeto mantém o 3D totalmente oculto — galeria nunca é fallback.
 */
export type MotoThreeDAsset = {
  modelUrl: string;
  source: string;
  poster?: string;
  environment?: string;
  initialOrbit?: string;
  cameraTarget?: string;
};

export type MotoColorVariant = {
  id: string;
  name: string;
  swatch: string;
  hero: MotoImage;
  gallery: MotoImage[];
  frames: string[];
  source: string;
  threeD?: MotoThreeDAsset;
};

export type MotoDetail = {
  title: string;
  headline: string;
  description: string;
  image?: MotoImage;
  source: string;
};

export type Moto = {
  id: string;
  brand: "SHINERAY" | "SBM";
  name: string;
  eyebrow: string;
  category: string;
  engine?: string;
  price: string;
  priceNote: string;
  description: string;
  copyLine: string;
  audience: string;
  highlights: string[];
  images: MotoImage[];
  details: MotoDetail[];
  specs: Array<{ label: string; value: string }>;
  colors?: string[];
  colorVariants?: MotoColorVariant[];
  threeD?: MotoThreeDAsset;
  source: string;
  sourceLabel: string;
};

const catalog = {
  jef170: "/manus-storage/jef-170_c2632265.webp",
  shi400sc: "/manus-storage/shi-400sc_4fa980b9.webp",
  shi175: "/manus-storage/02-Galeria-SHI-175-2_4c7f317b.webp",
  shi170: "/manus-storage/shi-170_9901bd46.webp",
  urbanLite: "/manus-storage/urban-lite_f9d6f3ce.webp",
  jet50: "/manus-storage/jet-50_660be97b.webp",
  jet125: "/manus-storage/jet-125_8ee1e3d2.webp",
  shi250Card: "/manus-storage/shi-250_bad0f224.webp",
  shi4: "/manus-storage/sh4_25c297bd.webp",
  shi3: "/manus-storage/sh3_b9f8dd5f.webp",
  urban150: "/manus-storage/urban-150-efi_e6cca6cd.webp",
  sport250: "/manus-storage/250f_674596e2.webp",
  shi175s: "/manus-storage/shi-175s-efi_78c70148.webp",
  free150: "/manus-storage/free-150-efi_f96de767.webp",
  jef150s: "/manus-storage/jef-150s-efi_39703531.webp",
  rio125: "/manus-storage/rio-125-efi_5036850b.webp",
  phoenixEfi: "/manus-storage/phoenix-s-efi_57508b6b.webp",
  jet125Efi: "/manus-storage/09-Galeria-JET-125-EFI-9-scaled_bde94770.webp",
  jef150: "/manus-storage/jef-150_1b66f905.webp",
  phoenix: "/manus-storage/phoenix-s_850d0efc.webp",
  sbm150: "/manus-storage/sbm-150s-official-isolated_7bfa5e0a.webp",
  sbm250s: "/manus-storage/sbm-250s-01_824cf529.webp",
  sbm400s: "/manus-storage/02-Galeria-SBM-400-2_8c1b7e29.webp",
  se2: "/manus-storage/se2_369cebae.webp",
  se1: "/manus-storage/se1_67428dd5.webp",
  sheS: "/manus-storage/she-s_22c756da.webp",
};

const detail = {
  shi250Hero: "/manus-storage/shi-250-01_49314458.webp",
  shi250Gallery: "/manus-storage/shi-250-05_da2c62f1.webp",
  shi250Detail: "/manus-storage/shi-250-08_25bdff28.webp",
  shi250Panel: "/manus-storage/shi-250-panel_2f379e5e.webp",
  shi175sHero: "/manus-storage/shi-175s-efi-official-isolated_72f22930.webp",
  shi175sGallery: "/manus-storage/shi-175s-04_06baa5a6.webp",
  shi175sDetail: "/manus-storage/shi-175s-08_48bfa8cf.webp",
  jef170Hero: "/manus-storage/jef-170-01_9802b6ac.webp",
  jef170Gallery: "/manus-storage/jef-170-04_58e8e21a.webp",
  jef170Detail: "/manus-storage/jef-170-08_636ae066.webp",
  urbanHero: "/manus-storage/urban-lite-01_590efdb7.webp",
  urbanGallery: "/manus-storage/urban-lite-04_05d012f1.webp",
  urbanDetail: "/manus-storage/urban-lite-08_39b3a83a.webp",
};

/**
 * Heroes aprovadas na revisão integral de padronização visual.
 * Cada URL é uma fotografia oficial já presente nas galerias persistidas.
 */
const standardHeroImages: Record<string, string> = {
  "jef-170": "/manus-storage/10-Galeria-JEF-170-10-1-scaled_00bb2da6.webp",
  "shi-400sc": "/manus-storage/05-Galeria-SHI-400sc-6_1c0ebcb9.webp",
  "shi-170": "/manus-storage/06-Galeria-SHI-170-6_fb34617e.webp",
  "free-150-efi": "/manus-storage/09-Galeria-FREE-150-9-1_65f89a03.webp",
  "jef-150s-efi": "/manus-storage/01-Galeria-JEF-150s-EFI-1_327f6062.webp",
  "phoenix-s-efi": "/manus-storage/phoenix-s-efi-grey-isolated-official_7beba847.webp",
  "jef-150": "/manus-storage/08-Galeria-JEF-150-3-1-scaled_a50c371c.webp",
  "sbm-400s": "/manus-storage/10-Galeria-SBM-400s-6_0dff04c4.webp",
  iron: "/manus-storage/iron-official-full-product_32f7aae9.webp",
  titanium: "/manus-storage/02-Galeria-Titanium-1-3_5a9b00c8.webp",
  "storm-200-efi": "/manus-storage/04-02_d8c81183.webp",
};

function galleryImages(name: string, sources: string[]): MotoImage[] {
  return sources.map((src, index) => ({ src, label: `Galeria ${String(index + 2).padStart(2, "0")}`, alt: `${name} em fotografia oficial adicional da Shineray` }));
}

const officialGalleries: Record<string, MotoImage[]> = {
  "jef-170": galleryImages("JEF 170", ["/manus-storage/jef-170-042b21ff_b6f60159.webp", "/manus-storage/jef-170-564cb53d_84181cb0.webp", "/manus-storage/jef-170-8bddfa71_2fd4ea6b.webp"]),
  "shi-400sc": galleryImages("SHI 400SC", ["/manus-storage/shi-400sc-82f9bc44_380843b8.webp", "/manus-storage/shi-400sc-9614a6ed_8a1861aa.webp", "/manus-storage/shi-400sc-c39ab799_41d6e4be.webp"]),
  "shi-175": galleryImages("SHI 175", ["/manus-storage/shi-175-3327b55c_f5294d83.webp", "/manus-storage/shi-175-913d7136_1e87b79a.webp", "/manus-storage/shi-175-98fd068f_b2157c92.webp"]),
  "shi-250": galleryImages("SHI 250", ["/manus-storage/shi-250-3a7923d2_072dae52.webp", "/manus-storage/shi-250-921de02e_232b765e.webp", "/manus-storage/shi-250-f695601d_07198e27.webp"]),
  "sh4": galleryImages("SH4", ["/manus-storage/sh4-2cda740f_a6bdd6f3.webp", "/manus-storage/sh4-c0fc7889_f75b8000.webp", "/manus-storage/sh4-f524ad2b_e9041771.webp"]),
  "sh3": galleryImages("SH3", ["/manus-storage/sh3-4158e52c_95c46070.webp", "/manus-storage/sh3-5f2c86a2_a75876f0.webp", "/manus-storage/sh3-e85403e5_89e301a3.webp"]),
  "urban-150-efi": galleryImages("URBAN 150 EFI", ["/manus-storage/urban-150-efi-65f7d2c3_cb1ae4d6.webp", "/manus-storage/urban-150-efi-894b9296_e57c19ac.webp", "/manus-storage/urban-150-efi-98a1e30a_9fd850ee.webp"]),
  "250f": galleryImages("250F", ["/manus-storage/250f-c39f453b_c87f6993.webp"]),
  "free-150-efi": galleryImages("FREE 150 EFI", ["/manus-storage/free-150-efi-1f150264_aaf81bcc.webp", "/manus-storage/free-150-efi-3360bda5_b81cd076.webp", "/manus-storage/free-150-efi-8f20e42f_c96a9acf.webp"]),
  "jef-150s-efi": galleryImages("JEF 150S EFI", ["/manus-storage/jef-150s-efi-b4a7b92b_28fee322.webp", "/manus-storage/jef-150s-efi-f86487b9_77611c6a.webp"]),
  "jef-150": galleryImages("JEF 150", ["/manus-storage/jef-150-1dc89392_696abdc7.webp", "/manus-storage/jef-150-5c233733_42353b89.webp", "/manus-storage/jef-150-d75e8d4f_7f79a5b8.webp"]),
  "rio-125-efi": galleryImages("RIO 125 EFI", ["/manus-storage/rio-125-efi-cd665916_53e18a10.webp"]),
  "phoenix-s-efi": galleryImages("PHOENIX S EFI", ["/manus-storage/phoenix-s-efi-32bbddec_8ee6c854.webp", "/manus-storage/phoenix-s-efi-69273a5a_e58efc48.webp"]),
  "jet-125-efi": galleryImages("JET 125 EFI", ["/manus-storage/jet-125-efi-095453f2_cd10e2d2.webp"]),
  "shi-175s-efi": galleryImages("SHI 175S EFI", ["/manus-storage/shi-175s-efi-3b487fdf_60e05041.webp"]),
  "se1": galleryImages("SE1", ["/manus-storage/se1-1a56042d_d60fd45f.webp", "/manus-storage/se1-aa9adb99_aea8b8a1.webp", "/manus-storage/se1-d21528b8_e26307ce.webp"]),
  "se2": galleryImages("SE2", ["/manus-storage/se2-5b1bcba3_49ee11e8.webp", "/manus-storage/se2-67f28610_c0c0fca4.webp", "/manus-storage/se2-d86ec8a9_7a6fb61a.webp"]),
  "she-s": galleryImages("SHE-S", ["/manus-storage/she-s-59d689d8_672bed83.webp", "/manus-storage/she-s-6c033686_884deea4.webp", "/manus-storage/she-s-755532bf_46f814fe.webp"]),
  "phoenix-s": galleryImages("PHOENIX S", ["/manus-storage/phoenix-s-bdabb7a1_7e549109.webp", "/manus-storage/phoenix-s-81ab1e72_ded7cd53.webp"]),
  "ptxs": galleryImages("PTXS", ["/manus-storage/ptxs-e14c88c0_d1e55f6d.webp", "/manus-storage/ptxs-28eb8e4e_f3b40596.webp", "/manus-storage/ptxs-25832623_e17ff18f.webp"]),
  "pt-stand": galleryImages("PT-STAND", ["/manus-storage/pt-stand-8ef99a5a_68dde2d5.webp", "/manus-storage/pt-stand-6a2d70ef_78149f6f.webp", "/manus-storage/pt-stand-af91961d_df5e927b.webp"]),
  "pt4-pro": galleryImages("PT4-PRO", ["/manus-storage/pt4-pro-4a4a87df_7c74f7cf.webp", "/manus-storage/pt4-pro-101cde99_c9788cb2.webp", "/manus-storage/pt4-pro-29d00314_a1dbb1cd.webp"]),
  "ptxr": galleryImages("PTXR", ["/manus-storage/ptxr-3338d84e_1e28716e.webp", "/manus-storage/ptxr-ebd6114c_d3a93eb4.webp", "/manus-storage/ptxr-f1bdb339_1270ed6f.webp"]),
  "pt1s": galleryImages("PT1S", ["/manus-storage/pt1s-3269315c_3f955d52.webp", "/manus-storage/pt1s-7d645687_4d80e33d.webp", "/manus-storage/pt1s-fa6b8165_e4e6b472.webp"]),
  "pt2xs": galleryImages("PT2XS", ["/manus-storage/pt2xs-33c51ad8_1eea0243.webp", "/manus-storage/pt2xs-a69e4b84_b5716f06.webp", "/manus-storage/pt2xs-ac3407a2_2bd31d56.webp"]),
};

const genericSpecs = [
  { label: "Ficha técnica", value: "Consultar ficha vigente" },
  { label: "Disponibilidade", value: "Consultar Neto Motos" },
  { label: "Condições", value: "Sob consulta" },
  { label: "Cores", value: "Consultar disponibilidade" },
];

function images(name: string, src: string, extra: MotoImage[] = []): MotoImage[] {
  const seen = new Set<string>();
  return [
    { src, label: "Foto oficial", alt: `${name} em imagem oficial da Shineray` },
    ...extra,
  ].filter((image) => {
    const key = image.src.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const urban150ColorVariants: MotoColorVariant[] = [
  {
    id: "urban-150-preta",
    name: "Preta",
    swatch: "#151719",
    hero: { src: "/manus-storage/urban-150-efi-preta-official_0d57184c.png", label: "URBAN 150 EFI preta", alt: "Shineray URBAN 150 EFI na cor preta em imagem oficial" },
    gallery: [
      { src: officialGallerySources["urban-150-efi"]?.[0] ?? "", label: "Cockpit oficial", alt: "Cockpit oficial da URBAN 150 EFI preta" },
      { src: officialGallerySources["urban-150-efi"]?.[1] ?? "", label: "Traseira oficial", alt: "Traseira oficial da URBAN 150 EFI preta" },
      { src: officialGallerySources["urban-150-efi"]?.[3] ?? "", label: "Comandos oficiais", alt: "Comandos oficiais da URBAN 150 EFI preta" },
    ],
    frames: [],
    source: "https://www.shineray.com.br/produto/urban-150-efi/",
  },
  {
    id: "urban-150-vermelha",
    name: "Vermelha",
    swatch: "#c8192e",
    hero: { src: "/manus-storage/urban-150-efi-vermelha-official_45363fe4.png", label: "URBAN 150 EFI vermelha", alt: "Shineray URBAN 150 EFI na cor vermelha em imagem oficial" },
    gallery: [
      { src: officialGallerySources["urban-150-efi"]?.[2] ?? "", label: "Cockpit vermelho", alt: "Cockpit oficial da URBAN 150 EFI vermelha" },
      { src: officialGallerySources["urban-150-efi"]?.[4] ?? "", label: "Frente vermelha", alt: "Frente oficial da URBAN 150 EFI vermelha" },
    ],
    frames: [],
    source: "https://www.shineray.com.br/produto/urban-150-efi/",
  },
];

function makeMoto({ id, name, brand = "SHINERAY", category, engine, price, description, copyLine, audience, image, source, highlights = ["Linha oficial Shineray", "Preço de referência", "Disponibilidade sob consulta", "Atendimento direto"], specs = genericSpecs, extraImages = [], details = [], colors, colorVariants }: {
  id: string;
  name: string;
  brand?: "SHINERAY" | "SBM";
  category: string;
  engine?: string;
  price: string;
  description: string;
  copyLine: string;
  audience: string;
  image: string;
  source: string;
  highlights?: string[];
  specs?: Array<{ label: string; value: string }>;
  extraImages?: MotoImage[];
  details?: MotoDetail[];
  colors?: string[];
  colorVariants?: MotoColorVariant[];
}): Moto {
  const officialGallery = officialGallerySources[id] ?? [];
  const standardizedHero = standardHeroImages[id] ?? image;
  const officialImages = officialGallery.map((src, index) => ({
    src,
    label: index === 0 ? "Foto oficial" : `Galeria ${String(index + 1).padStart(2, "0")}`,
    alt: `${name} em fotografia oficial de produto da ${brand}`,
  }));
  const supplementalImages = officialGallery.length > 0 ? [] : extraImages;
  return {
    id,
    brand,
    name,
    eyebrow: `CAPÍTULO / ${category.toUpperCase()}`,
    category,
    engine,
    price,
    priceNote: "Preço publicado pela fabricante como referência. Consulte estoque, cores, frete, documentação e condições com o Neto.",
    description,
    copyLine,
    audience,
    highlights,
    images: images(name, standardizedHero, [...officialImages, ...supplementalImages]),
    details: editorialDetails[id] ?? details,
    specs: officialSpecs[id] ?? specs,
    colors,
    colorVariants,
    source,
    sourceLabel: `Fonte de produto e imagem: ${brand} — página oficial do modelo`,
  };
}

const rawMotos: Moto[] = [
  makeMoto({
    id: "jef-170", name: "JEF 170", category: "Street / 170 cc", price: "R$ 15.390,00", image: catalog.jef170, source: "https://www.shineray.com.br/produto/jef-170/",
    description: "A cidade não precisa ser previsível. A JEF 170 chega com atitude urbana e presença suficiente para transformar o caminho de todos os dias em uma escolha com assinatura.",
    copyLine: "Uma street com presença para resolver a cidade todos os dias.", audience: "Para quem quer painel digital, rodas 17 e freio dianteiro a disco para encarar o trânsito com mais confiança.",
    highlights: ["Painel digital", "Rodas 17”", "Freio dianteiro a disco", "Monoshock traseiro"],
    specs: [{ label: "Cilindrada", value: "Consultar ficha vigente" }, { label: "Painel", value: "Digital" }, { label: "Rodas", value: "17”" }, { label: "Freio dianteiro", value: "Disco" }, { label: "Suspensão traseira", value: "Monoshock" }, { label: "Disponibilidade", value: "Consultar Neto Motos" }],
    extraImages: [{ src: detail.jef170Hero, label: "Ângulo editorial", alt: "Shineray JEF 170 em foto oficial de produto" }, { src: detail.jef170Gallery, label: "Detalhes", alt: "Detalhe oficial da Shineray JEF 170" }, { src: detail.jef170Detail, label: "Acabamento", alt: "Acabamento oficial da Shineray JEF 170" }],
  }),
  makeMoto({
    id: "shi-400sc", name: "SHI 400SC", category: "Motocicleta / linha SHI", price: "R$ 24.990,00", image: catalog.shi400sc, source: "https://www.shineray.com.br/produto/shi-400sc/",
    description: "Há escolhas que não precisam levantar a voz. A SHI 400SC tem a presença de quem já sabe o que procura e quer uma experiência mais marcante sobre duas rodas.",
    copyLine: "Suba de categoria com uma presença que você percebe antes de ligar o motor.", audience: "Para quem quer uma motocicleta mais marcante e prefere conhecer conjunto, condição e disponibilidade antes de fechar.",
  }),
  makeMoto({
    id: "shi-175", name: "SHI 175", category: "Trail / 175 cc", price: "R$ 16.490,00", image: catalog.shi175, source: "https://www.shineray.com.br/produto/shi-175/",
    description: "Nem todo caminho termina no asfalto. A SHI 175 foi colocada aqui para quem gosta de manter uma rota aberta — na cidade, na estrada e no próximo desvio.",
    copyLine: "Trail para sair da rota sem deixar a cidade para trás.", audience: "Para quem quer uma moto versátil para a semana, a estrada e os planos que mudam de direção.",
  }),
  makeMoto({
    id: "shi-170", name: "SHI 170", category: "Trail / 170 cc", price: "R$ 13.490,00", image: catalog.shi170, source: "https://www.shineray.com.br/produto/shi-170/",
    description: "A SHI 170 foi feita para quem prefere uma escolha versátil, com atitude de trail e espaço para viver a cidade de outro ângulo.",
    copyLine: "Versatilidade para o trabalho da semana e o destino do fim de semana.", audience: "Para quem quer praticidade hoje e liberdade para ampliar o caminho amanhã.",
  }),
  makeMoto({
    id: "urban-lite", name: "URBAN LITE", category: "Scooter / 150 cc", price: "R$ 12.490,00", image: catalog.urbanLite, source: "https://www.shineray.com.br/produto/urban-lite/",
    description: "A rotina pede agilidade. A URBAN LITE entra em cena para deixar os pequenos deslocamentos mais simples, mais leves e mais seus.",
    copyLine: "Automático para ganhar tempo no trânsito.", audience: "Para quem quer CVT, painel digital, guarda-volumes e iluminação Full LED em uma escolha urbana objetiva.",
    highlights: ["CVT automático", "Painel digital", "Guarda-volumes", "Full LED"],
    specs: [{ label: "Cilindrada", value: "149,48 cc" }, { label: "Potência", value: "13,5 cv / 7.500 rpm" }, { label: "Torque", value: "11 N.m / 5.000 rpm" }, { label: "Câmbio", value: "CVT automático" }, { label: "Tanque", value: "8 L" }, { label: "Freios", value: "Disco / tambor; CBS" }],
    extraImages: [{ src: detail.urbanHero, label: "Ângulo editorial", alt: "Shineray URBAN LITE em foto oficial de produto" }, { src: detail.urbanGallery, label: "Detalhes", alt: "Detalhe oficial da Shineray URBAN LITE" }, { src: detail.urbanDetail, label: "Acabamento", alt: "Acabamento oficial da Shineray URBAN LITE" }],
  }),
  makeMoto({
    id: "jet-50", name: "JET 50", category: "Ciclomotor / urbano", price: "R$ 11.090,00", image: catalog.jet50, source: "https://www.shineray.com.br/produto/jet-50/",
    description: "A distância pode ser curta. A vontade de viver a cidade do seu jeito, não. A JET 50 é uma porta de entrada para mais autonomia na rotina.",
    copyLine: "Sua primeira autonomia começa na cidade.", audience: "Para quem procura uma porta de entrada objetiva e quer sair da conversa sabendo qual é o próximo passo.",
  }),
  makeMoto({
    id: "jet-125", name: "JET 125", category: "Scooter / 125 cc", price: "R$ 11.490,00", image: catalog.jet125, source: "https://www.shineray.com.br/produto/jet-125/",
    description: "Entre o trabalho, a casa e tudo o que acontece no meio, a JET 125 coloca praticidade no centro da sua rotina.",
    copyLine: "Mais facilidade para fazer a cidade render.", audience: "Para quem quer painel digital, Full LED, porta USB e guarda-volumes na rotina diária.",
    highlights: ["Painel digital", "Full LED", "Porta USB", "Guarda-volumes"],
  }),
  makeMoto({
    id: "shi-250", name: "SHI 250", category: "Trail / 250 cc", price: "R$ 21.490,00", image: catalog.shi250Card, source: "https://www.shineray.com.br/produto/shi-250/",
    description: "Uma trail de 250 cc para quem quer sair do asfalto sem abrir mão de controle, informação e orientação direta antes da compra.",
    copyLine: "Versatilidade de verdade para o asfalto e o próximo destino.", audience: "249,9 cc, seis marchas e freios a disco nas duas rodas: uma escolha para quem quer liberdade com ficha técnica na mesa.",
    highlights: ["Motor 249,9 cc", "6 marchas", "Full LED + DRL", "Freios a disco nas duas rodas"],
    specs: [{ label: "Cilindrada", value: "249,9 cc" }, { label: "Potência", value: "19,3 CV / 8.000 rpm" }, { label: "Torque", value: "18 N.m / 6.000 rpm" }, { label: "Câmbio", value: "6 marchas" }, { label: "Freios", value: "Disco dianteiro e traseiro" }, { label: "Suspensão", value: "Invertida / monoshock" }, { label: "Rodas", value: "Raiadas" }, { label: "Iluminação", value: "Full LED + DRL" }],
    extraImages: [{ src: detail.shi250Gallery, label: "Ângulo editorial", alt: "Shineray SHI 250 em vista lateral oficial" }, { src: detail.shi250Detail, label: "Detalhes", alt: "Detalhe oficial da Shineray SHI 250" }, { src: detail.shi250Panel, label: "Painel", alt: "Painel digital oficial da Shineray SHI 250" }],
  }),
  makeMoto({
    id: "sh4", name: "SH4", category: "Scooter / urbana", price: "R$ 8.990,00", image: catalog.shi4, source: "https://www.shineray.com.br/produto/sh4/",
    description: "Uma scooter para colocar a cidade em ordem: sair, resolver, voltar e repetir — com uma escolha que cabe na sua rotina e no seu plano.",
    copyLine: "A mobilidade urbana pode caber melhor na sua rotina.", audience: "Para quem quer sair, resolver e voltar com uma escolha prática e uma orientação direta antes de comprar.",
  }),
  makeMoto({
    id: "sh3", name: "SH3", category: "Scooter / urbana", price: "R$ 10.990,00", image: catalog.shi3, source: "https://www.shineray.com.br/produto/sh3/",
    description: "A SH3 traduz a ideia de praticidade em uma escolha com presença. Para entrar na rua, ganhar fluidez e fazer mais com a mesma cidade.",
    copyLine: "Agilidade para fazer mais com a mesma cidade.", audience: "Para quem quer uma solução urbana direta, com presença e sem transformar a escolha em um labirinto.",
  }),
  makeMoto({
    id: "urban-150-efi", name: "URBAN 150 EFI", category: "Scooter / 150 cc", price: "R$ 20.990,00", image: catalog.urban150, source: "https://www.shineray.com.br/produto/urban-150-efi/",
    description: "Para quem espera mais da rotina urbana, a URBAN 150 EFI combina presença de scooter e uma proposta que pede espaço na sua agenda.",
    copyLine: "Mais presença para o deslocamento que ocupa seus dias.", audience: "Para quem quer uma scooter urbana mais completa e prefere entender a escolha antes de fechar.",
    colorVariants: urban150ColorVariants,
  }),
  makeMoto({
    id: "250f", name: "250F", category: "Street / sport", price: "R$ 20.590,00", image: catalog.sport250, source: "https://www.shineray.com.br/produto/250f/",
    description: "A 250F tem o tipo de presença que muda a primeira impressão. Uma escolha para quem quer entrar em cena com design e intenção.",
    copyLine: "Presença esportiva para quem quer subir na moto com intenção.", audience: "Para quem quer 250 cc, ABS em dois canais, Full LED/DRL e painel digital na próxima escolha.",
    highlights: ["250 cc", "ABS dois canais", "Full LED / DRL", "Painel digital"],
  }),
  makeMoto({
    id: "shi-175s-efi", name: "SHI 175S EFI", category: "Trail / 175 cc", price: "R$ 17.990,00", image: detail.shi175sHero, source: "https://www.shineray.com.br/produto/shi-175s-efi/",
    description: "Uma trail de presença forte, com injeção eletrônica e conjunto preparado para acompanhar a rotina com mais liberdade.",
    copyLine: "Injeção eletrônica e espírito trail para ampliar seu caminho.", audience: "Para quem quer rodas 19/17, discos nas duas rodas e uma trail pronta para os dias comuns e os planos fora da agenda.",
    highlights: ["Injeção eletrônica", "Rodas 19 / 17", "Disco nas duas rodas", "Monoshock traseiro"],
    specs: [{ label: "Cilindrada", value: "175,11 cc" }, { label: "Potência", value: "15,63 CV / 8.500 rpm" }, { label: "Torque", value: "14 N.m / 6.500 rpm" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "14,5 L" }, { label: "Freios", value: "Disco dianteiro e traseiro" }, { label: "Rodas", value: "19” / 17”" }, { label: "Suspensão", value: "Telescópica / monoshock" }],
    extraImages: [{ src: detail.shi175sGallery, label: "Ângulo editorial", alt: "Shineray SHI 175S EFI em vista lateral oficial" }, { src: detail.shi175sDetail, label: "Detalhes", alt: "Detalhe oficial da Shineray SHI 175S EFI" }],
  }),
  makeMoto({
    id: "free-150-efi", name: "FREE 150 EFI", category: "Street / 150 cc", price: "R$ 12.990,00", image: catalog.free150, source: "https://www.shineray.com.br/produto/free-150-efi/",
    description: "A FREE 150 EFI é para quem quer começar uma nova rotina com mais independência e uma moto para usar todos os dias.",
    copyLine: "A primeira moto pode colocar sua rotina em movimento.", audience: "Para quem busca autonomia na rotina e quer comparar preço, uso e condições antes de escolher a versão certa.",
  }),
  makeMoto({
    id: "jef-150s-efi", name: "JEF 150S EFI", category: "Street / 150 cc", price: "R$ 15.990,00", image: catalog.jef150s, source: "https://www.shineray.com.br/produto/jef-150s-efi/",
    description: "A JEF 150S EFI coloca atitude urbana em uma escolha que conversa com quem quer subir na moto e seguir o próprio ritmo.",
    copyLine: "Street com atitude para quem quer marcar presença.", audience: "Para quem quer personalidade na cidade e uma recomendação direta na hora de escolher a próxima moto.",
  }),
  makeMoto({
    id: "rio-125-efi", name: "RIO 125 EFI", category: "Street / 125 cc", price: "R$ 12.990,00", image: catalog.rio125, source: "https://www.shineray.com.br/produto/rio-125-efi/",
    description: "A RIO 125 EFI foi feita para entrar na vida real: aquela dos compromissos, das voltas rápidas e dos planos que merecem um pouco mais de liberdade.",
    copyLine: "Uma escolha equilibrada para a cidade real.", audience: "Para quem quer injeção eletrônica, painel digital e iluminação LED/DRL com explicação direta de custos e condições.",
    highlights: ["Injeção eletrônica", "Painel digital", "LED / DRL", "Disponibilidade sob consulta"],
  }),
  makeMoto({
    id: "phoenix-s-efi", name: "PHOENIX S EFI", category: "Urbana / EFI", price: "R$ 9.990,00", image: catalog.phoenixEfi, source: "https://www.shineray.com.br/produto/phoenix-s-efi/",
    description: "A PHOENIX S EFI é a escolha de quem quer reduzir a distância entre vontade e movimento — com uma proposta urbana e um próximo passo simples.",
    copyLine: "Mais autonomia para começar a se mover.", audience: "Para quem quer mobilidade para trabalhar, estudar ou viver mais a própria cidade sem complicar o próximo passo.",
  }),
  makeMoto({
    id: "jet-125-efi", name: "JET 125 EFI", category: "Scooter / 125 cc", price: "R$ 13.490,00", image: catalog.jet125Efi, source: "https://www.shineray.com.br/produto/jet-125ss-efi/",
    description: "A JET 125 EFI coloca eficiência e praticidade no mesmo capítulo — para quem quer uma scooter que faça sentido antes, durante e depois da compra.",
    copyLine: "Uma scooter eficiente para ganhar tempo no dia a dia.", audience: "Para quem procura praticidade urbana e quer decidir com informação, não com pressão.",
  }),
  makeMoto({
    id: "jef-150", name: "JEF 150", category: "Street / 150 cc", price: "R$ 14.790,00", image: catalog.jef150, source: "https://www.shineray.com.br/produto/jef-150/",
    description: "A JEF 150 é uma escolha honesta para quem quer uma street com presença, leitura simples e espaço para a vida acontecer no caminho.",
    copyLine: "Uma street direta para a rotina que não para.", audience: "Para quem quer uma moto para todos os dias e um atendimento para confiar antes de fechar.",
  }),
  makeMoto({
    id: "phoenix-s", name: "PHOENIX S", category: "Urbana / acessível", price: "R$ 8.790,00", image: catalog.phoenix, source: "https://www.shineray.com.br/produto/phoenix-s/",
    description: "A PHOENIX S é um convite para colocar mais movimento nos seus dias, com uma proposta urbana que cabe no plano e abre caminho para novas rotas.",
    copyLine: "Comece a rodar com uma escolha que cabe no seu plano.", audience: "Para quem quer comprar bem, usar todos os dias e contar com atendimento próximo.",
  }),
  makeMoto({
    id: "sbm-150s", brand: "SBM", name: "SBM 150S", category: "Street / 150 cc", engine: "149,05 cc", price: "R$ 16.290,00", image: catalog.sbm150, source: "https://www.shineray.com.br/produto/sbm-150/",
    description: "A SBM 150S foi criada para a rotina sobre duas rodas: uma street de pilotagem leve, com painel digital, ABS dianteiro e conjunto pensado para o uso diário.",
    copyLine: "Uma street equilibrada para fazer a cidade render.", audience: "Para quem quer praticidade, leitura rápida das informações e mais controle nas frenagens do dia a dia.",
    highlights: ["Painel 100% digital", "ABS dianteiro", "Freios a disco nas duas rodas", "Full LED"],
    specs: [{ label: "Cilindrada", value: "149,05 cc" }, { label: "Potência", value: "12,34 CV / 8.500 RPM" }, { label: "Torque", value: "11,2 N.M / 6.500 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Freios", value: "Disco ABS dianteiro e disco traseiro" }, { label: "Suspensão", value: "Garfo telescópico / monoshock" }, { label: "Rodas", value: "90/90–17 / 120/80–17" }, { label: "Tanque", value: "14,5 L" }],
    extraImages: [
      { src: "/manus-storage/sbm-150-02_a54c9783.webp", label: "Ângulo 02", alt: "SBM 150S em fotografia oficial adicional" },
      { src: "/manus-storage/sbm-150-03_aae21409.webp", label: "Ângulo 03", alt: "SBM 150S em fotografia oficial adicional" },
    ],
    details: [
      { title: "PAINEL DIGITAL", headline: "Tudo o que importa, em um único olhar.", description: "O painel 100% digital reúne as informações essenciais com leitura clara para acompanhar a rotina com mais praticidade.", source: "https://www.shineray.com.br/produto/sbm-150/" },
      { title: "RODAS E FREIOS", headline: "Controle para seguir com mais confiança.", description: "As rodas de liga leve e os freios a disco nas duas rodas, com ABS na dianteira, formam um conjunto voltado a estabilidade e controle.", source: "https://www.shineray.com.br/produto/sbm-150/" },
      { title: "SUSPENSÃO", headline: "Mais equilíbrio para a rotina.", description: "O garfo telescópico dianteiro e o monoshock traseiro trabalham para absorver as irregularidades e manter a moto estável.", source: "https://www.shineray.com.br/produto/sbm-150/" },
    ],
  }),
  makeMoto({
    id: "sbm-250s", brand: "SBM", name: "SBM 250S", category: "Sport / 249 cc", engine: "249 cc", price: "R$ 23.490,00", image: catalog.sbm250s, source: "https://www.shineray.com.br/produto/sbm-250s/",
    description: "A SBM 250S combina desenho esportivo, motor de 249 cc, ABS de duplo canal e suspensão invertida para quem quer mais presença e controle na pilotagem.",
    copyLine: "Performance para transformar cada trajeto em escolha.", audience: "Para quem busca uma esportiva com leitura digital, conjunto de suspensão mais firme e freios preparados para diferentes situações.",
    highlights: ["ABS de duplo canal", "Garfo invertido", "Painel digital", "Full LED"],
    specs: [{ label: "Cilindrada", value: "249 cc" }, { label: "Potência", value: "27,5 CV / 9.500 RPM" }, { label: "Torque", value: "22,5 N.M / 7.250 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Freios", value: "Disco ABS de duplo canal" }, { label: "Suspensão", value: "Garfo invertido / monoshock" }, { label: "Rodas", value: "110/70 R17 / 140/60 R17" }, { label: "Tanque", value: "12,5 L" }],
    extraImages: [
      { src: "/manus-storage/sbm-250s-02_dbaff00f.webp", label: "Ângulo 02", alt: "SBM 250S em fotografia oficial adicional" },
      { src: "/manus-storage/sbm-250s-03_7ed6a594.webp", label: "Ângulo 03", alt: "SBM 250S em fotografia oficial adicional" },
    ],
    details: [
      { title: "PAINEL DIGITAL", headline: "Informação rápida com espírito esportivo.", description: "O display LCD reúne velocidade, rotações, combustível e outras informações em uma leitura direta.", source: "https://www.shineray.com.br/produto/sbm-250s/" },
      { title: "ABS DE DUPLO CANAL", headline: "Frenagem com mais controle.", description: "O sistema ABS atua nos dois canais para reduzir o risco de travamento e manter a estabilidade em frenagens exigentes.", source: "https://www.shineray.com.br/produto/sbm-250s/" },
      { title: "SUSPENSÃO INVERTIDA", headline: "Resposta precisa para a pilotagem.", description: "O garfo invertido dianteiro e o monoshock traseiro combinam rigidez, absorção e estabilidade para o uso esportivo.", source: "https://www.shineray.com.br/produto/sbm-250s/" },
    ],
  }),
  makeMoto({
    id: "sbm-400s", brand: "SBM", name: "SBM 400S", category: "Naked / 399 cc", engine: "399,73 cc", price: "R$ 33.490,00", image: catalog.sbm400s, source: "https://www.shineray.com.br/produto/sbm-400/",
    description: "A SBM 400S é uma naked para quem procura motor bicilíndrico, câmbio de seis marchas, 41 CV e um conjunto preparado para entregar presença e agilidade.",
    copyLine: "Dois cilindros, uma escolha feita para pilotar mais.", audience: "Para quem quer subir de categoria com painel TFT, ABS de duplo canal e uma ciclística que valoriza resposta e estabilidade.",
    highlights: ["Motor bicilíndrico", "41 CV", "ABS de duplo canal", "Painel TFT"],
    specs: [{ label: "Cilindrada", value: "399,73 cc" }, { label: "Potência", value: "41 CV / 9.000 RPM" }, { label: "Torque", value: "37 N.M / 7.500 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Freios", value: "Disco ABS de duplo canal" }, { label: "Suspensão", value: "Garfo invertido / monoshock" }, { label: "Rodas", value: "110/70 R17 / 150/60 R17" }, { label: "Tanque", value: "13,5 L" }],
    extraImages: [
      { src: "/manus-storage/sbm-400s-02_05e1f6e4.webp", label: "Ângulo 02", alt: "SBM 400S em fotografia oficial adicional" },
      { src: "/manus-storage/sbm-400s-03_e2996e19.webp", label: "Ângulo 03", alt: "SBM 400S em fotografia oficial adicional" },
    ],
    details: [
      { title: "PAINEL TFT", headline: "Alta nitidez para manter o controle.", description: "O painel TFT oferece leitura rápida das informações e permite acompanhar a pilotagem com mais clareza, inclusive sob sol forte.", source: "https://www.shineray.com.br/produto/sbm-400/" },
      { title: "ABS DE DUPLO CANAL", headline: "Potência acompanhada de controle.", description: "O ABS de duplo canal ajuda a evitar travamentos em frenagens inesperadas e preserva a estabilidade do conjunto.", source: "https://www.shineray.com.br/produto/sbm-400/" },
      { title: "MOTOR BICILÍNDRICO", headline: "Resposta para quem quer subir de categoria.", description: "Com 399,73 cc, 41 CV e câmbio de seis marchas, o motor bicilíndrico entrega uma proposta mais forte para cidade e estrada.", source: "https://www.shineray.com.br/produto/sbm-400/" },
    ],
  }),
  makeMoto({
    id: "se2", name: "SE2", category: "Elétrica", price: "R$ 16.990,00", image: catalog.se2, source: "https://www.shineray.com.br/produto/se2/",
    description: "A SE2 representa uma forma mais silenciosa de pensar a cidade: uma escolha elétrica para quem quer experimentar outra relação com o deslocamento.",
    copyLine: "A cidade muda quando o silêncio vira parte do caminho.", audience: "Para quem quer conhecer a mobilidade elétrica e conversar antes de decidir o que realmente combina com a sua rotina.",
  }),
  makeMoto({
    id: "se1", name: "SE1", category: "Elétrica", price: "R$ 15.990,00", image: catalog.se1, source: "https://www.shineray.com.br/produto/se1/",
    description: "A SE1 entra para quem quer simplificar a mobilidade e começar a considerar uma escolha elétrica para a rotina urbana.",
    copyLine: "Uma forma econômica de testar outro jeito de circular.", audience: "Para quem quer avaliar se a mobilidade elétrica combina com o dia a dia e entender autonomia, recarga e condições.",
  }),
  makeMoto({
    id: "she-s", name: "SHE-S", category: "Elétrica", price: "R$ 16.490,00", image: catalog.sheS, source: "https://www.shineray.com.br/produto/she-s/",
    description: "A SHE-S traduz a mobilidade elétrica em uma presença urbana elegante, para quem quer uma escolha diferente sem abrir mão de personalidade.",
    copyLine: "Mobilidade elétrica com assinatura urbana.", audience: "Para quem quer explorar uma experiência diferente com orientação humana em cada etapa da escolha.",
  }),
  makeMoto({
    id: "ptxs", name: "PTXS", category: "Mobilidade elétrica", price: "R$ 5.390,00", image: "/manus-storage/ptxs_55c251cd.webp", source: "https://www.shineray.com.br/produto/ptxs/",
    description: "A PTXS pega a praticidade de um patinete e troca o esforço por uma experiência elétrica leve, direta e pronta para pequenos deslocamentos.",
    copyLine: "Leve para guardar. Direta para se mover.", audience: "Para quem quer uma solução elétrica compacta, com até 25 km de autonomia e uma compra fácil de entender.",
    highlights: ["Motor elétrico", "Autonomia de até 25 km", "Painel digital", "Freio traseiro a disco"],
    specs: [{ label: "Motor", value: "Elétrico Brushless" }, { label: "Potência", value: "350 W" }, { label: "Velocidade", value: "Até 25 km/h" }, { label: "Autonomia", value: "Até 25 km" }, { label: "Bateria", value: "Lítio 36 V 7,8 Ah" }, { label: "Carga máxima", value: "100 kg" }],
    extraImages: [],
  }),
  makeMoto({
    id: "pt-stand", name: "PT-STAND", category: "Mobilidade elétrica", price: "R$ 5.990,00", image: "/manus-storage/pt-stand_3c30f455.webp", source: "https://www.shineray.com.br/produto/pt-stand/",
    description: "Com plataforma antideslizante, visor digital e freios a disco, a PT-STAND transforma o deslocamento curto em uma experiência mais segura e prática.",
    copyLine: "Micromobilidade elétrica para resolver trajetos curtos.", audience: "Para quem quer plataforma antideslizante, freios a disco nas duas rodas e um desenho funcional para a rotina.",
    highlights: ["Motor 350 W", "Até 30 km de autonomia", "Freio a disco nas duas rodas", "Guidão rebatível"],
    specs: [{ label: "Motor", value: "Elétrico Brushless" }, { label: "Potência", value: "350 W" }, { label: "Velocidade", value: "Até 35 km/h" }, { label: "Autonomia", value: "Até 30 km" }, { label: "Bateria", value: "36 V 10 Ah" }, { label: "Carga máxima", value: "120 kg" }],
  }),
  makeMoto({
    id: "pt4-pro", name: "PT4-PRO", category: "Scooter elétrica", price: "R$ 9.990,00", image: "/manus-storage/pt4-pro_bcfa441d.webp", source: "https://www.shineray.com.br/produto/pt4-pro/",
    description: "A PT4-PRO leva acabamento premium, bateria removível e autonomia estimada de até 40 km para uma scooter elétrica que quer fazer parte da sua rotina.",
    copyLine: "Mais autonomia e conforto para a sua rotina elétrica.", audience: "Para quem quer bateria removível, até 40 km de autonomia e uma experiência elétrica mais completa.",
    highlights: ["Motor 3.000 W", "Bateria removível", "Até 40 km de autonomia", "Freio a disco nas duas rodas"],
    specs: [{ label: "Motor", value: "Brushless 3.000 W" }, { label: "Velocidade", value: "Até 45 km/h" }, { label: "Autonomia", value: "Até 40 km" }, { label: "Bateria", value: "60 V 26 Ah removível" }, { label: "Carga", value: "4 a 5 horas" }, { label: "Carga máxima", value: "150 kg" }],
  }),
  makeMoto({
    id: "ptxr", name: "PTXR", category: "Mobilidade elétrica", price: "R$ 6.990,00", image: "/manus-storage/ptxr_d2e3f3fe.webp", source: "https://www.shineray.com.br/produto/ptxr/",
    description: "O PTXR acrescenta banco ajustável, guidão dobrável e uma proposta elétrica prática para resolver a mobilidade urbana sem complicar.",
    copyLine: "Compacta para guardar. Confortável para usar.", audience: "Para quem quer banco ajustável, guidão dobrável e uma alternativa elétrica prática para o caminho diário.",
    highlights: ["Motor 500 W", "Até 25 km de autonomia", "Banco ajustável", "Guidão dobrável"],
    specs: [{ label: "Motor", value: "Brushless 500 W" }, { label: "Velocidade", value: "Até 25 km/h" }, { label: "Autonomia", value: "Até 25 km" }, { label: "Bateria", value: "48 V 10 Ah" }, { label: "Carga", value: "Média de 6 horas" }, { label: "Carga máxima", value: "100 kg" }],
  }),
  makeMoto({
    id: "pt1s", name: "PT1S", category: "Mobilidade elétrica", price: "R$ 6.990,00", image: "/manus-storage/pt1s_b09f480c.webp", source: "https://www.shineray.com.br/produto/pt1s/",
    description: "A PT1S é a escolha para quem quer reduzir o atrito do deslocamento e colocar uma solução elétrica compacta dentro da rotina.",
    copyLine: "Uma solução elétrica para resolver deslocamentos curtos.", audience: "Para quem procura praticidade, motor de 800 W e até 25 km de autonomia com dados para decidir a compra.",
    highlights: ["Motor 800 W", "Até 25 km de autonomia", "Painel digital", "Cesta dianteira"],
    specs: [{ label: "Motor", value: "Elétrico Brushless" }, { label: "Potência", value: "800 W" }, { label: "Velocidade", value: "Até 32 km/h" }, { label: "Autonomia", value: "Até 25 km" }, { label: "Bateria", value: "Chumbo ácido" }, { label: "Freio dianteiro", value: "Disco hidráulico" }],
  }),
  makeMoto({
    id: "pt2xs", name: "PT2XS", category: "Mobilidade elétrica", price: "R$ 7.290,00", image: "/manus-storage/pt2xs_ded863bd.webp", source: "https://www.shineray.com.br/produto/pt2xs/",
    description: "A PT2XS amplia a ideia de micromobilidade com uma proposta urbana e elétrica para quem quer fazer mais com menos esforço.",
    copyLine: "Mais força e autonomia para ir além do trajeto curto.", audience: "Para quem quer motor de 1.000 W, bateria removível e até 30 km de autonomia com atendimento próximo.",
    highlights: ["Motor 1.000 W", "Até 30 km de autonomia", "Bateria removível", "Freios a disco"],
    specs: [{ label: "Motor", value: "Elétrico Brushless" }, { label: "Potência", value: "1.000 W" }, { label: "Velocidade", value: "Até 32 km/h" }, { label: "Autonomia", value: "Até 30 km" }, { label: "Bateria", value: "Íon-lítio 48 V 15 Ah" }, { label: "Carga máxima", value: "80 kg" }],
  }),
];

const additionalRawMotos: Moto[] = [
  makeMoto({ id: "sbm-400ss", brand: "SBM", name: "SBM 400SS", category: "Trail / 378 cc", engine: "378 cc", price: "R$ 37.490,00", image: additionalHeroImages["sbm-400ss"], source: "https://www.shineray.com.br/produto/sbm-400ss-2/", description: "Uma trail de alta presença para quem quer levar tecnologia, controle e espaço para além do asfalto.", copyLine: "Tecnologia para transformar a estrada em possibilidade.", audience: "Para quem quer ABS de duplo canal, painel TFT, três baús e um conjunto pronto para viagens.", highlights: ["Motor bicilíndrico", "45,5 CV", "ABS de duplo canal", "Três baús de fábrica"] }),
  makeMoto({ id: "sbm-600v", brand: "SBM", name: "SBM 600V", category: "Cruiser / 562 cc", engine: "561,9 cc", price: "R$ 51.990,00", image: additionalHeroImages["sbm-600v"], source: "https://www.shineray.com.br/produto/sbm-600v/", description: "Uma cruiser de presença marcante para quem procura força, conforto e tecnologia em cada detalhe.", copyLine: "Presença de quatro cilindros para ir mais longe.", audience: "Para quem quer motor V4, controle de tração, painel TFT e duplo disco dianteiro.", highlights: ["Motor V4", "68,7 CV", "Controle de tração", "ABS de duplo canal"] }),
  makeMoto({ id: "sbm-250t", brand: "SBM", name: "SBM 250T", category: "Trail / 249 cc", engine: "249 cc", price: "R$ 24.990,00", image: additionalHeroImages["sbm-250t"], source: "https://www.shineray.com.br/produto/sbm-250t/", description: "Uma trail versátil para quem quer alternar entre a cidade, a estrada e os caminhos que aparecem no meio.", copyLine: "Mais liberdade para escolher o próximo trecho.", audience: "Para quem quer seis marchas, ABS de duplo canal e suspensão preparada para diferentes terrenos.", highlights: ["249 cc", "6 marchas", "ABS de duplo canal", "Garfo invertido"] }),
  makeMoto({ id: "denver", brand: "SBM", name: "DENVER", category: "Cruiser / 249 cc", engine: "248,92 cc", price: "R$ 25.490,00", image: additionalHeroImages.denver, source: "https://www.shineray.com.br/produto/denver/", description: "A DENVER combina desenho clássico, motor em V e conforto para quem valoriza cada quilômetro da viagem.", copyLine: "Conforto e personalidade para viver a estrada.", audience: "Para quem quer bicilíndrica em V, ABS de dois canais e uma posição de pilotagem mais relaxada.", highlights: ["Motor em V", "19 CV", "ABS de dois canais", "Full LED"] }),
  makeMoto({ id: "sbm-600", brand: "SBM", name: "SBM 600", category: "Cruiser / 554 cc", engine: "554 cc", price: "R$ 37.990,00", image: additionalHeroImages["sbm-600"], source: "https://www.shineray.com.br/produto/sbm-600/", description: "Uma cruiser de 554 cc para quem quer mais conforto, força e presença em viagens longas.", copyLine: "Força constante para percorrer mais.", audience: "Para quem busca bicilíndrica, transmissão por correia, ABS e controle de tração.", highlights: ["554 cc", "56,1 CV", "Transmissão por correia", "Controle de tração"] }),
  makeMoto({ id: "sbm-600t", brand: "SBM", name: "SBM 600T", category: "Trail / 554 cc", engine: "554 cc", price: "R$ 47.490,00", image: additionalHeroImages["sbm-600t"], source: "https://www.shineray.com.br/produto/sbm-600t/", description: "Uma trail de 600 cc feita para ir além do asfalto com suspensão Marzocchi, tecnologia e conforto.", copyLine: "Feita para transformar cada caminho em aventura.", audience: "Para quem quer painel TFT de 7”, freios Brembo, modos de condução e suspensão Marzocchi.", highlights: ["554 cc", "Suspensão Marzocchi", "Freios Brembo", "Painel TFT de 7”"] }),
  makeMoto({ id: "sbm-600rc", brand: "SBM", name: "SBM 600RC", category: "Sport / 600 cc", engine: "600 cc", price: "R$ 52.490,00", image: additionalHeroImages["sbm-600rc"], source: "https://www.shineray.com.br/produto/sbm-600rc/", description: "Uma esportiva de quatro cilindros para quem quer respostas rápidas, presença e controle quando o ritmo aumenta.", copyLine: "Desempenho para pilotar com mais intensidade.", audience: "Para quem procura 88,4 CV, duplo disco dianteiro, ABS e painel TFT com conectividade.", highlights: ["4 cilindros", "88,4 CV", "Duplo disco dianteiro", "Painel TFT"] }),
  makeMoto({ id: "sbm-400rr", brand: "SBM", name: "SBM 400RR", category: "Sport / 400 cc", engine: "400 cc", price: "R$ 44.990,00", image: additionalHeroImages["sbm-400rr"], source: "https://www.shineray.com.br/produto/sbm-400rr/", description: "Uma esportiva de quatro cilindros criada para quem quer alto desempenho, adrenalina e precisão sobre duas rodas.", copyLine: "A esportiva para quem quer sentir a resposta.", audience: "Para quem quer quatro cilindros, ABS de duplo canal e uma ciclística firme para pilotar com intenção.", highlights: ["4 cilindros", "400 cc", "ABS de duplo canal", "Garfo invertido"] }),
  makeMoto({ id: "iron", brand: "SBM", name: "IRON", category: "Cruiser / 250 cc", engine: "249,60 cc", price: "R$ 21.990,00", image: additionalHeroImages.iron, source: "https://www.shineray.com.br/produto/iron/", description: "A IRON combina design sofisticado, motor de 250 cc e uma postura cruiser feita para enfrentar a estrada.", copyLine: "Estilo sofisticado para conquistar novos caminhos.", audience: "Para quem quer motor de 249,60 cc, ABS de dois canais e uma linguagem cruiser marcante.", highlights: ["249,60 cc", "27,67 CV", "ABS de dois canais", "Full LED"] }),
  makeMoto({ id: "titanium", brand: "SBM", name: "TITANIUM", category: "Cruiser / 249 cc", engine: "248,92 cc", price: "R$ 25.490,00", image: additionalHeroImages.titanium, source: "https://www.shineray.com.br/produto/titanium/", description: "A TITANIUM coloca motor em V, design marcante e desempenho equilibrado no mesmo capítulo.", copyLine: "Uma cruiser com assinatura própria.", audience: "Para quem quer bicilíndrica em V, ABS de dois canais e uma experiência urbana com presença.", highlights: ["Motor em V", "19 CV", "ABS de dois canais", "Painel digital"] }),
  makeMoto({ id: "storm-200-efi", brand: "SBM", name: "STORM 200 EFI", category: "Crossover / 198 cc", engine: "198,1 cc", price: "R$ 21.590,00", image: additionalHeroImages["storm-200-efi"], source: "https://www.shineray.com.br/produto/storm-200/", description: "A STORM 200 EFI combina desenho crossover, injeção eletrônica e segurança para encarar cidade e estrada.", copyLine: "Mais potência e controle para mudar de rota.", audience: "Para quem quer 20,4 CV, ABS de dois canais e suspensão invertida em uma crossover versátil.", highlights: ["Injeção eletrônica", "20,4 CV", "ABS de duplo canal", "Garfo invertido"] }),
];

const excludedNonCombustionIds = new Set(["urban-lite", "sh3", "sh4", "se1", "se2", "she-s", "ptxs", "pt-stand", "pt4-pro", "ptxr", "pt1s", "pt2xs"]);
const allRawMotos = [...rawMotos, ...additionalRawMotos];
const combustionMotos = allRawMotos.filter((moto) => !excludedNonCombustionIds.has(moto.id) && !["Elétrica", "Mobilidade elétrica", "Scooter elétrica"].some((term) => moto.category.includes(term)));
const mayPriceById: Record<string, string> = {
  "free-150-efi": "R$ 14.987,00",
  "jet-50": "R$ 12.457,00",
  "jet-125": "R$ 13.487,00",
  "rio-125-efi": "R$ 14.857,00",
  "jef-150": "R$ 16.477,00",
  "shi-170": "R$ 14.987,00",
  "shi-175": "R$ 17.487,00",
  "urban-150-efi": "R$ 22.987,00",
  "storm-200-efi": "R$ 23.987,00",
  "shi-250": "R$ 24.287,00",
  "iron": "R$ 24.777,00",
  "titanium": "R$ 28.277,00",
  "sbm-250s": "R$ 24.787,00",
  "sbm-250t": "R$ 26.287,00",
  "sbm-400s": "R$ 34.787,00",
  "sbm-400ss": "R$ 38.787,00",
  "sbm-600t": "R$ 48.787,00",
  "sbm-600v": "R$ 53.287,00",
  "sbm-600rc": "R$ 53.787,00",
  "sbm-600": "R$ 39.287,00",
};
const firstMoto = combustionMotos.find((moto) => moto.id === "shi-250") ?? combustionMotos[0];
export const motos: Moto[] = [firstMoto, ...combustionMotos.filter((moto) => moto.id !== firstMoto.id)].map((moto) => ({
  ...moto,
  price: mayPriceById[moto.id] ?? moto.price,
}));
export const coverMoto = motos[0];
