import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  max-width: 350px;
  min-width: 300px;
  height: 40px;
  padding 0px 12px;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  background: #fff;
  color: #333;
  font-size: 16px;

  &::placeholder {
    color: #a8a8b3;
  }

  & + input {
    margin-top: 8px;
  }

  &:focus {
    outline: 2px solid var(--pinkCities);
    border-color: #a8a8b3;
  }
`;
