import React from "react";
import Image from "../../assets/eu.jpeg";
import Logo from "../../assets/Logo.png";
import Card from "../../components/cards";
import Banner from "../../components/banner";
import * as styles from "./styles";
import {
  CardFormacao,
  CardHobby,
  CardContatos,
  CardProj1,
  CardProj3,
  CardProj2,
} from "../../mocks/card";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <styles.ContainerHome>
      <styles.ContentLogo>
        <div>
          <img src={Image} />
          <img src={Logo} />
        </div>
        <Link to="ods">Site ODS</Link>
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
          <li>
            HTML
            <spam>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </spam>
          </li>
          <li>
            CSS
            <spam>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </spam>
          </li>
          <li>
            JavaScript
            <spam>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </spam>
          </li>
          <li>
            React
            <spam>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </spam>
          </li>
          <li>
            Git
            <spam>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </spam>
          </li>
          <li>
            Consunmo de API
            <spam>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </spam>
          </li>
        </ul>
      </styles.ContentBanner>
      <styles.ContentBanner>
        <Banner text="Alguns Projetos" />
        <styles.BoxCard>
          <Card color={"#E1CA6B"} data={CardProj1} />
          <Card color={"#EFA070"} data={CardProj2} />
          <Card color={"#E65858"} data={CardProj3} />
        </styles.BoxCard>
      </styles.ContentBanner>
      <styles.ContentBanner>
        <Banner text="O QUE VOS RESTA?" />
        <h2>Porque não uma entrevista?</h2>
      </styles.ContentBanner>
    </styles.ContainerHome>
  );
}
