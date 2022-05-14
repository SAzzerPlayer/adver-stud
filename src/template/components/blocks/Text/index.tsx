import React from "react";
import { TTextBlock } from "../../../../types";
import Styles from "./styles";

const TextBlock: React.FC<TTextBlock> = ({ id }) => {
  return <Styles.Container>{id}</Styles.Container>;
};

export default TextBlock;
