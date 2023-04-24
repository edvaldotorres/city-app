import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1420px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 1rem;
  height: 100vh;

  @media (max-width: 1420px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1420px) {
    align-items: center;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const ErrorText = styled.p`
  color: #fff;
  display: block;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px #000000;

  span {
    color: var(--pinkCities);
  }
`;
