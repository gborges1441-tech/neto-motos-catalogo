// Style reminder: image states keep the archive tactile and calm when an official asset is slow, missing or temporarily unavailable.
import { useState } from "react";

type AssetImageProps = React.ComponentPropsWithoutRef<"img"> & {
  fallbackLabel?: string;
};

export function AssetImage({ fallbackLabel = "Imagem indisponível", className = "", alt = "", onError, ...props }: AssetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`asset-image-fallback ${className}`} role="img" aria-label={alt || fallbackLabel}>
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      alt={alt}
      className={className}
      decoding={props.decoding ?? "async"}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
    />
  );
}
