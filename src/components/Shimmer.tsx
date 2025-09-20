import React from 'react';

interface ShimmerProps {
  className?: string;
  children?: React.ReactNode;
}

const Shimmer: React.FC<ShimmerProps> = ({ className = '', children }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
};

// Shimmer skeleton components for different content types
export const PackageCardShimmer: React.FC = () => {
  return (
    <div className="relative rounded-2xl shadow-lg overflow-hidden bg-white">
      <div className="p-8">
        {/* Badge shimmer */}
        <div className="absolute top-4 right-4">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>
        
        {/* Title shimmer */}
        <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
        
        {/* Description shimmer */}
        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mb-8"></div>
        
        {/* Price shimmer */}
        <div className="h-10 w-24 bg-gray-200 rounded mb-8"></div>
        
        {/* Features shimmer */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-start">
              <div className="h-6 w-6 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="ml-3 flex-1">
                <div className="h-4 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Button shimmer */}
        <div className="mt-8 h-10 w-full bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export const HighlightCardShimmer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8 text-center">
        {/* Icon shimmer */}
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
        </div>
        
        {/* Title shimmer */}
        <div className="h-8 w-3/4 bg-gray-200 rounded mx-auto mb-4"></div>
        
        {/* Price section shimmer */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="h-10 w-24 bg-gray-200 rounded"></div>
          <div className="text-left">
            <div className="h-4 w-16 bg-gray-200 rounded mb-1"></div>
            <div className="h-4 w-12 bg-gray-200 rounded"></div>
          </div>
        </div>
        
        {/* Description shimmer */}
        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded mx-auto mb-6"></div>
        
        {/* Button shimmer */}
        <div className="h-12 w-48 bg-gray-200 rounded-lg mx-auto"></div>
      </div>
    </div>
  );
};

export const PricingSummaryShimmer: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Title shimmer */}
      <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-6"></div>
      
      {/* Grid shimmer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 text-center">
            <div className="h-10 w-20 bg-gray-200 rounded mx-auto mb-2"></div>
            <div className="h-6 w-24 bg-gray-200 rounded mx-auto mb-1"></div>
            <div className="h-4 w-16 bg-gray-200 rounded mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ModalShimmer: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      {/* Header shimmer */}
      <div className="flex items-center mb-6">
        <div className="h-10 w-10 bg-gray-200 rounded-full mr-4"></div>
        <div className="h-6 w-48 bg-gray-200 rounded"></div>
      </div>
      
      {/* Form fields shimmer */}
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
      
      {/* Buttons shimmer */}
      <div className="mt-6 flex gap-3">
        <div className="h-10 w-32 bg-gray-200 rounded"></div>
        <div className="h-10 w-40 bg-gray-200 rounded"></div>
        <div className="h-10 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export const ImageShimmer: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-gray-200 animate-pulse ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

export const ImageGridShimmer: React.FC = () => {
  return (
    <div className="flex flex-row gap-x-16 max-w-4xl lg:mx-0 lg:max-w-none justify-center">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col p-2">
          <ImageShimmer className="h-80 w-80 rounded-2xl" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
