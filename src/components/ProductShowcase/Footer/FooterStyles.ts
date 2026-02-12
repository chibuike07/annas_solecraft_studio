import styled from "styled-components";

export const FooterSection = styled.footer`
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
  padding-bottom: 1rem;

  .footer_icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .footer_note {
    margin-top: 0.5rem;
  }
`;
