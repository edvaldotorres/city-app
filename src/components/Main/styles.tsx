import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 2px 2px 4px #000000;

    span {
      color: var(--pinkCities);
    }

  }

  @media (max-width: 1440px) {
    h1 {
      text-align: center  
    }
`;
