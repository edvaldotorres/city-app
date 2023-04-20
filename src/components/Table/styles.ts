import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  gap: 1rem;
  background: #fff;
  border-radius: 8px;
  padding: 1rem 1rem;

  table {
    width: 100%;
    height: 100%;

    tr {
      th {
        width: 100%;
        color: var(--pinkCities)
        font-size: 1.1rem;
        text-align: left;
      }
    }

    tr {
      td {
        font-weight: 500;
        width: 100%;
        padding: 0.2rem;
        text-align: left;
      }
    }
  }

  div {
    width: 100%;
    max-width: 600px;
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    button {
      width: 100px;
      height: 30px;
      border: 0;
      border-radius: 8px;
      background: var(--pinkCities)
      font-weight: 500;
      font-size: 16px;
      color: #fff;

      &:hover {
        filter: brightness(0.9);
        cursor: pointer;
      }

      &:disabled {
        background: #fffff;
        cursor: not-allowed;
      }
    }

    @media only screen and (max-width: 480px) {
    max-width: 100%;
    max-height: none;
    padding: 0;

    table {
      tr {
        th {
          padding: 1rem 0rem;
        }
      }

      tr {
        td {
          padding: 0.8rem 0rem;
        }
      }
    }

    div {
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;

      button {
        width: 100%;
        height: 40px;
      }
    }






  }
`;
