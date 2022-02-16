import styled, { css } from 'styled-components';

type ContainerType = {
  compact?: number;
  visible?: boolean;
};

export const Container = styled.div`
  display: flex;
`;

export const StyledNav = styled.nav<ContainerType>`
  width: ${props => (props.compact ? '4.375rem' : '16rem')};
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: sticky;

  top: 0;
  z-index: 1;

  background: var(--primaria0);
  box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.08);

  transition-property: width, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 1023px) {
    position: fixed;

    right: 0;
    width: 16rem;

    transform: translate3d(${props => (!props.visible ? 0 : '16rem')}, 0, 0);
    transition: transform 0.3s
      ${props =>
        !props.visible
          ? 'cubic-bezier(0.4, 0, 1, 1)'
          : 'cubic-bezier(0, 0, 0.2, 1)'} !important;
  }
`;

export const Backdrop = styled.div<ContainerType>`
  position: fixed;
  height: 100vh;
  width: 100vw;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1) !important;

  ${props =>
    !props.visible &&
    css`
      background: var(--secundaria1);
      opacity: 0.9;
      backdrop-filter: blur(1rem);
      pointer-events: all;
    `}

  @media(min-width: 1023px) {
    opacity: 0;
    pointer-events: none;
  }
`;
