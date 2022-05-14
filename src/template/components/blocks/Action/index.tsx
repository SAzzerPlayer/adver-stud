import React from "react";
import { TActionBlock } from "../../../../types";
import Styles from "./styles";

const ActionBlock: React.FC<TActionBlock> = ({ id }) => {
  return <Styles.Container>{id}</Styles.Container>;
};

export default ActionBlock;
