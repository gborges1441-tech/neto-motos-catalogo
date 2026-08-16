const MANUS_STORAGE_PREFIX = "/manus-storage/";

export function resolveAssetUrl(source: string | undefined, portable: boolean, baseUrl: string) {
  if (!source || !source.startsWith(MANUS_STORAGE_PREFIX)) return source ?? "";
  if (!portable) return source;

  const assetName = source.slice(MANUS_STORAGE_PREFIX.length);
  return `${baseUrl}assets/${assetName}`;
}

/**
 * Mantém os caminhos de storage na prévia Manus e os converte em arquivos locais
 * somente na distribuição portátil criada para GitHub Pages, Vercel ou Netlify.
 */
export function assetUrl(source?: string) {
  return resolveAssetUrl(source, import.meta.env.VITE_PORTABLE_ASSETS === "true", import.meta.env.BASE_URL);
}
