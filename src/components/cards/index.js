import React from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import * as styles from "./styles";

export default function Card() {
  const test = {
    nome: "Rebeca",
    imagem: <BsFillArchiveFill />,
  };

  return (
    <styles.Container>
      {test.imagem}
      <p>Filiaanol</p>
    </styles.Container>
  );
}
