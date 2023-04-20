import React, { useState } from "react";

import { Container } from "./styles";

interface IInputProps {
  setState: (value: string) => void;
  state: string;
}

const Input = ({ state, setState }: IInputProps) => {
  return (
    <>
      <Container
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Digite o nome do estado ou a sigla"
      />
    </>
  );
};

export default Input;
