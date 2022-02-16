import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  background-color: #f0f0f5;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
`;

const appeatFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--light0);
  border: 1px solid rgba(237, 237, 245, 0.602601);
  border-radius: 1.7rem;

  padding: 2rem;

  animation: ${appeatFromLeft} 2s;

  img {
    width: 10rem;
  }

  form {
    margin: 5rem 0;
    width: 21.25rem;
    text-align: center;
  }
`;
