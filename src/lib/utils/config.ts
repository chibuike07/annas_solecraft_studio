/**
 * Application configuration constants
 */

// Production deployment URL
export const DEPLOYED_ORIGIN = "https://princ.github.io";

// Base path for the application
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Full application URL (origin + base path)
export const APP_URL = `${DEPLOYED_ORIGIN}${BASE_PATH}`;

/**
 * Build absolute image URL for external usage (WhatsApp, emails, etc.)
 * Ensures images are accessible from any external source
 */
export const getAbsoluteImageUrl = (imagePath: string): string => {
  if (typeof imagePath !== "string" || !imagePath.startsWith("/")) {
    return "";
  }
  return `${APP_URL}${imagePath}`;
};

/**
 * Build product detail URL for external sharing
 * Used in WhatsApp messages and social sharing
 */
export const getProductDetailUrl = (productId: string): string => {
  if (typeof productId !== "string" || !productId.trim()) {
    return APP_URL;
  }
  return `${APP_URL}/product/${encodeURIComponent(productId.trim())}`;
};

/**
 * Build product image URL with absolute path
 * Used in og:image and WhatsApp preview
 */
export const getProductImageUrl = (imagePath: string): string => {
  return getAbsoluteImageUrl(imagePath);
};
