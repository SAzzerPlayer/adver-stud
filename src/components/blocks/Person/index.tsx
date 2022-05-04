import React from "react";
import { ContentfulPerson } from "../../../graphql/generated";
import { GatsbyImage } from "gatsby-plugin-image";
import Styled from "./styles";
import { RichTextBlock } from "../RichText";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export const PersonBlock: React.FC<ContentfulPerson> = ({
  image,
  description,
}) => {
  return (
    <Styled.Container>
      {image && (
        <GatsbyImage
          alt={image.description || "Person photo"}
          image={image.gatsbyImageData}
          style={{
            minHeight: "128px",
            maxHeight: "512px",
            marginBottom: '16px',
          }}
        />
      )}
      {!!description?.raw &&
        renderRichText({ references: [], raw: description.raw })}
    </Styled.Container>
  );
};
