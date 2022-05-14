import React from "react";
import {TTipListBlock} from "../../../../types";
import Styles from "./styles";

const TipListBlock: React.FC<TTipListBlock> = ({ id }) => {
  return <Styles.Container>{id}</Styles.Container>;
};

export default TipListBlock;
