// Style reminder: image states keep the archive tactile and calm when an official asset is slow, missing or temporarily unavailable.
import { useEffect, useState } from "react";
import { assetUrl } from "@/lib/assetUrl";

type AssetImageProps = React.ComponentPropsWithoutRef<"img"> & {
  fallbackLabel?: string;
};

export function AssetImage({ fallbackLabel = "Imagem indisponível", className = "", alt = "", onError, ...props }: AssetImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const resolvedSource = assetUrl(typeof props.src === "string" ? props.src : undefined);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
  }, [resolvedSource]);

  if (failed) {
    return (
      <div className={`asset-image-fallback ${className}`} role="img" aria-label={alt || fallbackLabel} />
    );
  }

  return (
    <img
      {...props}
      src={resolvedSource}
      alt={alt}
      className={`asset-image ${loaded ? "asset-image--loaded" : "asset-image--loading"} ${className}`}
      loading={props.loading ?? "lazy"}
      decoding={props.decoding ?? "async"}
      onLoad={(event) => {
        setLoaded(true);
        props.onLoad?.(event);
      }}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
    />
  );
}
