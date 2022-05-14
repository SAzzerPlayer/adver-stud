import React from "react";
import { TTabsBlock } from "../../../../types";
import Styles from "./styles";

const TabsBlock: React.FC<TTabsBlock> = ({ id }) => {
  return <Styles.Container>{id}</Styles.Container>;
};

export default TabsBlock;
