import React from "react";
import { ContentfulTextBlock } from "src/graphql/generated";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const options: Options = {
  renderMark: {
    [BLOCKS.LIST_ITEM]: (node) => <li>{node}</li>,
  },
};

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
    <div style={{ display: "flex", height: "fit-content", width: "100%" }}>
      <Wrapper
        style={{
          alignItems: parseAlignTextToFlex(alignTextTo!),
          textAlign: parseAlignTextTo(alignTextTo!),
        }}
      >
        {renderRichText({ references: [], raw: text.raw })}
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 0 16px !important;

  p,
  a,
  b,
  strong,
  i,
  em,
  mark,
  u {
    margin: 1.25em 0 !important;
  }
`;
