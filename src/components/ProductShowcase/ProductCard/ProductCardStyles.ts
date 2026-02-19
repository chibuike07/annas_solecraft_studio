import styled from "styled-components";

export const ProductCardWrapper = styled.article`
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

  .product_image {
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    min-height: 220px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      background: transparent;
    }

    span {
      border-radius: 12px;
      overflow: hidden;
      width: 100% !important;
      height: 100% !important;
      background: transparent;
    }

    img {
      border-radius: 12px;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: center;
      transition: transform 0.2s ease;
      background: transparent;
    }

    a:hover img {
      transform: scale(1.05);
    }
  }

  .product_body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex: 1;

    a,
    .product_link {
      text-decoration: none;
      color: inherit;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;

      &:hover .product_name {
        color: var(--brand);
      }
    }

    h3,
    .product_name {
      font-size: 1.12rem;
      margin: 0;
      font-weight: 700;
      color: #181c2a;
      letter-spacing: 0.01em;
      text-shadow:
        0 2px 8px rgba(24, 28, 42, 0.08),
        0 1px 0 #fff;
      transition:
        color 0.2s ease,
        text-shadow 0.2s ease;
    }

    .description {
      color: #3d4250;
      font-size: 0.97rem;
      font-weight: 500;
      letter-spacing: 0.01em;
      text-shadow: 0 1px 6px rgba(24, 28, 42, 0.07);
    }

    .tag_row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .badge {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: var(--badge, #8c1c13);
        color: #fff;
        font-weight: 600;
        letter-spacing: 0.01em;
        box-shadow: 0 2px 8px rgba(140, 28, 19, 0.08);
      }

      .promo_chip {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: rgba(31, 170, 89, 0.16);
        color: var(--brand);
        font-weight: 600;
        letter-spacing: 0.01em;
        box-shadow: 0 2px 8px rgba(31, 170, 89, 0.08);
      }
    }

    .price_row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      margin-top: auto;

      .price {
        font-size: 1.1rem;
        font-weight: 700;
      }

      .buy_btn {
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
      }
    }

    .quantity_section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      background: var(--bg);
      border-radius: 10px;
      border: 1px solid var(--border);

      .quantity_label {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--muted);
        white-space: nowrap;
      }

      .quantity_controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-left: auto;

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

          &.error {
            border-color: #ef4444;
            background-color: #fee2e2;
          }

          /* Remove spinners from number input */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          &[type="number"] {
            appearance: textfield;
            -moz-appearance: textfield;
          }
        }
      }
    }
  }
`;
