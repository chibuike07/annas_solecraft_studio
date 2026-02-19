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
      color: #bfa14a; /* premium gold, matches brand */
      font-size: 1.01rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      text-shadow:
        0 2px 8px rgba(191, 161, 74, 0.1),
        0 1px 0 #fff;
    }
  }

  .cards_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    background: var(--surface);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.06);
  }

  .load_more_row {
    display: flex;
    justify-content: center;
    margin-top: 0.9rem;

    button {
      border: 2px solid var(--accent);
      background: var(--surface);
      color: var(--highlight);
      border-radius: 999px;
      padding: 0.65rem 1.4rem;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition:
        border 0.2s ease,
        background 0.2s,
        color 0.2s,
        transform 0.2s ease;

      &:hover {
        background: var(--accent);
        color: var(--text);
        border-color: var(--highlight);
        transform: translateY(-1px);
      }
    }
  }
`;
