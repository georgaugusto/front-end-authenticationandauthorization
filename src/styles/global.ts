import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primaria0: #b7ceab;
    --primaria1: #5e9778;

    --light0: #FFFFFF;
    --light1: #F9F9F9;
    --light2: #F5F5F5;
    --light3: #e6e5f2;
    --light4: #9897ad;

    --secundaria0: #5A5E69;
    --secundaria1: #1D1F24;
    --secundaria2: #242424;

    --success: #47BC4C;
    --danger: #E42722;
    --dark: #5A5D67;
    --attention: #F3D534;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea, button, label {
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
