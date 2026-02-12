import styled from "styled-components";

export const CategorySectionWrapper = styled.div`
  .section_header {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.6rem;
    }

    .subtitle {
      color: var(--muted);
      font-size: 0.95rem;
    }
  }

  .cards_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .load_more_row {
    display: flex;
    justify-content: center;
    margin-top: 0.9rem;

    button {
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
    }
  }
`;
