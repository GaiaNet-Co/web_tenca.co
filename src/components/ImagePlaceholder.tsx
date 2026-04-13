import React, { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackKeyword: string;
}

export default function ImagePlaceholder({ src, fallbackKeyword, alt, ...props }: Props) {
  const [hasError, setHasError] = useState(false);
  
  return (
    <img
      src={hasError ? `https://picsum.photos/seed/${fallbackKeyword}/1200/800` : src}
      alt={alt || ""}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
