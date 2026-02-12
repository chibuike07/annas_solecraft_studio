import styled from "styled-components";

export const HeroSection = styled.div`
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

  .hero_content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      font-size: clamp(1.8rem, 3vw, 3.25rem);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 1.05rem;
      color: var(--muted);
      max-width: 38rem;
    }

    .hero_actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      .primary_btn {
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
      }

      .ghost_btn {
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
      }
    }
  }

  .hero_visual {
    background: linear-gradient(145deg, #0f172a 0%, #1e3a8a 45%, #312e81 100%);
    border-radius: 20px;
    padding: 1.5rem;
    color: #fff;
    display: grid;
    gap: 1rem;

    .metric_row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      .metric_card {
        background: rgba(255, 255, 255, 0.16);
        padding: 1rem;
        border-radius: 16px;
        flex: 1 1 140px;
        min-width: 120px;

        .metric_value {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .metric_label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.75);
        }
      }
    }
  }
`;
