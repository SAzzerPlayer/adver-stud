import React from "react";
import { ContentfulTextBlock } from "src/graphql/generated";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const parseAlignTextTo = (type: string) => {
  if (type === "Left") {
    return "left";
  } else if (type === "Center") {
    return "center";
  }
  return "right";
};

const parseAlignTextToFlex = (type: string) => {
  if (type === "Left") {
    return "flex-start";
  } else if (type === "Center") {
    return "center";
  }
  return "flex-end";
};

export const RichTextBlock: React.FC<ContentfulTextBlock> = ({
  alignTextTo = "left",
  text,
}) => {
  if (!text?.raw) return null;
  return (
    <Wrapper
      style={{
        alignItems: parseAlignTextToFlex(alignTextTo!),
        textAlign: parseAlignTextTo(alignTextTo!),
      }}
    >
      {renderRichText({ references: [], raw: text.raw })}
    </Wrapper>
  );
};

export const Wrapper = styled.span`
  padding: 0 16px;
  > * {
    min-height: 8px;
  }
`;
