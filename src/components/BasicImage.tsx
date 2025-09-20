'use client';

import React from 'react';
import Image from 'next/image';

interface BasicImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const BasicImage: React.FC<BasicImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  quality = 85,
  sizes,
  onLoad,
  onError,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      quality={quality}
      sizes={sizes}
      className={className}
      onLoad={onLoad}
      onError={onError}
      placeholder="empty"
    />
  );
};

export default BasicImage;
