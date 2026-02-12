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
    name: "Jollof Rice Combo",
    description: "Classic Nigerian jollof rice with chicken and plantain.",
    price: 3500,
    promoCode: "JOLLOF10",
    promoPercent: 10,
    image: "/products/jollof-rice.svg",
    category: "hot-sale",
    badge: "Customer Favorite",
  },
  {
    id: "hot-2",
    name: "Nkwobi Deluxe",
    description: "Spicy cow foot delicacy cooked in traditional Igbo style.",
    price: 4500,
    promoCode: "NKWOBI15",
    promoPercent: 15,
    image: "/products/nkwobi.svg",
    category: "hot-sale",
    badge: "Top Rated",
  },
  {
    id: "hot-3",
    name: "Ofe Nsala (White Soup)",
    description: "Traditional Igbo white soup with fresh fish and uziza.",
    price: 3800,
    image: "/products/ofe-nsala.svg",
    category: "hot-sale",
    badge: "New",
  },
  {
    id: "hot-4",
    name: "Abacha & Ugba (African Salad)",
    description: "Authentic African salad with garden egg and stockfish.",
    price: 2500,
    promoCode: "ABACHA8",
    promoPercent: 8,
    image: "/products/abacha.svg",
    category: "hot-sale",
  },
  {
    id: "hot-5",
    name: "Okpa (Bambara Nut Pudding)",
    description: "Steamed Bambara bean cake wrapped in banana leaves.",
    price: 1200,
    image: "/products/okpa.svg",
    category: "hot-sale",
  },
  {
    id: "hot-6",
    name: "Isi Ewu (Goat Head)",
    description: "Spiced goat head delicacy served with palm wine.",
    price: 5000,
    image: "/products/isi-ewu.svg",
    category: "hot-sale",
  },
  {
    id: "best-1",
    name: "Egusi Soup & Pounded Yam",
    description: "Rich melon seed soup with assorted meat and stockfish.",
    price: 4200,
    promoCode: "EGUSI12",
    promoPercent: 12,
    image: "/products/egusi-soup.svg",
    category: "best-sellers",
    badge: "Best Seller",
  },
  {
    id: "best-2",
    name: "Oha Soup",
    description: "Traditional Oha leaf soup with cocoyam paste.",
    price: 3800,
    image: "/products/oha-soup.svg",
    category: "best-sellers",
    badge: "Everyday",
  },
  {
    id: "best-3",
    name: "Ukwa (African Breadfruit)",
    description: "Steamed breadfruit porridge with palm oil sauce.",
    price: 2200,
    promoCode: "UKWA5",
    promoPercent: 5,
    image: "/products/ukwa.svg",
    category: "best-sellers",
  },
  {
    id: "best-4",
    name: "Nni Oka (Roasted Corn)",
    description: "Grilled corn with coconut and ube (African pear).",
    price: 1500,
    image: "/products/nni-oka.svg",
    category: "best-sellers",
  },
  {
    id: "best-5",
    name: "Onugbu Soup (Bitter Leaf)",
    description: "Nutritious bitter leaf soup with cocoyam and fish.",
    price: 3500,
    promoCode: "ONUGBU9",
    promoPercent: 9,
    image: "/products/onugbu-soup.svg",
    category: "best-sellers",
  },
  {
    id: "best-6",
    name: "Akpu & Ofe Owerri",
    description: "Cassava fufu with Owerri-style vegetable soup.",
    price: 3200,
    image: "/products/akpu-ofe.svg",
    category: "best-sellers",
  },
  {
    id: "pop-1",
    name: "Banga Soup",
    description: "Palm nut soup with catfish and traditional spices.",
    price: 4000,
    promoCode: "BANGA7",
    promoPercent: 7,
    image: "/products/banga-soup.svg",
    category: "popular",
    badge: "Popular",
  },
  {
    id: "pop-2",
    name: "Okro Soup & Eba",
    description: "Draw soup with assorted meat served with eba.",
    price: 2800,
    image: "/products/okro-soup.svg",
    category: "popular",
  },
  {
    id: "pop-3",
    name: "Pepper Soup (Catfish)",
    description: "Hot spicy catfish pepper soup with local spices.",
    price: 3500,
    image: "/products/pepper-soup.svg",
    category: "popular",
  },
  {
    id: "pop-4",
    name: "Efo Riro",
    description: "Vegetable soup with assorted meat and crayfish.",
    price: 3200,
    promoCode: "EFO6",
    promoPercent: 6,
    image: "/products/efo-riro.svg",
    category: "popular",
  },
  {
    id: "pop-5",
    name: "Edikang Ikong",
    description: "Vegetable soup with pumpkin leaves and waterleaf.",
    price: 4500,
    image: "/products/edikang-ikong.svg",
    category: "popular",
  },
  {
    id: "pop-6",
    name: "Afang Soup",
    description: "Traditional vegetable soup with Afang leaves.",
    price: 4200,
    image: "/products/afang-soup.svg",
    category: "popular",
  },
  {
    id: "other-1",
    name: "Moi Moi",
    description: "Steamed bean pudding with fish and eggs.",
    price: 1000,
    image: "/products/moi-moi.svg",
    category: "others",
    badge: "Breakfast",
  },
  {
    id: "other-2",
    name: "Akara (Bean Cake)",
    description: "Deep-fried bean cakes, crispy and fluffy.",
    price: 800,
    image: "/products/akara.svg",
    category: "others",
  },
  {
    id: "other-3",
    name: "Fried Rice & Chicken",
    description: "Nigerian-style fried rice with grilled chicken.",
    price: 3000,
    promoCode: "RICE4",
    promoPercent: 4,
    image: "/products/fried-rice.svg",
    category: "others",
  },
  {
    id: "other-4",
    name: "Yam Porridge (Asaro)",
    description: "Mashed yam porridge with palm oil and vegetables.",
    price: 2500,
    image: "/products/yam-porridge.svg",
    category: "others",
  },
  {
    id: "other-5",
    name: "Plantain & Fish Sauce",
    description: "Fried plantain with spicy tomato fish sauce.",
    price: 2000,
    image: "/products/plantain-fish.svg",
    category: "others",
  },
  {
    id: "other-6",
    name: "Ugu Soup",
    description: "Pumpkin leaf soup with stockfish and goat meat.",
    price: 3800,
    image: "/products/ugu-soup.svg",
    category: "others",
  },
];

export const categories: ICategorySection[] = [
  {
    id: "hot-sale",
    title: "Hot Sale",
    subtitle: "Most ordered dishes with special discounts.",
    items: products.filter((product) => product.category === "hot-sale"),
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    subtitle: "Traditional favorites loved by our customers.",
    items: products.filter((product) => product.category === "best-sellers"),
  },
  {
    id: "popular",
    title: "Popular",
    subtitle: "Highly rated Igbo delicacies.",
    items: products.filter((product) => product.category === "popular"),
  },
  {
    id: "others",
    title: "Others",
    subtitle: "More delicious options from Ann's Kitchen.",
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
