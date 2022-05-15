import React from "react";
import { TActionBlock } from "src/types";
import Styles from "./styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { YellowHoverLink } from "src/components/shared";
import { GatsbyImage } from "gatsby-plugin-image";

const ActionBlock: React.FC<TActionBlock> = ({
  textPosition = "onLeftSide",
  article,
  button,
  illustration,
}) => {
  const reversed = textPosition === "onRightSide";
  const content = [
    <Styles.TextContent key={"content"}>
      {!!article ? renderRichText({ raw: article.raw, references: [] }) : null}
      {!!button?.title ? (
        <YellowHoverLink
          to={button.url.url! || "/"}
          locale={button.node_locale}
        >
          {button.title}
        </YellowHoverLink>
      ) : null}
    </Styles.TextContent>,
    illustration?.gatsbyImageData ? (
      <GatsbyImage
        key="image"
        alt={illustration.description || "Іллюстрація"}
        image={illustration.gatsbyImageData}
      />
    ) : null,
  ];
  return <Styles.Container reversed={reversed}>{content}</Styles.Container>;
};

export default ActionBlock;
