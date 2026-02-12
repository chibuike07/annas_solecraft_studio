import ProductCard from "../ProductCard/ProductCard";
import { CategorySectionWrapper } from "./CategorySectionStyles";
import type { ICategorySectionProps } from "./CategorySection.interface";

export default function CategorySection({
  category,
  visibleCount,
  onLoadMore,
  onBuyClick,
}: ICategorySectionProps) {
  const visibleItems = category.items.slice(0, visibleCount);
  const hasMore = visibleCount < category.items.length;

  return (
    <CategorySectionWrapper>
      <div className="section_header">
        <h2>{category.title}</h2>
        <p className="subtitle">{category.subtitle}</p>
      </div>
      <div className="cards_grid">
        {visibleItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryTitle={category.title}
            onBuyClick={onBuyClick}
          />
        ))}
      </div>
      {hasMore && (
        <div className="load_more_row">
          <button type="button" onClick={onLoadMore}>
            Load more {category.title.toLowerCase()}
          </button>
        </div>
      )}
    </CategorySectionWrapper>
  );
}
