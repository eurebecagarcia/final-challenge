import React from "react";
import Image from "../../assets/eu.jpeg";
import Logo from "../../assets/Logo.png";
import Card from "../../components/cards";
import Banner from "../../components/banner";
import * as styles from "./styles";

export default function Home() {
  return (
    <styles.ContainerHome>
      <styles.ContentLogo>
        <div>
          <img src={Image} />
          <img src={Logo} />
        </div>
        <p>Site ODS</p>
      </styles.ContentLogo>
      <div>
        <Banner text="Quem sou eu?" />
        <p>Estudante, Mãe, 27 anos</p>
        <Card />
        <Card />
        <Card />
      </div>
    </styles.ContainerHome>
  );
}
