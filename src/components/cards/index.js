import React from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import * as styles from "./styles";

export default function Card({ color, data }) {
  const test = {
    nome: "Rebeca",
    imagem: <BsFillArchiveFill />,
  };

  console.log("data", data);

  return (
    <styles.Container color={color}>
      {data?.map((item) => (
        <>
          <figure>{item?.icon}</figure>
          <h3>{item?.name}</h3>
          <span>
            {item?.icon1}
            <p>{item?.text1}</p>
          </span>
          <span>
            {item?.icon2}
            <p>{item?.text2}</p>
          </span>
          <span>
            {item?.icon3}
            <p>{item?.text3}</p>
          </span>
          <span>
            {item?.icon4}
            <p>{item?.text4}</p>
          </span>
        </>
      ))}
    </styles.Container>
  );
}
