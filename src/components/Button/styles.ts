import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-width: 140px;
  height: 40px;
  padding: 0 12px;
  border: 0;
  border-radius: 8px;
  background: #e02041;
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: #a8a8b3;
    cursor: not-allowed;
  }
`;
