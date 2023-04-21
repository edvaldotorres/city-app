import React, { useEffect } from "react";
import { ICities } from "../Home";

import { Container } from "./styles";

interface ITableProps {
  cities: ICities[] | null;
  state: string | undefined;
}

const Table = ({ cities, state }: ITableProps) => {
  const [paginationStartIndex, setPaginationStartIndex] = React.useState(0);
  const [paginationEndIndex, setPaginationEndIndex] = React.useState(15);
  const [paginationArray, setPaginationArray] = React.useState<
    ICities[] | null
  >(null);

  useEffect(() => {
    if (cities) {
      const endIndex = Math.min(paginationEndIndex, cities.length);
      const slicedArray = cities.slice(paginationStartIndex, endIndex);
      setPaginationArray(slicedArray);
    }
  }, [cities, paginationStartIndex, paginationEndIndex]);

  function handlePagination() {
    setPaginationStartIndex(paginationStartIndex + 15);
    setPaginationEndIndex(paginationEndIndex + 15);
  }

  function handleGoBack() {
    setPaginationStartIndex(paginationStartIndex - 15);
    setPaginationEndIndex(paginationEndIndex - 15);
  }

  const disableLoadMore = !cities || paginationEndIndex >= cities.length;
  const disableGoBack = paginationStartIndex === 0;

  return (
    <Container>
      <table>
        <tr>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
        {paginationArray?.map((city) => (
          <tr key={city.ID}>
            <td>{city.Nome}</td>
            <td>{state}</td>
          </tr>
        ))}
      </table>
      <p>
        {paginationStartIndex + 1}-{paginationEndIndex} de {cities?.length}
      </p>

      <div>
        <button onClick={handleGoBack} disabled={disableGoBack}>
          Voltar
        </button>
        <button onClick={handlePagination} disabled={disableLoadMore}>
          Próximo
        </button>
      </div>
    </Container>
  );
};

export default Table;
