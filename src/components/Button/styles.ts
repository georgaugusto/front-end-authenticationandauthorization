import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: var(--secundaria0);
  height: 2.938rem;
  border-radius: 0.5rem;
  border: 0;
  padding: 0 1rem;
  color: var(--light0);
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.4, '#5A5E69')};
  }
`;
