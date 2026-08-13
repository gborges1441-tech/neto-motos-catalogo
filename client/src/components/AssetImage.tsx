// Style reminder: image states keep the archive tactile and calm when an official asset is slow, missing or temporarily unavailable.
import { useEffect, useState } from "react";

type AssetImageProps = React.ComponentPropsWithoutRef<"img"> & {
  fallbackLabel?: string;
};

export function AssetImage({ fallbackLabel = "Imagem indisponível", className = "", alt = "", onError, ...props }: AssetImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
  }, [props.src]);

  if (failed) {
    return (
      <div className={`asset-image-fallback ${className}`} role="img" aria-label={alt || fallbackLabel} />
    );
  }

  return (
    <img
      {...props}
      alt={alt}
      className={`asset-image ${loaded ? "asset-image--loaded" : "asset-image--loading"} ${className}`}
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
