import styled from 'styled-components';

type ContainerType = {
  compact?: number;
};

export const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  background-color: var(--light1);
  grid:
    'nav header' min-content
    'nav main' 1fr
    'nav footer' auto / min-content;

  @media (max-width: 1023px) {
    grid:
      'nav header' min-content
      'nav main' 1fr
      'nav footer' auto / min-content;
  }
`;

export const GridNav = styled.div`
  grid-area: nav;
  z-index: 2;

  @media (min-width: 1023px) {
    position: fixed;
  }
`;

export const GridHeader = styled.header<ContainerType>`
  grid-area: header;

  @media (min-width: 1023px) {
    margin-left: ${props => (props.compact ? '4.5rem' : '16rem')};

    transition-property: margin, transform !important;
    transition-duration: 0.3s !important;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  }
`;

export const GridMain = styled.main<ContainerType>`
  grid-area: main;
  background: var(--light0);
  margin: 0 3.75rem 0 3rem;

  border: 1px solid var(--light3);
  box-sizing: border-box;
  border-radius: 1.75rem;

  @media (min-width: 1023px) {
    margin-left: ${props => (props.compact ? '8.125rem' : '19.75rem')};

    transition-property: margin, transform !important;
    transition-duration: 0.3s !important;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  }

  @media (max-width: 1023px) {
    margin: 1rem 1.5rem;
  }
`;

export const GridFooter = styled.footer<ContainerType>`
  grid-area: footer;

  @media (min-width: 1023px) {
    margin-left: ${props => (props.compact ? '4.5rem' : '16rem')};

    transition-property: margin, transform !important;
    transition-duration: 0.3s !important;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  }
`;
