import type { IProduct } from "../ProductShowcase.interface";

export interface IProductCardProps {
  product: IProduct;
  categoryTitle: string;
  onBuyClick: (
    product: IProduct,
    categoryTitle: string,
    quantity: number,
  ) => void;
}
