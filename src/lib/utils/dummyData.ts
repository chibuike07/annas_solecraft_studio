import type {
  CategoryKey,
  ICategorySection,
  IProduct,
} from "@/components/ProductShowcase/ProductShowcase.interface";
import { getProductDetailUrl, getAbsoluteImageUrl } from "./config";

export const WHATSAPP_NUMBER = "2348121485310";

// Maximum quantity allowed per order
export const MAX_QUANTITY = 100;

/**
 * Sanitizes input to prevent XSS attacks
 * Removes dangerous characters and HTML entities
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== "string") return "";

  return (
    input
      .trim()
      // Remove any HTML tags
      .replace(/<[^>]*>/g, "")
      // Remove special characters that could be used for injection
      .replace(/[<>"'`\\]/g, "")
      // Remove control characters
      .replace(/[\x00-\x1F\x7F]/g, "")
      // Collapse multiple spaces
      .replace(/\s+/g, " ")
      .trim()
  );
};

/**
 * Validates and sanitizes quantity input
 * Ensures quantity is a positive integer within acceptable range
 */
export const validateQuantity = (quantity: unknown): number => {
  // Type check
  if (typeof quantity !== "number") {
    return 1;
  }

  // Convert to integer
  const intQuantity = Math.floor(quantity);

  // Validate range
  if (intQuantity < 1) {
    return 1;
  }

  if (intQuantity > MAX_QUANTITY) {
    return MAX_QUANTITY;
  }

  return intQuantity;
};

/**
 * Validates WhatsApp URL to prevent injection attacks
 */
export const isValidWhatsAppNumber = (number: string): boolean => {
  // WhatsApp numbers should be numeric and 10-15 digits
  return /^[0-9]{10,15}$/.test(number);
};

export const products: IProduct[] = [
  {
    id: "hot-1",
    name: "Pulse Bluetooth Speaker",
    description: "360° sound with deep bass for indoor or outdoor moments.",
    price: 28000,
    promoCode: "PULSE10",
    promoPercent: 10,
    image: "/products/pulse-speaker.svg",
    category: "hot-sale",
    badge: "Limited Drop",
  },
  {
    id: "hot-2",
    name: "Halo Wireless Headphones",
    description: "Noise cancellation with 32 hours of rich playback.",
    price: 54000,
    promoCode: "HALO15",
    promoPercent: 15,
    image: "/products/halo-headphones.svg",
    category: "hot-sale",
    badge: "Top Rated",
  },
  {
    id: "hot-3",
    name: "Glow Smart Lamp",
    description: "Warm ambient light with smart dim and timer control.",
    price: 22000,
    image: "/products/glow-lamp.svg",
    category: "hot-sale",
    badge: "New",
  },
  {
    id: "hot-4",
    name: "Fit Active Band",
    description: "Health tracking and 7-day battery for busy schedules.",
    price: 18000,
    promoCode: "FIT8",
    promoPercent: 8,
    image: "/products/fit-band.svg",
    category: "hot-sale",
  },
  {
    id: "hot-5",
    name: "Aura Insulated Bottle",
    description: "Keeps drinks cold for 20 hours or hot for 10 hours.",
    price: 14000,
    image: "/products/aura-bottle.svg",
    category: "hot-sale",
  },
  {
    id: "hot-6",
    name: "Glow Desk Hub",
    description: "Multi-port USB-C hub with fast charging support.",
    price: 19500,
    image: "/products/glow-hub.svg",
    category: "hot-sale",
  },
  {
    id: "best-1",
    name: "Zen Ergonomic Chair",
    description: "Breathable mesh with adjustable lumbar support.",
    price: 98000,
    promoCode: "ZEN12",
    promoPercent: 12,
    image: "/products/zen-chair.svg",
    category: "best-sellers",
    badge: "Best Seller",
  },
  {
    id: "best-2",
    name: "Metro Commuter Bag",
    description: "Water-resistant laptop bag with smart compartments.",
    price: 36000,
    image: "/products/metro-bag.svg",
    category: "best-sellers",
    badge: "Everyday",
  },
  {
    id: "best-3",
    name: "Luxe Smart Watch",
    description: "Sleek watch with always-on display and NFC pay.",
    price: 76000,
    promoCode: "LUXE5",
    promoPercent: 5,
    image: "/products/luxe-watch.svg",
    category: "best-sellers",
  },
  {
    id: "best-4",
    name: "Neo Performance Sneakers",
    description: "Lightweight runners for training and everyday wear.",
    price: 42000,
    image: "/products/neo-sneakers.svg",
    category: "best-sellers",
  },
  {
    id: "best-5",
    name: "Studio Tripod Stand",
    description: "Stable aluminum tripod for creators and small teams.",
    price: 27000,
    promoCode: "STUDIO9",
    promoPercent: 9,
    image: "/products/studio-tripod.svg",
    category: "best-sellers",
  },
  {
    id: "best-6",
    name: "Prime Aroma Diffuser",
    description: "Quiet diffuser with relaxing lighting moods.",
    price: 16000,
    image: "/products/aroma-diffuser.svg",
    category: "best-sellers",
  },
  {
    id: "pop-1",
    name: "Nova Portable Projector",
    description: "Mini projector with crisp 1080p support.",
    price: 88000,
    promoCode: "NOVA7",
    promoPercent: 7,
    image: "/products/nova-projector.svg",
    category: "popular",
    badge: "Popular",
  },
  {
    id: "pop-2",
    name: "Flow Coffee Grinder",
    description: "Precision grinder for rich espresso and pour-over.",
    price: 33000,
    image: "/products/flow-grinder.svg",
    category: "popular",
  },
  {
    id: "pop-3",
    name: "Vista 4K Monitor",
    description: "Ultra-sharp monitor for design and productivity.",
    price: 185000,
    image: "/products/vista-monitor.svg",
    category: "popular",
  },
  {
    id: "pop-4",
    name: "Cloud Smart Router",
    description: "High-speed mesh router with mobile control.",
    price: 45000,
    promoCode: "CLOUD6",
    promoPercent: 6,
    image: "/products/cloud-router.svg",
    category: "popular",
  },
  {
    id: "pop-5",
    name: "Echo Gaming Controller",
    description: "Responsive controller with customizable profiles.",
    price: 24000,
    image: "/products/echo-controller.svg",
    category: "popular",
  },
  {
    id: "pop-6",
    name: "Solar Power Bank",
    description: "Compact power bank with solar backup.",
    price: 21000,
    image: "/products/solar-bank.svg",
    category: "popular",
  },
  {
    id: "other-1",
    name: "Breeze Air Purifier",
    description: "Quiet purifier for cleaner air in any room.",
    price: 68000,
    image: "/products/breeze-purifier.svg",
    category: "others",
    badge: "Clean Air",
  },
  {
    id: "other-2",
    name: "Studio Desk Mat",
    description: "Premium desk mat for smooth productivity.",
    price: 8500,
    image: "/products/studio-mat.svg",
    category: "others",
  },
  {
    id: "other-3",
    name: "Orbit Wireless Charger",
    description: "Fast wireless charger with night light.",
    price: 19500,
    promoCode: "ORBIT4",
    promoPercent: 4,
    image: "/products/orbit-charger.svg",
    category: "others",
  },
  {
    id: "other-4",
    name: "Rise Standing Desk",
    description: "Electric standing desk with memory presets.",
    price: 210000,
    image: "/products/rise-desk.svg",
    category: "others",
  },
  {
    id: "other-5",
    name: "Vibe Bluetooth Keyboard",
    description: "Slim keyboard with multi-device pairing.",
    price: 23000,
    image: "/products/vibe-keyboard.svg",
    category: "others",
  },
  {
    id: "other-6",
    name: "Pulse Fitness Kit",
    description: "Resistance kit for home workouts and travel.",
    price: 17000,
    image: "/products/pulse-kit.svg",
    category: "others",
  },
];

