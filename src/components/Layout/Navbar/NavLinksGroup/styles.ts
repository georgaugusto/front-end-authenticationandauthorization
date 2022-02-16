import styled from 'styled-components';
import { NavLink } from '../NavLink';

type ContainerType = {
  compact?: number;
};

export const LinksGroup = styled.div<ContainerType>`
  display: flex;
  flex-direction: column;
  flex-grow: ${props => Number(!props.compact)};
  padding: 1.5rem 0 0 0;
  overflow: hidden;
  overflow-y: auto;
  transition: flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1);

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 1023px) {
    flex-grow: 1;

    padding: 0;
  }
`;

export const DenseNavLinks = styled(NavLink)`
  && {
    box-shadow: none;
    min-height: 2.25rem;
  }
`;
