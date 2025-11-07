export function getOptimizedImageUrl(url: string, width: number, format: 'webp' | 'jpeg' = 'webp') {
  if (url.startsWith('http')) {
    // For Unsplash images
    return `${url}?q=80&w=${width}&auto=format&fit=crop${format === 'webp' ? '&fm=webp' : ''}`;
  } else {
    // For local images, ensure they're processed by Astro's image optimization
    return url;
  }
}