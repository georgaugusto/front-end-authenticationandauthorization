import styled from 'styled-components';

type ContainerType = {
  compact?: number;
};

export const Button = styled.button<ContainerType>`
  width: 1rem;
  height: 1.5rem;

  background-color: var(--primaria0);

  text-align: ${props => (props.compact ? 'center' : 'right')};

  min-height: 1rem;

  border: none;
  border-radius: 0 0.5rem 0.5rem 0;

  margin-top: 2.5rem;

  svg {
    display: flex;
    border-radius: 0.063rem;
    color: var(--primaria1);
    font-size: 1rem;

    margin: ${props => (props.compact ? '0 -0.125rem' : '0 -0.188rem')};

    transition: transform 0.2s linear;
    transform: rotate(${props => (props.compact ? '270deg' : '90deg')});
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
