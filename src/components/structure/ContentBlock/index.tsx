import React from "react";
import {
  ContentfulActionInfoBlock,
  ContentfulContentBlock,
  ContentfulRichTextBlock,
} from "src/graphql/generated";
import Block from "./Block";
import { RichTextBlock } from "../../blocks/RichText";
import { ActionInfoBlock } from "../../blocks/ActionInfo";

export const ContentBlock: React.FC<ContentfulContentBlock> = ({
  margin = "large",
  blocks,
}) => {
  return (
    <Block margin={margin!}>
      {blocks?.map((block, index) => {
        if (!!(block as ContentfulRichTextBlock).alignTextTo) {
          return (
            <RichTextBlock
              {...(block as ContentfulRichTextBlock)}
              key={index}
            />
          );
        } else if (!!(block as ContentfulActionInfoBlock).textPosition) {
          return (
            <ActionInfoBlock
              {...(block as ContentfulActionInfoBlock)}
              key={index}
            />
          );
        }
        return <p key={index}>BLOCK</p>;
      })}
    </Block>
  );
};
