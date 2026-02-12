"use client";

import { useMemo, useState } from "react";
import Hero from "./Hero/Hero";
import CategorySection from "./CategorySection/CategorySection";
import Footer from "./Footer/Footer";
import type { CategoryKey, IProduct } from "./ProductShowcase.interface";
import { Page } from "./ProductShowcaseStyles";
import {
  categories,
  initialVisible,
  buildWhatsAppUrl,
} from "@/lib/utils/dummyData";

export default function ProductShowcase() {
  const [visibleCounts, setVisibleCounts] = useState(initialVisible);

  const categoryMap = useMemo(
    () => new Map(categories.map((category) => [category.id, category])),
    [],
  );

  const handleLoadMore = (categoryId: CategoryKey): void => {
    const category = categoryMap.get(categoryId);
    if (!category) return;

    setVisibleCounts((prev) => {
      const nextCount = Math.min(prev[categoryId] + 4, category.items.length);
      return { ...prev, [categoryId]: nextCount };
    });
  };

  const handleBuyClick = (
    product: IProduct,
    categoryTitle: string,
    quantity: number,
  ): void => {
    const url = buildWhatsAppUrl(product, categoryTitle, quantity);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Page>
      <Hero />
      <section className="categories" id="categories">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            visibleCount={visibleCounts[category.id]}
            onLoadMore={() => handleLoadMore(category.id)}
            onBuyClick={handleBuyClick}
          />
        ))}
      </section>
      <Footer />
    </Page>
  );
}
