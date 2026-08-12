// Style reminder: data feeds the Arquivo de Performance direction; every chapter pairs factual guardrails with a human, conversion-oriented narrative.

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
  copyLine: string;
  audience: string;
  highlights: string[];
  images: MotoImage[];
  specs: Array<{ label: string; value: string }>;
  hotspots: MotoHotspot[];
  source: string;
  sourceLabel: string;
};

const catalog = {
  jef170: "/manus-storage/jef-170_c2632265.webp",
  shi400sc: "/manus-storage/shi-400sc_4fa980b9.webp",
  shi175: "/manus-storage/shi-175_50af884f.webp",
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
  jet125Efi: "/manus-storage/jet-125-efi_73dd11d6.webp",
  jef150: "/manus-storage/jef-150_1b66f905.webp",
  phoenix: "/manus-storage/phoenix-s_850d0efc.webp",
  se2: "/manus-storage/se2_369cebae.webp",
  se1: "/manus-storage/se1_67428dd5.webp",
  sheS: "/manus-storage/she-s_22c756da.webp",
};

const detail = {
  shi250Hero: "/manus-storage/shi-250-01_49314458.webp",
  shi250Gallery: "/manus-storage/shi-250-05_da2c62f1.webp",
  shi250Detail: "/manus-storage/shi-250-08_25bdff28.webp",
  shi250Panel: "/manus-storage/shi-250-panel_2f379e5e.webp",
  shi175sHero: "/manus-storage/shi-175s-01_e529b115.webp",
  shi175sGallery: "/manus-storage/shi-175s-04_06baa5a6.webp",
  shi175sDetail: "/manus-storage/shi-175s-08_48bfa8cf.webp",
  jef170Hero: "/manus-storage/jef-170-01_9802b6ac.webp",
  jef170Gallery: "/manus-storage/jef-170-04_58e8e21a.webp",
  jef170Detail: "/manus-storage/jef-170-08_636ae066.webp",
  urbanHero: "/manus-storage/urban-lite-01_590efdb7.webp",
  urbanGallery: "/manus-storage/urban-lite-04_05d012f1.webp",
  urbanDetail: "/manus-storage/urban-lite-08_39b3a83a.webp",
};

const genericSpecs = [
  { label: "Ficha técnica", value: "Consultar ficha vigente" },
  { label: "Disponibilidade", value: "Consultar Neto Motos" },
  { label: "Condições", value: "Sob consulta" },
  { label: "Cores", value: "Consultar disponibilidade" },
];

function images(name: string, src: string, extra: MotoImage[] = []): MotoImage[] {
  return [
    { src, label: "Foto oficial", alt: `${name} em imagem oficial da Shineray` },
    ...extra,
  ];
}

function hotspots(name: string, primary: string, secondary: string): MotoHotspot[] {
  return [
    { id: "identity", label: "Design", detail: `Veja de perto a presença visual da ${name}.`, value: primary, x: 53, y: 31 },
    { id: "choice", label: "Escolha", detail: "Quer saber se este modelo combina com a sua rotina? O Neto explica sem enrolação.", value: secondary, x: 69, y: 66 },
  ];
}

function makeMoto({ id, name, category, price, description, copyLine, audience, image, source, highlights = ["Linha oficial Shineray", "Preço de referência", "Disponibilidade sob consulta", "Atendimento direto"], specs = genericSpecs, extraImages = [], customHotspots }: {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  copyLine: string;
  audience: string;
  image: string;
  source: string;
  highlights?: string[];
  specs?: Array<{ label: string; value: string }>;
  extraImages?: MotoImage[];
  customHotspots?: MotoHotspot[];
}): Moto {
  return {
    id,
    name,
    eyebrow: `CAPÍTULO / ${category.toUpperCase()}`,
    category,
    price,
    priceNote: "Preço publicado pela fabricante como referência. Consulte estoque, cores, frete, documentação e condições com o Neto.",
    description,
    copyLine,
    audience,
    highlights,
    images: images(name, image, extraImages),
    specs,
    hotspots: customHotspots ?? hotspots(name, category, "Conversa direta"),
    source,
    sourceLabel: "Fonte de produto e imagem: Shineray do Brasil",
  };
}

