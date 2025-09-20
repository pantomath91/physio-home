'use client';
import React from 'react';
import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images }) => {
  useEffect(() => {
    // Preload critical images
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach((link) => {
        if (images.includes(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
    };
  }, [images]);

  return null;
};

export default ImagePreloader;
