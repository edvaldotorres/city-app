import { states } from "./states";

function findStatesByName(stateName: string) {
  return states.find(
    (state) => state.Nome.toLocaleLowerCase() === stateName.toLocaleLowerCase()
  );
}

function findStatesByAcronym(acronym: string) {
  return states.find(
    (state) => state.Sigla.toLocaleLowerCase() === acronym.toLocaleLowerCase()
  );
}

export { findStatesByName, findStatesByAcronym };
