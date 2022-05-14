import React from "react";
import { TPersonBlock } from "../../../../types";
import Styles from "./styles";

const PersonBlock: React.FC<TPersonBlock> = ({ id }) => {
  return <Styles.Container>{id}</Styles.Container>;
};

export default PersonBlock;
