import {
  BsAwardFill,
  BsBookFill,
  BsFillHeartFill,
  BsSunglasses,
  BsFillCameraReelsFill,
  BsEarbuds,
  BsFillTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsEnvelopeFill,
  BsTvFill,
} from "react-icons/bs";

import { AiOutlineThunderbolt, AiOutlineWoman } from "react-icons/ai";

export const CardFormacao = [
  {
    name: "Formação",
    icon: <BsAwardFill size="50" />,
    text1: "Ensino Médio Completo",
    text2: "Desenvolvimento Web - vnw",
    text3: "desenvolvimento de site Responsivo",
    text4: "Futura Engenheira de Software",
  },
];

export const CardHobby = [
  {
    name: "O que Gosto",
    icon: <BsFillHeartFill size="40" />,
    text1: "ler",
    icon1: <BsBookFill size="20" />,
    text2: "Viajar",
    icon2: <BsSunglasses size="20" />,
    text3: "Filmes e Séries",
    icon3: <BsFillCameraReelsFill size="20" />,
    text4: "Ouvir Música",
    icon4: <BsEarbuds size="20" />,
    text4: "Estudar",
    icon4: <BsTvFill size="20" />,
  },
];

export const CardContatos = [
  {
    name: "Contatos",
    icon: <BsFillTelephoneFill size="40" />,
    text1: "Facebook",
    icon1: <BsFacebook size="20" />,
    link: "",
    text2: "Instagram",
    icon2: <BsInstagram size="20" />,
    link1: "",
    text3: "LinkedIn",
    icon3: <BsLinkedin size="20" />,
    link2: "",
    text4: "E-mail",
    icon4: <BsEnvelopeFill size="20" />,
    link3: "mailto:rebecagarciarodrigues21@gmail.com",
  },
];

export const CardProj1 = [
  {
    name: "Movies",
    icon: <BsFillCameraReelsFill size="30" />,
    text: "Meu projeto",
  },
];

export const CardProj2 = [
  {
    name: "HarryPotter",
    icon: <AiOutlineThunderbolt size="30" />,
    text: "Meu projeto",
  },
];

export const CardProj3 = [
  {
    name: "Crespos",
    icon: <AiOutlineWoman size="30" />,
    text: "Meu projeto",
  },
];
