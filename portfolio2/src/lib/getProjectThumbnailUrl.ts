export const getProjectThumbnailUrl = (slug: string) =>
  `/api/og-image?slug=${encodeURIComponent(slug)}`;
