import React from "react";
import { BoxBanner } from "./styles";
import * as styles from "./styles";

export default function Banner({ text }) {
  return (
    <styles.BoxBanner>
      <p>{text}</p>
    </styles.BoxBanner>
  );
}
