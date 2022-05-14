import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Styled from "./styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {TPersonBlock} from "../../../types";

export const PersonBlock: React.FC<TPersonBlock> = ({
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
