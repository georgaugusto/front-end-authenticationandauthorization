import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;

    color: var(--secundaria0);
  }

  p {
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1.375rem;

    color: var(--secundaria0);
  }
`;

export const Code = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  overflow-wrap: break-word;

  div {
    padding: 2rem;

    pre {
      width: fit-content;
      background-color: var(--light2);
      border-radius: 1rem;

      padding: 0.5rem;
    }
  }
`;

export const Tokens = styled.div`
  width: 60vw;

  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;

  padding: 2rem;

  @media (max-width: 1023px) {
    width: 88vw;
  }
`;
