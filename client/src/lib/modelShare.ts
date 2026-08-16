export function buildModelShareUrl(baseHref: string, modelId: string, colorId?: string | null) {
  const shareUrl = new URL(baseHref);
  shareUrl.searchParams.set("mode", "book");
  shareUrl.searchParams.set("model", modelId);
  if (colorId) shareUrl.searchParams.set("color", colorId);
  return shareUrl.toString();
}
