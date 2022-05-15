import React from "react";
import { TTextBlock } from "../../../../types";
import Styles from "./styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const TextBlock: React.FC<TTextBlock> = ({ alignTextTo, text }) => {
  return (
    <Styles.Container align={alignTextTo}>
      {renderRichText({ ...text, references: [] })}
    </Styles.Container>
  );
};

export default TextBlock;
