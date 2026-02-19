import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--accent-soft);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.article`
  background: var(--surface);
  border-radius: 20px;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(24, 28, 42, 0.1);

  .product_header {
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    position: relative;
    border-radius: 20px 20px 0 0;
    overflow: hidden;

    .product_image {
      object-fit: cover;
    }
  }

  .product_details {
    padding: 2rem;

    h1 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: var(--text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      text-shadow: 0 1px 2px rgba(24, 28, 42, 0.04);
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
        background: var(--badge, #8c1c13);
        color: #fff;
        font-weight: 600;
        font-size: 0.85rem;
        letter-spacing: 0.01em;
        box-shadow: 0 2px 8px rgba(140, 28, 19, 0.08);
      }

      .promo {
        display: inline-block;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: rgba(31, 170, 89, 0.16);
        color: var(--brand);
        font-weight: 600;
        font-size: 0.85rem;
        letter-spacing: 0.01em;
        box-shadow: 0 2px 8px rgba(31, 170, 89, 0.08);
      }
    }

    .description {
      color: #3a3a3a;
      font-size: 1.13rem;
      line-height: 1.7;
      margin-bottom: 2rem;
      font-weight: 500;
      letter-spacing: 0.01em;
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.08);
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

    .quantity_section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .quantity_controls {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      background: var(--bg);
      border-radius: 10px;
      border: 1px solid var(--border);
    }

    .quantity_label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--muted);
      white-space: nowrap;
    }

    .quantity_inputs {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
    }

    .qty_btn {
      background: var(--brand);
      color: #fff;
      border: none;
      border-radius: 6px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition:
        background 0.2s ease,
        opacity 0.2s ease;

      &:hover:not(:disabled) {
        background: var(--brand-dark);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .qty_input {
      width: 45px;
      height: 28px;
      text-align: center;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 600;
      background: #fff;
      color: var(--text);
      transition: border-color 0.2s ease;

      &:focus {
        outline: none;
        border-color: var(--brand);
      }
    }

    .qty_input.error {
      border-color: #ef4444;
      background-color: #fee2e2;
    }

    .price_total {
      font-weight: 600;
      color: var(--brand-dark);
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
