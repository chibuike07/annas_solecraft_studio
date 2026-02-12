import type { ICategorySection, IProduct } from "../ProductShowcase.interface";

export interface ICategorySectionProps {
  category: ICategorySection;
  visibleCount: number;
  onLoadMore: () => void;
  onBuyClick: (
    product: IProduct,
    categoryTitle: string,
    quantity: number,
  ) => void;
}
