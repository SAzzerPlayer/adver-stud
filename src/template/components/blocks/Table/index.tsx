import React from "react";
import { TTableBlock } from "src/types";
import Styles from "./styles";

const TableBlock: React.FC<TTableBlock> = ({ id }) => {
  return <Styles.Container>Table{id}</Styles.Container>;
};

export default TableBlock;
