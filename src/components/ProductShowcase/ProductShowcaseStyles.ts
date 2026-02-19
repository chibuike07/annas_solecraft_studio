import styled from "styled-components";

// Main page styled component
export const Page = styled.main`
  min-width: 300px;
  padding: 1.5rem 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  /* CATEGORIES SECTION */
  .categories {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .category_section {
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
      }

      .load_more_row {
        display: flex;
        justify-content: center;
        margin-top: 0.9rem;

        button {
          .story_section {
            background: var(--surface);
            border: 2px solid var(--border);
            border-radius: 20px;
            padding: 1.5rem;
            box-shadow: 0 8px 32px rgba(31, 28, 42, 0.1);
            display: grid;
            gap: 1.5rem;
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
    }

    /* STORY SECTIONS */
    .story_sections {
      display: grid;
      gap: 1.75rem;
    }

    .story_section {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 20px;
      padding: 1.5rem;
      box-shadow: 0 8px 32px rgba(24, 28, 42, 0.08);
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      align-items: center;
      /* Ensure background is visible even if image is transparent */
      min-height: 320px;
      position: relative;
      overflow: hidden;
    }

    .story_content {
      display: grid;
      gap: 0.75rem;

      h3 {
        font-size: 1.4rem;
      }

      p {
        color: var(--muted);
        font-size: 0.98rem;
      }

      .story_badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--badge, #8c1c13);
        color: #fff;
        font-size: 0.78rem;
        font-weight: 600;
        padding: 0.32rem 0.8rem;
        border-radius: 999px;
        letter-spacing: 0.01em;
        box-shadow: 0 2px 8px rgba(140, 28, 19, 0.08);
      }
    }
  }
`;
