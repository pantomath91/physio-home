'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

const FallbackImage = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  fill = false,
  sizes,
  priority = false,
}: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default FallbackImage; 