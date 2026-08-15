/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 *
 * O catálogo não trata galeria editorial como giro 360º. Este manifesto
 * permanecerá vazio até receber sequências oficiais completas, ordenadas por
 * ângulo e verificadas visualmente contra o configurador da fabricante.
 */
const urban150EfiOfficialFrames = Array.from(
  { length: 19 },
  (_, index) => `https://www.shineray.com.br/wp-content/uploads/2026/04/URBAN-150_${String(index + 1).padStart(2, "0")}.webp`,
);

/**
 * O widget oficial da JET 125 declara `data-main-image-url="NEW-JET-1.webp"`,
 * `data-image-url-format="NEW-JET-x.webp"` e `data-total-frames="24"`.
 * A sequência é construída diretamente desse contrato da fabricante.
 */
const jet125OfficialFrames = Array.from(
  { length: 24 },
  (_, index) => `https://www.shineray.com.br/wp-content/uploads/2026/02/NEW-JET-${index + 1}.webp`,
);

/**
 * A fonte oficial expôs `data-total-frames="19"` e o padrão
 * `URBAN-150_xx.webp` no próprio widget de giro. Não há parâmetro de cor no
 * payload, por isso esta única sequência permanece associada ao modelo — nunca
 * às galerias editoriais ou às variações estáticas de acabamento.
 */
export const official360Frames: Record<string, string[]> = {
  "jet-125": jet125OfficialFrames,
  "urban-150-efi": urban150EfiOfficialFrames,
};

/**
 * Contrato futuro para giro fotográfico real. A lista deve conter somente
 * frames angulares oficiais, consecutivos e do mesmo acabamento.
 */
export type Official360Sequence = {
  frames: string[];
  source: string;
};

/**
 * Contrato futuro para um arquivo 3D real (GLB/GLTF) autorizado. Não há
 * modelos cadastrados enquanto a fabricante não expuser um asset verificável.
 */
export type Official3DModel = {
  modelUrl: string;
  source: string;
  poster?: string;
  environment?: string;
  initialOrbit?: string;
  cameraTarget?: string;
};

export const official360Sequences: Record<string, Official360Sequence> = {
  "jet-125": {
    frames: jet125OfficialFrames,
    source: "https://www.shineray.com.br/produto/jet-125/",
  },
  "urban-150-efi": {
    frames: urban150EfiOfficialFrames,
    source: "https://www.shineray.com.br/produto/urban-150-efi/",
  },
};
export const official3DModels: Record<string, Official3DModel> = {};

export const official360SourceUrls: Record<string, string> = {
  "jet-125": "https://www.shineray.com.br/produto/jet-125/",
  "jef-150": "https://www.shineray.com.br/produto/jef-150/",
  "urban-lite": "https://www.shineray.com.br/produto/urban-lite/",
  "urban-150-efi": "https://www.shineray.com.br/produto/urban-150-efi/",
  "shi-175": "https://www.shineray.com.br/produto/shi-175/",
  "shi-170": "https://www.shineray.com.br/produto/shi-170/",
  "shi-175s-efi": "https://www.shineray.com.br/produto/shi-175s-efi/",
  "shi-400sc": "https://www.shineray.com.br/produto/shi-400sc/",
  "sbm-400s": "https://www.shineray.com.br/produto/sbm-400/",
  "sbm-400ss": "https://www.shineray.com.br/produto/sbm-400ss-2/",
  "sbm-600v": "https://www.shineray.com.br/produto/sbm-600v/",
  "sbm-250t": "https://www.shineray.com.br/produto/sbm-250t/",
  "sbm-600": "https://www.shineray.com.br/produto/sbm-600/",
  "sbm-600t": "https://www.shineray.com.br/produto/sbm-600t/",
  "sbm-600rc": "https://www.shineray.com.br/produto/sbm-600rc/",
  "sbm-400rr": "https://www.shineray.com.br/produto/sbm-400rr/",
  iron: "https://www.shineray.com.br/produto/iron/",
  titanium: "https://www.shineray.com.br/produto/titanium/",
  "storm-200-efi": "https://www.shineray.com.br/produto/storm-200/",
};
