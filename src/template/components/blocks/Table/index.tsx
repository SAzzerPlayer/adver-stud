import React from "react";
import { TTableBlock } from "../../../../types";
import Styles from "./styles";

const TableBlock: React.FC<TTableBlock> = ({ id }) => {
  return <Styles.Container>{id}</Styles.Container>;
};

export default TableBlock;