export const categories: ICategorySection[] = [
  {
    id: "hot-sale",
    title: "Hot Sale",
    subtitle: "High-demand essentials with limited-time promos.",
    items: products.filter((product) => product.category === "hot-sale"),
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    subtitle: "Loved by our customers for performance and style.",
    items: products.filter((product) => product.category === "best-sellers"),
  },
  {
    id: "popular",
    title: "Popular",
    subtitle: "Trending picks for work, home, and lifestyle.",
    items: products.filter((product) => product.category === "popular"),
  },
  {
    id: "others",
    title: "Others",
    subtitle: "Extra finds that complete your setup.",
    items: products.filter((product) => product.category === "others"),
  },
];

export const initialVisible: Record<CategoryKey, number> = {
  "hot-sale": 4,
  "best-sellers": 4,
  popular: 4,
  others: 4,
};

export const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export const buildWhatsAppUrl = (
  product: IProduct,
  categoryTitle: string,
  quantity: number = 1,
): string => {
  // Validate WhatsApp number
  if (!isValidWhatsAppNumber(WHATSAPP_NUMBER)) {
    console.error("Invalid WhatsApp number configuration");
    return "#";
  }

  // Validate and sanitize all inputs
  const sanitizedName = sanitizeInput(product?.name || "");
  const sanitizedCategory = sanitizeInput(categoryTitle);
  const sanitizedPromoCode = product?.promoCode
    ? sanitizeInput(product.promoCode)
    : "";

  // Validate quantity
  const validatedQuantity = validateQuantity(quantity);

  // Validate price
  const price =
    typeof product?.price === "number" && product.price > 0 ? product.price : 0;

  if (price === 0) {
    console.error("Invalid product price");
    return "#";
  }

  const totalPrice = price * validatedQuantity;

  // Get product detail URL
  const productUrl =
    typeof product?.id === "string" && product.id.trim()
      ? getProductDetailUrl(product.id)
      : "";

  const message = [
    "Hello, I want to buy:",
    "",
    sanitizedName || "Product",
    `Quantity: ${validatedQuantity}`,
    `Unit Price: ${formatter.format(price)}`,
    `Total Price: ${formatter.format(totalPrice)}`,
    sanitizedCategory ? `Category: ${sanitizedCategory}` : "",
    sanitizedPromoCode ? `Promo Code: ${sanitizedPromoCode}` : "",
    typeof product?.promoPercent === "number" && product.promoPercent > 0
      ? `Discount: ${product.promoPercent}%`
      : "",
    productUrl ? `Product Link: ${productUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  // Additional validation: ensure message doesn't exceed WhatsApp limits
  const maxMessageLength = 4096;
  const finalMessage =
    message.length > maxMessageLength
      ? message.substring(0, maxMessageLength)
      : message;

  try {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
  } catch (error) {
    console.error("Error building WhatsApp URL:", error);
    return "#";
  }
};
