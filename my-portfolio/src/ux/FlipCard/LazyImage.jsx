import React from 'react';
import { getSafeImageUrl } from '../../utils/assetUtils';

// Simple component to use with React.lazy for loading heavy images
const LazyImage = ({ src, alt, className }) => {
  // Use our enhanced utility to safely handle all types of image sources
  // This prevents 'undefined' URLs and provides fallbacks
  const imageSrc = getSafeImageUrl(src);
  
  // Don't render anything if we couldn't generate a valid source URL
  if (!imageSrc) {
    console.warn('Invalid image source provided to LazyImage:', src);
    return <div className={`${className || ""} bg-gray-200 dark:bg-gray-700 rounded-full`}></div>;
  }
    
  return (
    <img
      src={imageSrc}
      alt={alt || "Image"}
      className={className || ""}
      loading="lazy"
    />
  );
};

export default LazyImage;
