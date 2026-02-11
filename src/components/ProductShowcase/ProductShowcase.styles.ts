import styled from "styled-components";

export const Page = styled.main`
  min-width: 300px;
  padding: 1.5rem 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Hero = styled.section`
  background:
    radial-gradient(
      circle at top left,
      rgba(37, 99, 235, 0.22),
      transparent 55%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(124, 58, 237, 0.18),
      transparent 50%
    ),
    linear-gradient(135deg, #ffffff 0%, #eff6ff 55%, #eef2ff 100%);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 3rem 6%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
  align-items: center;
  box-shadow: var(--shadow);

  @media (max-width: 48em) {
    padding: 2.5rem 6%;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1.8rem, 3vw, 3.25rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

export const HeroText = styled.p`
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 38rem;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PrimaryButton = styled.a`
  background: var(--brand);
  color: #fff;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(29, 78, 216, 0.35);
  }
`;

export const GhostButton = styled.a`
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  background: #fff;
  transition:
    border 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--brand);
    transform: translateY(-1px);
  }
`;

export const HeroVisual = styled.div`
  background: linear-gradient(145deg, #0f172a 0%, #1e3a8a 45%, #312e81 100%);
  border-radius: 20px;
  padding: 1.5rem;
  color: #fff;
  display: grid;
  gap: 1rem;
`;

export const MetricRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const MetricCard = styled.div`
  background: rgba(255, 255, 255, 0.16);
  padding: 1rem;
  border-radius: 16px;
  flex: 1 1 140px;
  min-width: 120px;
`;

export const MetricValue = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const MetricLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
`;

export const Categories = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
`;

export const SectionSubtitle = styled.p`
  color: var(--muted);
  font-size: 0.95rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const ProductCard = styled.article`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  }
`;

export const ProductImage = styled.div`
  background: linear-gradient(135deg, var(--accent-soft), #dbeafe);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`;

export const ProductBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 1;
`;

export const ProductTitle = styled.h3`
  font-size: 1.05rem;
`;

export const ProductDescription = styled.p`
  color: var(--muted);
  font-size: 0.9rem;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Badge = styled.span`
  font-size: 0.72rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.12);
  color: var(--brand-dark);
  font-weight: 600;
`;

export const PromoChip = styled.span`
  font-size: 0.72rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.16);
  color: var(--accent);
  font-weight: 600;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: auto;
`;

export const Price = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
`;

export const BuyButton = styled.a`
  background: var(--brand);
  color: #fff;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: var(--brand-dark);
    transform: translateY(-1px);
  }
`;

export const LoadMoreRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.9rem;
`;

export const LoadMoreButton = styled.button`
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  border-radius: 999px;
  padding: 0.65rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    border 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--brand);
    transform: translateY(-1px);
  }
`;

export const Footer = styled.footer`
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
  padding-bottom: 1rem;
`;
