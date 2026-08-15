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
 * Sequência oficial da JET 125 enviada pelo usuário e validada visualmente.
 * São 19 PNGs consecutivos, preservados no armazenamento do catálogo para
 * não depender da disponibilidade temporária do host da fabricante. O lote
 * mostra o acabamento roxo; por isso permanece associado ao modelo, sem
 * alegar correspondência com o hero estático de outra cor.
 */
const jet125OfficialFrames = [
  "/manus-storage/frame_01_f37dc6ff.png",
  "/manus-storage/frame_02_58d8dfa5.png",
  "/manus-storage/frame_03_b3ae9151.png",
  "/manus-storage/frame_04_60555d47.png",
  "/manus-storage/frame_05_19a86e0e.png",
  "/manus-storage/frame_06_2de47699.png",
  "/manus-storage/frame_07_b9d6750a.png",
  "/manus-storage/frame_08_2961c60b.png",
  "/manus-storage/frame_09_93bcf849.png",
  "/manus-storage/frame_10_aa2b03f6.png",
  "/manus-storage/frame_11_cbc04f54.png",
  "/manus-storage/frame_12_f6b0dfac.png",
  "/manus-storage/frame_13_60caad67.png",
  "/manus-storage/frame_14_3eda6367.png",
  "/manus-storage/frame_15_275385fa.png",
  "/manus-storage/frame_16_ed450389.png",
  "/manus-storage/frame_17_16c89289.png",
  "/manus-storage/frame_18_184dc7f2.png",
  "/manus-storage/frame_19_3eaf5532.png",
];

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