const rawMotos: Moto[] = [
  makeMoto({
    id: "jef-170", name: "JEF 170", category: "Street / 170 cc", price: "R$ 15.390,00", image: catalog.jef170, source: "https://www.shineray.com.br/produto/jef-170/",
    description: "A cidade não precisa ser previsível. A JEF 170 chega com atitude urbana e presença suficiente para transformar o caminho de todos os dias em uma escolha com assinatura.",
    copyLine: "Para quem quer que cada deslocamento diga alguma coisa.", audience: "Sua rotina pede uma moto com postura, não apenas um meio de chegar.",
    highlights: ["Painel digital", "Rodas 17”", "Freio dianteiro a disco", "Monoshock traseiro"],
    specs: [{ label: "Cilindrada", value: "Consultar ficha vigente" }, { label: "Painel", value: "Digital" }, { label: "Rodas", value: "17”" }, { label: "Freio dianteiro", value: "Disco" }, { label: "Suspensão traseira", value: "Monoshock" }, { label: "Disponibilidade", value: "Consultar Neto Motos" }],
    extraImages: [{ src: detail.jef170Hero, label: "Ângulo editorial", alt: "Shineray JEF 170 em foto oficial de produto" }, { src: detail.jef170Gallery, label: "Detalhes", alt: "Detalhe oficial da Shineray JEF 170" }, { src: detail.jef170Detail, label: "Acabamento", alt: "Acabamento oficial da Shineray JEF 170" }],
  }),
  makeMoto({
    id: "shi-400sc", name: "SHI 400SC", category: "Motocicleta / linha SHI", price: "R$ 24.990,00", image: catalog.shi400sc, source: "https://www.shineray.com.br/produto/shi-400sc/",
    description: "Há escolhas que não precisam levantar a voz. A SHI 400SC tem a presença de quem já sabe o que procura e quer uma experiência mais marcante sobre duas rodas.",
    copyLine: "Quando a escolha precisa ter mais presença.", audience: "Para quem quer subir de categoria sem abrir mão de personalidade.",
  }),
  makeMoto({
    id: "shi-175", name: "SHI 175", category: "Trail / 175 cc", price: "R$ 16.490,00", image: catalog.shi175, source: "https://www.shineray.com.br/produto/shi-175/",
    description: "Nem todo caminho termina no asfalto. A SHI 175 foi colocada aqui para quem gosta de manter uma rota aberta — na cidade, na estrada e no próximo desvio.",
    copyLine: "Mais liberdade para o caminho que ainda não existe.", audience: "Para quem quer uma moto que acompanhe planos que mudam de direção.",
  }),
  makeMoto({
    id: "shi-170", name: "SHI 170", category: "Trail / 170 cc", price: "R$ 13.490,00", image: catalog.shi170, source: "https://www.shineray.com.br/produto/shi-170/",
    description: "A SHI 170 foi feita para quem prefere uma escolha versátil, com atitude de trail e espaço para viver a cidade de outro ângulo.",
    copyLine: "A cidade é só o começo do seu próximo caminho.", audience: "Para quem quer praticidade hoje e liberdade para ir além amanhã.",
  }),
  makeMoto({
    id: "urban-lite", name: "URBAN LITE", category: "Scooter / 150 cc", price: "R$ 12.490,00", image: catalog.urbanLite, source: "https://www.shineray.com.br/produto/urban-lite/",
    description: "A rotina pede agilidade. A URBAN LITE entra em cena para deixar os pequenos deslocamentos mais simples, mais leves e mais seus.",
    copyLine: "Sua rotina merece menos complicação.", audience: "Para quem quer praticidade urbana sem abrir mão de estilo.",
    highlights: ["CVT automático", "Painel digital", "Guarda-volumes", "Full LED"],
    specs: [{ label: "Cilindrada", value: "149,48 cc" }, { label: "Potência", value: "13,5 cv / 7.500 rpm" }, { label: "Torque", value: "11 N.m / 5.000 rpm" }, { label: "Câmbio", value: "CVT automático" }, { label: "Tanque", value: "8 L" }, { label: "Freios", value: "Disco / tambor; CBS" }],
    extraImages: [{ src: detail.urbanHero, label: "Ângulo editorial", alt: "Shineray URBAN LITE em foto oficial de produto" }, { src: detail.urbanGallery, label: "Detalhes", alt: "Detalhe oficial da Shineray URBAN LITE" }, { src: detail.urbanDetail, label: "Acabamento", alt: "Acabamento oficial da Shineray URBAN LITE" }],
  }),
  makeMoto({
    id: "jet-50", name: "JET 50", category: "Ciclomotor / urbano", price: "R$ 11.090,00", image: catalog.jet50, source: "https://www.shineray.com.br/produto/jet-50/",
    description: "A distância pode ser curta. A vontade de viver a cidade do seu jeito, não. A JET 50 é uma porta de entrada para mais autonomia na rotina.",
    copyLine: "Para começar a se mover do seu jeito.", audience: "Uma escolha objetiva para quem quer ganhar mobilidade sem complicar.",
  }),
  makeMoto({
    id: "jet-125", name: "JET 125", category: "Scooter / 125 cc", price: "R$ 11.490,00", image: catalog.jet125, source: "https://www.shineray.com.br/produto/jet-125/",
    description: "Entre o trabalho, a casa e tudo o que acontece no meio, a JET 125 coloca praticidade no centro da sua rotina.",
    copyLine: "O caminho diário pode ser mais simples.", audience: "Para quem quer resolver a cidade com leveza e presença.",
    highlights: ["Painel digital", "Full LED", "Porta USB", "Guarda-volumes"],
  }),
  makeMoto({
    id: "shi-250", name: "SHI 250", category: "Trail / 250 cc", price: "R$ 21.490,00", image: detail.shi250Hero, source: "https://www.shineray.com.br/produto/shi-250/",
    description: "Uma trail de 250 cc para quem procura versatilidade entre o asfalto e os caminhos que começam depois dele.",
    copyLine: "Tem moto que leva você. Tem moto que abre caminho.", audience: "Para quem não quer escolher entre a cidade e o que existe depois dela.",
    highlights: ["Motor 249,9 cc", "6 marchas", "Full LED + DRL", "Freios a disco nas duas rodas"],
    specs: [{ label: "Cilindrada", value: "249,9 cc" }, { label: "Potência", value: "19,3 CV / 8.000 rpm" }, { label: "Torque", value: "18 N.m / 6.000 rpm" }, { label: "Câmbio", value: "6 marchas" }, { label: "Freios", value: "Disco dianteiro e traseiro" }, { label: "Suspensão", value: "Invertida / monoshock" }, { label: "Rodas", value: "Raiadas" }, { label: "Iluminação", value: "Full LED + DRL" }],
    extraImages: [{ src: detail.shi250Gallery, label: "Ângulo editorial", alt: "Shineray SHI 250 em vista lateral oficial" }, { src: detail.shi250Detail, label: "Detalhes", alt: "Detalhe oficial da Shineray SHI 250" }, { src: detail.shi250Panel, label: "Painel", alt: "Painel digital oficial da Shineray SHI 250" }],
    customHotspots: [{ id: "motor", label: "Motor", detail: "Monocilíndrico, 4T, 2 válvulas, SOHC balanceado.", value: "249,9 cc", x: 39, y: 56 }, { id: "freio", label: "Freios", detail: "Conjunto a disco nas rodas dianteira e traseira.", value: "Disco / disco", x: 69, y: 69 }, { id: "painel", label: "Painel", detail: "Leitura digital de combustível, velocidade, marcha e odômetro.", value: "100% digital", x: 55, y: 27 }],
  }),
  makeMoto({
    id: "sh4", name: "SH4", category: "Scooter / urbana", price: "R$ 8.990,00", image: catalog.shi4, source: "https://www.shineray.com.br/produto/sh4/",
    description: "Uma scooter para colocar a cidade em ordem: sair, resolver, voltar e repetir — com uma escolha que cabe na sua rotina e no seu plano.",
    copyLine: "Mobilidade que entende o seu ritmo.", audience: "Para quem quer ganhar tempo sem transformar a compra em um labirinto.",
  }),
  makeMoto({
    id: "sh3", name: "SH3", category: "Scooter / urbana", price: "R$ 10.990,00", image: catalog.shi3, source: "https://www.shineray.com.br/produto/sh3/",
    description: "A SH3 traduz a ideia de praticidade em uma escolha com presença. Para entrar na rua, ganhar fluidez e fazer mais com a mesma cidade.",
    copyLine: "Pequena no esforço. Grande na rotina.", audience: "Para quem quer uma solução urbana direta e com personalidade.",
  }),
  makeMoto({
    id: "urban-150-efi", name: "URBAN 150 EFI", category: "Scooter / 150 cc", price: "R$ 20.990,00", image: catalog.urban150, source: "https://www.shineray.com.br/produto/urban-150-efi/",
    description: "Para quem espera mais da rotina urbana, a URBAN 150 EFI combina presença de scooter e uma proposta que pede espaço na sua agenda.",
    copyLine: "Mais cidade no seu controle.", audience: "Para quem quer transformar deslocamento em tempo bem aproveitado.",
  }),
  makeMoto({
    id: "250f", name: "250F", category: "Street / sport", price: "R$ 20.590,00", image: catalog.sport250, source: "https://www.shineray.com.br/produto/250f/",
    description: "A 250F tem o tipo de presença que muda a primeira impressão. Uma escolha para quem quer entrar em cena com design e intenção.",
    copyLine: "A sua próxima fase merece uma presença à altura.", audience: "Para quem quer uma motocicleta com postura esportiva e conversa direta.",
    highlights: ["250 cc", "ABS dois canais", "Full LED / DRL", "Painel digital"],
  }),
  makeMoto({
    id: "shi-175s-efi", name: "SHI 175S EFI", category: "Trail / 175 cc", price: "R$ 17.990,00", image: detail.shi175sHero, source: "https://www.shineray.com.br/produto/shi-175s-efi/",
    description: "Uma trail de presença forte, com injeção eletrônica e conjunto preparado para acompanhar a rotina com mais liberdade.",
    copyLine: "Quando a liberdade deixa de ser ideia e vira caminho.", audience: "Para quem quer uma trail pronta para os dias comuns e os planos fora da agenda.",
    highlights: ["Injeção eletrônica", "Rodas 19 / 17", "Disco nas duas rodas", "Monoshock traseiro"],
    specs: [{ label: "Cilindrada", value: "175,11 cc" }, { label: "Potência", value: "15,63 CV / 8.500 rpm" }, { label: "Torque", value: "14 N.m / 6.500 rpm" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "14,5 L" }, { label: "Freios", value: "Disco dianteiro e traseiro" }, { label: "Rodas", value: "19” / 17”" }, { label: "Suspensão", value: "Telescópica / monoshock" }],
    extraImages: [{ src: detail.shi175sGallery, label: "Ângulo editorial", alt: "Shineray SHI 175S EFI em vista lateral oficial" }, { src: detail.shi175sDetail, label: "Detalhes", alt: "Detalhe oficial da Shineray SHI 175S EFI" }],
  }),
  makeMoto({
    id: "free-150-efi", name: "FREE 150 EFI", category: "Street / 150 cc", price: "R$ 12.990,00", image: catalog.free150, source: "https://www.shineray.com.br/produto/free-150-efi/",
    description: "A FREE 150 EFI é para quem quer começar uma nova rotina com mais independência e uma escolha que faz sentido desde o primeiro contato.",
    copyLine: "Mais autonomia para fazer a vida acontecer.", audience: "Para quem está buscando a primeira moto certa — sem pressa e sem conversa complicada.",
  }),
  makeMoto({
    id: "jef-150s-efi", name: "JEF 150S EFI", category: "Street / 150 cc", price: "R$ 15.990,00", image: catalog.jef150s, source: "https://www.shineray.com.br/produto/jef-150s-efi/",
    description: "A JEF 150S EFI coloca atitude urbana em uma escolha que conversa com quem quer subir na moto e seguir o próprio ritmo.",
    copyLine: "Sua presença também pode estar no caminho.", audience: "Para quem quer uma street com personalidade e atendimento claro na hora de escolher.",
  }),
  makeMoto({
    id: "rio-125-efi", name: "RIO 125 EFI", category: "Street / 125 cc", price: "R$ 12.990,00", image: catalog.rio125, source: "https://www.shineray.com.br/produto/rio-125-efi/",
    description: "A RIO 125 EFI foi feita para entrar na vida real: aquela dos compromissos, das voltas rápidas e dos planos que merecem um pouco mais de liberdade.",
    copyLine: "A sua cidade fica diferente quando você escolhe como atravessá-la.", audience: "Para quem quer praticidade com a segurança de uma conversa transparente.",
    highlights: ["Injeção eletrônica", "Painel digital", "LED / DRL", "Disponibilidade sob consulta"],
  }),
  makeMoto({
    id: "phoenix-s-efi", name: "PHOENIX S EFI", category: "Urbana / EFI", price: "R$ 9.990,00", image: catalog.phoenixEfi, source: "https://www.shineray.com.br/produto/phoenix-s-efi/",
    description: "A PHOENIX S EFI é a escolha de quem quer reduzir a distância entre vontade e movimento — com uma proposta urbana e um próximo passo simples.",
    copyLine: "Comece por uma escolha que abre espaço.", audience: "Para quem quer mobilidade para trabalhar, estudar ou simplesmente viver mais a própria cidade.",
  }),
  makeMoto({
    id: "jet-125-efi", name: "JET 125 EFI", category: "Scooter / 125 cc", price: "R$ 13.490,00", image: catalog.jet125Efi, source: "https://www.shineray.com.br/produto/jet-125ss-efi/",
    description: "A JET 125 EFI coloca eficiência e praticidade no mesmo capítulo — para quem quer uma scooter que faça sentido antes, durante e depois da compra.",
    copyLine: "Quando praticidade também pode ter personalidade.", audience: "Para quem procura uma scooter urbana e quer decidir com informação, não com pressão.",
  }),
  makeMoto({
    id: "jef-150", name: "JEF 150", category: "Street / 150 cc", price: "R$ 14.790,00", image: catalog.jef150, source: "https://www.shineray.com.br/produto/jef-150/",
    description: "A JEF 150 é uma escolha honesta para quem quer uma street com presença, leitura simples e espaço para a vida acontecer no caminho.",
    copyLine: "A escolha certa começa quando tudo fica claro.", audience: "Para quem quer uma moto para a rotina e um atendimento para confiar.",
  }),
  makeMoto({
    id: "phoenix-s", name: "PHOENIX S", category: "Urbana / acessível", price: "R$ 8.790,00", image: catalog.phoenix, source: "https://www.shineray.com.br/produto/phoenix-s/",
    description: "A PHOENIX S é um convite para colocar mais movimento nos seus dias, com uma proposta urbana que cabe no plano e abre caminho para novas rotas.",
    copyLine: "Seu próximo capítulo pode começar agora.", audience: "Para quem quer dar o primeiro passo com clareza e atendimento próximo.",
  }),
  makeMoto({
    id: "se2", name: "SE2", category: "Elétrica", price: "R$ 16.990,00", image: catalog.se2, source: "https://www.shineray.com.br/produto/se2/",
    description: "A SE2 representa uma forma mais silenciosa de pensar a cidade: uma escolha elétrica para quem quer experimentar outra relação com o deslocamento.",
    copyLine: "Mude a forma de chegar — sem perder o prazer do caminho.", audience: "Para quem está olhando para a mobilidade elétrica com curiosidade e quer conversar antes de decidir.",
  }),
  makeMoto({
    id: "se1", name: "SE1", category: "Elétrica", price: "R$ 15.990,00", image: catalog.se1, source: "https://www.shineray.com.br/produto/se1/",
    description: "A SE1 entra para quem quer simplificar a mobilidade e começar a considerar uma escolha elétrica para a rotina urbana.",
    copyLine: "Uma nova maneira de olhar para a cidade.", audience: "Para quem quer entender se a mobilidade elétrica combina com o seu dia a dia.",
  }),
  makeMoto({
    id: "she-s", name: "SHE-S", category: "Elétrica", price: "R$ 16.490,00", image: catalog.sheS, source: "https://www.shineray.com.br/produto/she-s/",
    description: "A SHE-S traduz a mobilidade elétrica em uma presença urbana elegante, para quem quer uma escolha diferente sem abrir mão de personalidade.",
    copyLine: "O futuro também pode ter a sua assinatura.", audience: "Para quem quer explorar uma experiência elétrica com orientação humana em cada etapa.",
  }),
];

const firstMoto = rawMotos.find((moto) => moto.id === "shi-250") ?? rawMotos[0];
export const motos: Moto[] = [firstMoto, ...rawMotos.filter((moto) => moto.id !== firstMoto.id)];
export const coverMoto = motos[0];
