"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  FiZap,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import type {
  CategoryKey,
  CategorySection,
  Product,
} from "./ProductShowcase.interface";
import * as S from "./ProductShowcase.styles";

const WHATSAPP_NUMBER = "2348169543479";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const products: Product[] = [
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

const categories: CategorySection[] = [
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

const initialVisible: Record<CategoryKey, number> = {
  "hot-sale": 4,
  "best-sellers": 4,
  popular: 4,
  others: 4,
};

const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

const resolveImagePath = (path: string) => `${BASE_PATH}${path}`;

const buildWhatsAppUrl = (product: Product, categoryTitle: string) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${origin}${BASE_PATH}${product.image}`;

  const message = `Hello, I want to buy:\n\n${product.name}\nCategory: ${categoryTitle}\nPrice: ${formatter.format(
    product.price,
  )}${product.promoCode ? `\nPromo Code: ${product.promoCode}` : ""}${
    product.promoPercent ? `\nDiscount: ${product.promoPercent}%` : ""
  }\nImage: ${imageUrl}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function ProductShowcase() {
  const [visibleCounts, setVisibleCounts] = useState(initialVisible);

  const categoryMap = useMemo(
    () => new Map(categories.map((category) => [category.id, category])),
    [],
  );

  const handleLoadMore = (categoryId: CategoryKey) => {
    const category = categoryMap.get(categoryId);
    if (!category) return;

    setVisibleCounts((prev) => {
      const nextCount = Math.min(prev[categoryId] + 4, category.items.length);
      return { ...prev, [categoryId]: nextCount };
    });
  };

  return (
    <S.Page>
      <S.Hero>
        <S.HeroContent>
          <S.HeroTitle>
            Meet Onyiye — curated gear for bold lifestyles.
          </S.HeroTitle>
          <S.HeroText>
            Explore hot sales, best sellers, and popular picks. Every product
            includes instant WhatsApp checkout so you can purchase in seconds.
          </S.HeroText>
          <S.HeroActions>
            <S.PrimaryButton href="#categories">
              Shop Collections
            </S.PrimaryButton>
            <S.GhostButton href="#contact">Talk to Sales</S.GhostButton>
          </S.HeroActions>
        </S.HeroContent>
        <S.HeroVisual>
          <div>
            <FiZap size={22} /> Instant buy in WhatsApp
          </div>
          <S.MetricRow>
            <S.MetricCard>
              <S.MetricValue>40+</S.MetricValue>
              <S.MetricLabel>Curated products</S.MetricLabel>
            </S.MetricCard>
            <S.MetricCard>
              <S.MetricValue>4.9/5</S.MetricValue>
              <S.MetricLabel>Customer love</S.MetricLabel>
            </S.MetricCard>
            <S.MetricCard>
              <S.MetricValue>24h</S.MetricValue>
              <S.MetricLabel>Fast response</S.MetricLabel>
            </S.MetricCard>
          </S.MetricRow>
          <S.MetricRow>
            <S.MetricCard>
              <S.MetricValue>
                <FiAward /> Trusted
              </S.MetricValue>
              <S.MetricLabel>Top-rated store</S.MetricLabel>
            </S.MetricCard>
            <S.MetricCard>
              <S.MetricValue>
                <FiTrendingUp /> Trending
              </S.MetricValue>
              <S.MetricLabel>Weekly drops</S.MetricLabel>
            </S.MetricCard>
            <S.MetricCard>
              <S.MetricValue>
                <FiShield /> Secure
              </S.MetricValue>
              <S.MetricLabel>Verified vendors</S.MetricLabel>
            </S.MetricCard>
          </S.MetricRow>
        </S.HeroVisual>
      </S.Hero>

      <S.Categories id="categories">
        {categories.map((category) => {
          const visibleItems = category.items.slice(
            0,
            visibleCounts[category.id],
          );
          const hasMore = visibleCounts[category.id] < category.items.length;

          return (
            <section key={category.id}>
              <S.SectionHeader>
                <S.SectionTitle>{category.title}</S.SectionTitle>
                <S.SectionSubtitle>{category.subtitle}</S.SectionSubtitle>
              </S.SectionHeader>
              <S.CardsGrid>
                {visibleItems.map((product) => (
                  <S.ProductCard key={product.id}>
                    <S.ProductImage>
                      <Image
                        src={resolveImagePath(product.image)}
                        alt={product.name}
                        width={520}
                        height={340}
                        sizes="(max-width: 48em) 100vw, 33vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </S.ProductImage>
                    <S.ProductBody>
                      <S.ProductTitle>{product.name}</S.ProductTitle>
                      <S.ProductDescription>
                        {product.description}
                      </S.ProductDescription>
                      <S.TagRow>
                        {product.badge && <S.Badge>{product.badge}</S.Badge>}
                        {product.promoCode && (
                          <S.PromoChip>
                            {product.promoCode} · {product.promoPercent}% off
                          </S.PromoChip>
                        )}
                      </S.TagRow>
                      <S.PriceRow>
                        <S.Price>{formatter.format(product.price)}</S.Price>
                        <S.BuyButton
                          href={buildWhatsAppUrl(product, category.title)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Buy on WhatsApp
                        </S.BuyButton>
                      </S.PriceRow>
                    </S.ProductBody>
                  </S.ProductCard>
                ))}
              </S.CardsGrid>
              {hasMore && (
                <S.LoadMoreRow>
                  <S.LoadMoreButton
                    type="button"
                    onClick={() => handleLoadMore(category.id)}
                  >
                    Load more {category.title.toLowerCase()}
                  </S.LoadMoreButton>
                </S.LoadMoreRow>
              )}
            </section>
          );
        })}
      </S.Categories>

      <S.Footer id="contact">
        <div>
          <FiStar /> Premium picks · <FiTruck /> Fast delivery · <FiShield />
          Secure checkout
        </div>
        <div>
          Replace the WhatsApp number and product images with your live data.
        </div>
      </S.Footer>
    </S.Page>
  );
}
