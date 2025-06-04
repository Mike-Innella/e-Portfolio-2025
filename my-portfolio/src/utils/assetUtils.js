/**
 * Utility functions for properly handling assets (images, etc.) in Vite
 * with Vercel deployment compatibility
 */

/**
 * Safely converts a relative asset path to an absolute URL using Vite's import.meta.url
 * This ensures assets are correctly processed by Vite's build system and work on Vercel
 * 
 * @param {string} relativePath - Relative path to the asset (e.g., '../assets/image.png')
 * @returns {string} - The absolute URL to the asset or empty string if path is invalid
 */
export function getAssetUrl(relativePath) {
  // Safety check to avoid 'undefined' being passed to URL constructor
  if (!relativePath) return '';
  
  try {
    return new URL(relativePath, import.meta.url).href;
  } catch (error) {
    console.error('Error creating asset URL:', error);
    return ''; // Return empty string instead of undefined
  }
}

/**
 * Helper function to ensure case-sensitive asset paths
 * Useful for dynamic imports where the path is constructed at runtime
 * 
 * @param {string} filename - The filename to ensure case sensitivity for 
 * @param {string} directory - Optional directory prefix (defaults to '../assets/')
 * @returns {string} - The properly formatted asset URL or empty string if invalid
 */
export function getAssetPath(filename, directory = '../assets/') {
  // Safety check to avoid invalid paths
  if (!filename) return '';
  
  try {
    // Use the new URL syntax for Vite compatibility
    return new URL(`${directory}${filename}`, import.meta.url).href;
  } catch (error) {
    console.error('Error creating asset path:', error);
    return ''; // Return empty string instead of undefined
  }
}

/**
 * Utility to safely handle various types of image sources
 * Works with imported assets, URL strings, and relative paths
 * 
 * @param {any} source - The image source (imported asset, URL string, or relative path)
 * @returns {string} - A valid image URL or empty string if invalid
 */
export function getSafeImageUrl(source) {
  // Already an imported Vite asset (object with href)
  if (source && typeof source === 'object' && source.href) {
    return source.href;
  }
  
  // String URL or path
  if (typeof source === 'string') {
    // Absolute URL (http, https, data)
    if (source.match(/^(https?:|data:|\/)/)) {
      return source;
    }
    
    // Relative path
    if (source.startsWith('../') || source.startsWith('./')) {
      return getAssetUrl(source);
    }
    
    // Assume asset filename
    return getAssetPath(source);
  }
  
  // Fallback for unknown formats
  return '';
}
