import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  max-width: 100%;

  justify-content: flex-end;

  padding: 1rem 3.75rem 1rem 3.438rem;

  a {
    text-decoration: none;

    cursor: pointer;
  }

  span {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 0.688rem;
    line-height: 1.125rem;

    color: var(--light4);
  }

  @media (max-width: 1023px) {
    padding: 1rem 1.5rem 1rem 1.5rem;
  }
`;
