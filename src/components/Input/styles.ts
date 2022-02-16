import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--light0);
  border-radius: 0.5rem;
  padding: 0.75rem;
  width: 100%;

  border: 0.125rem solid var(--light2);
  color: var(--secundaria3);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.125rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--danger);
    `}

  input {
    flex: 1;
    background: var(--light0);
    border: 0;
    color: var(--secundaria2);
    outline: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  svg {
    margin-right: 0.75rem;
  }
`;

export const ErrorMessage = styled.div<ContainerProps>`
  display: flex;

  padding-bottom: 2.2rem;
  opacity: 0;

  span {
    font-family: Mulish;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--danger);

    cursor: default;
  }

  ${props =>
    props.isErrored &&
    css`
      opacity: 1;
      padding-bottom: 0.75rem;

      transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
    `}
`;
