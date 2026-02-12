import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { products, formatter, WHATSAPP_NUMBER } from "@/lib/utils/dummyData";
import {
  getAbsoluteImageUrl,
  getProductDetailUrl,
  APP_URL,
} from "@/lib/utils/config";
import styled from "styled-components";

interface IProductDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: IProductDetailPageProps): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  const productImageUrl = getAbsoluteImageUrl(product.image);
  const productPageUrl = getProductDetailUrl(product.id);

  return {
    title: `${product.name} | Anna`,
    description: product.description,
    keywords: [product.name, product.badge || "", "curated products"].filter(
      Boolean,
    ),
    openGraph: {
      type: "article",
      url: productPageUrl,
      title: product.name,
      description: product.description,
      images: [
        {
          url: productImageUrl,
          width: 520,
          height: 340,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [productImageUrl],
    },
    alternates: {
      canonical: productPageUrl,
    },
  };
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductContainer = styled.article`
  background: var(--surface);
  border-radius: 20px;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.15);

  .product_header {
    background: linear-gradient(135deg, var(--accent-soft), #dbeafe);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .product_details {
    padding: 2rem;

    h1 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: var(--text);
    }

    .product_meta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;

      .badge {
        display: inline-block;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: rgba(37, 99, 235, 0.12);
        color: var(--brand-dark);
        font-weight: 600;
        font-size: 0.85rem;
      }

      .promo {
        display: inline-block;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: rgba(124, 58, 237, 0.16);
        color: var(--accent);
        font-weight: 600;
        font-size: 0.85rem;
      }
    }

    .description {
      color: var(--muted);
      font-size: 1.05rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .price_section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--border);

      .price {
        font-size: 2rem;
        font-weight: 700;
        color: var(--brand-dark);
      }

      .discount {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        background: rgba(220, 38, 38, 0.1);
        color: #dc2626;
        font-weight: 600;
      }
    }

    .action_buttons {
      display: flex;
      gap: 1rem;
      flex-direction: column;

      .btn {
        padding: 1rem;
        border: none;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        &.primary {
          background: var(--brand);
          color: #fff;

          &:hover {
            background: var(--brand-dark);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
          }
        }

        &.secondary {
          background: var(--border);
          color: var(--text);

          &:hover {
            background: var(--accent-soft);
          }
        }
      }
    }

    .back_link {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.75rem 1.25rem;
      color: var(--brand);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;

      &:hover {
        color: var(--brand-dark);
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 640px) {
    .product_details {
      padding: 1.5rem;

      h1 {
        font-size: 1.4rem;
      }

      .price_section {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export default function ProductDetailPage({ params }: IProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const productImageUrl = getAbsoluteImageUrl(product.image);
  const productPageUrl = getProductDetailUrl(product.id);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in the "${product.name}" from Anna. Price: ${formatter.format(product.price)}. View product: ${productPageUrl}`,
  )}`;

  return (
    <PageWrapper>
      <ProductContainer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              image: productImageUrl,
              price: product.price,
              priceCurrency: "NGN",
              brand: {
                "@type": "Brand",
                name: "Anna",
              },
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "NGN",
                availability: "https://schema.org/InStock",
                url: productPageUrl,
              },
            }),
          }}
        />

        <div className="product_header">
          <Image
            src={productImageUrl}
            alt={product.name}
            width={400}
            height={300}
            style={{ width: "auto", height: "auto", maxWidth: "100%" }}
            priority
          />
        </div>

        <div className="product_details">
          <h1>{product.name}</h1>

          <div className="product_meta">
            {product.badge && <span className="badge">{product.badge}</span>}
            {product.promoCode && (
              <span className="promo">{product.promoCode}</span>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="price_section">
            <div className="price">{formatter.format(product.price)}</div>
            {product.promoPercent && (
              <div className="discount">{product.promoPercent}% off</div>
            )}
          </div>

          <div className="action_buttons">
            <a
              href={whatsappUrl}
              className="btn primary"
              rel="noopener noreferrer"
            >
              💬 Buy on WhatsApp
            </a>
            <a href={`${APP_URL}#categories`} className="btn secondary">
              ← Back to Shop
            </a>
          </div>

          <a href={`${APP_URL}#categories`} className="back_link">
            ← Back to all products
          </a>
        </div>
      </ProductContainer>
    </PageWrapper>
  );
}
