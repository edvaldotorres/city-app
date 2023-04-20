import React, { useEffect, useState } from "react";
import { findStatesByAcronym, findStatesByName } from "../../utils/findStates";
import { citiesData } from "../../utils/cities";
import Button from "../Button";
import Input from "../Input";
import Table from "../Table";

import { Container, SearchBar, Content, ErrorText } from "./styles";
import Main from "../Main";

export interface ICities {
  ID: string;
  Nome: string;
  Estado: string;
}

const Home: React.FC = () => {
  const [state, setState] = useState("");
  const [cities, setCities] = useState<ICities[] | null>([]);

  function getCitiesByStateId(stateId: string) {
    const getCities = citiesData.filter((city) => city.Estado === stateId);

    setCities(getCities);
  }

  function handleSearchCities() {
    if (state.length === 2) {
      const stateFound = findStatesByAcronym(state);
      if (stateFound) {
        getCitiesByStateId(stateFound.ID);
      } else {
        setCities(null);
      }
    }
    if (state.length > 3) {
      const stateFound = findStatesByName(state);
      if (stateFound) {
        getCitiesByStateId(stateFound.ID);
      } else {
        setCities(null);
      }
    }

    setState("");
  }

  return (
    <Container>
      <Content>
        <Main />
        <SearchBar>
          <Input state={state} setState={setState} />
          <Button handleSearchCity={handleSearchCities} />
        </SearchBar>
        {cities === null && (
          <ErrorText>
            Não foi possível encontrar o <span>estado.</span>
          </ErrorText>
        )}
      </Content>
      {cities && cities.length > 0 && <Table cities={cities} />}
    </Container>
  );
};

export default Home;
