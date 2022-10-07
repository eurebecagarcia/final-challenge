import React from "react";
import Image from "../../assets/eu.jpeg";
import Logo from "../../assets/Logo.png";
import Card from "../../components/cards";
import Banner from "../../components/banner";
import * as styles from "./styles";
import { CardFormacao, CardHobby, CardContatos } from "../../mocks/card";

export default function Home() {
  console.log("data", CardFormacao);

  return (
    <styles.ContainerHome>
      <styles.ContentLogo>
        <div>
          <img src={Image} />
          <img src={Logo} />
        </div>
        <p>Site ODS</p>
      </styles.ContentLogo>
      <styles.ContentBanner>
        <Banner text="Quem sou eu?" />
        <p>Estudante, Mãe, 27 anos!</p>
        <styles.BoxCard>
          <Card color={"#E1CA6B"} data={CardFormacao} />
          <Card color={"#EFA070"} data={CardHobby} />
          <Card color={"#E65858"} data={CardContatos} />
        </styles.BoxCard>
      </styles.ContentBanner>
      <styles.ContentBanner>
        <Banner text="O que eu sei!" />
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>Consunmo de API</li>
        </ul>
      </styles.ContentBanner>
      <styles.ContentBanner>
        <Banner text="Alguns Projetos" />
        <styles.BoxCard>
          <Card color={"#E1CA6B"} />
          <Card color={"#EFA070"} />
          <Card color={"#E65858"} />
        </styles.BoxCard>
      </styles.ContentBanner>
      <styles.ContentBanner>
        <Banner text="O QUE VOS RESTA?" />
        <h2>Porque não uma entrevista?</h2>
      </styles.ContentBanner>
    </styles.ContainerHome>
  );
}
