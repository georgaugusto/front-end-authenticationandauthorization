import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Grid = styled.div`
  display: flex;
  max-width: 100%;

  justify-content: space-between;

  height: 6rem;
  padding: 0 3.75rem 0 3.438rem;

  img:nth-child(1) {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  img:nth-child(3) {
    display: none;
  }

  .nav-toggle {
    pointer-events: none;
    opacity: 0;
  }

  @media (max-width: 1023px) {
    height: 3rem;

    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    padding: 0 1.5rem;

    background: var(--primaria0);
    box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.08);

    img:nth-child(3) {
      display: block;
      margin: 0.7rem 0;

      filter: brightness(0) invert(1);
    }

    img:nth-child(1) {
      display: none;
    }

    .nav-toggle {
      opacity: 1;
      pointer-events: all;

      color: var(----light-1);
    }
  }
`;

export const Menu = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
    align-items: center;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;

  width: max-content;

  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;

  color: var(--secundaria2);

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Options = styled.div`
  display: flex;

  align-items: center;

  p {
    width: fit-content;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.5rem;

    color: var(--secundaria2);

    padding-left: 1.5rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    color: var(--secundaria2);
  }

  @media (max-width: 1023px) {
    p {
      display: none;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;

      color: var(--light-1);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  color: var(--secundaria2);

  &:nth-child(odd) {
    margin: 1.5rem;
  }

  @media (max-width: 1023px) {
    &:nth-child(4) {
      display: none;
    }
  }
`;
