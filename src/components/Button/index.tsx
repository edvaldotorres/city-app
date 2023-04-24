import React from "react";

import { Container } from "./styles";

interface IButtonsProps {
  handleSearchCity: () => void;
}

const Button = ({ handleSearchCity }: IButtonsProps) => {
  return <Container onClick={handleSearchCity}>Listar Cidades</Container>;
};

export default Button;
