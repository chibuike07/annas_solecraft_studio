export type CategoryKey = "hot-sale" | "best-sellers" | "popular" | "others";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoCode?: string;
  promoPercent?: number;
  image: string;
  category: CategoryKey;
  badge?: string;
}

export interface CategorySection {
  id: CategoryKey;
  title: string;
  subtitle: string;
  items: Product[];
}
