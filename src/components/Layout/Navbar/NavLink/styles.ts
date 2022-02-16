import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

type ContainerType = {
  compact?: number;
};

export const StyledLink = styled(Link)<ContainerType>`
  height: 3rem;
  min-height: 3rem;

  display: flex;
  align-items: center;

  padding: 0 1.5rem;

  color: var(--light0);

  text-decoration: none;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 2rem;

  i {
    width: 1.75rem;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    padding-left: 0.875rem;
    line-height: 1.188rem;
    white-space: nowrap;
    opacity: ${props => Number(!props.compact)};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  }

  &:hover {
    text-decoration: none;
    background-color: var(--light0);
    opacity: 0.9;
    color: var(--secundaria2);

    transition: 0.4s;
  }

  &.active {
    color: var(--light0);
    background: var(--primaria1);
    border-right: 0.188rem solid var(--light0);
  }

  @media (max-width: 1023px) {
    span {
      opacity: 1;
    }
  }
`;
