import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --pinkCities: #e02041;
  }

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Anuphan', sans-serif;
  }

  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    overflow-x:hidden;
    background: rgba(0, 0, 0, 0.5) url("https://images.unsplash.com/photo-1582741099331-e0918de0565f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-blend-mode: darken;
    background-size: cover;
    background-position: center;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  h1, h2, h3 , h4 , h5 , h6 , strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
