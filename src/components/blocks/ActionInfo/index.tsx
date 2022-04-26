import React from "react";
import { ContentfulActionBlock } from "src/graphql/generated";
import { TextContent, Container } from "./styles";
import { YellowHoverLink } from "src/components/shared";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

export const ActionInfoBlock: React.FC<ContentfulActionBlock> = ({
  textPosition = "onLeftSide",
  article,
  button,
  illustration,
}) => {
  const reversed = textPosition === "onRightSide";
  const content = [
    <TextContent key={"content"}>
      {!!article ? renderRichText({ raw: article.raw!, references: [] }) : null}
      {!!button?.title ? (
        <YellowHoverLink to={button.url?.url! || "/"}>
          {button.title}
        </YellowHoverLink>
      ) : null}
    </TextContent>,
    illustration?.gatsbyImageData ? (
      <GatsbyImage
        key="image"
        alt={illustration.description || "Іллюстрація"}
        image={illustration.gatsbyImageData}
      />
    ) : null,
  ];
  return <Container reversed={reversed}>{content}</Container>;
};
