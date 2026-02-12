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
    background: linear-gradient(135deg, var(--accent-soft), #dbeafe);
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      transition: transform 0.2s ease;
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

    a {
      text-decoration: none;
      color: inherit;

      &:hover .product_name {
        color: var(--brand);
      }
    }

    h3,
    .product_name {
      font-size: 1.05rem;
      margin: 0;
      transition: color 0.2s ease;
    }

    .description {
      color: var(--muted);
      font-size: 0.9rem;
    }

    .tag_row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .badge {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: rgba(37, 99, 235, 0.12);
        color: var(--brand-dark);
        font-weight: 600;
      }

      .promo_chip {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: rgba(124, 58, 237, 0.16);
        color: var(--accent);
        font-weight: 600;
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
