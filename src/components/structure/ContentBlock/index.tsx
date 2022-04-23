import React from "react";
import {
  ContentfulActionInfoBlock,
  ContentfulAuthorAvatarBlock,
  ContentfulContentBlock,
  ContentfulContentColumnGrid,
  ContentfulLink,
  ContentfulRichTextBlock,
} from "src/graphql/generated";
import Block from "./Block";
import GridAligner from "./GridAligner";
import { RichTextBlock } from "../../blocks/RichText";
import { ActionInfoBlock } from "../../blocks/ActionInfo";

const extractContentOfBlock = (
  block:
    | ContentfulActionInfoBlock
    | ContentfulRichTextBlock
    | ContentfulAuthorAvatarBlock
    | ContentfulLink
) => {
  if ((block as ContentfulAuthorAvatarBlock).avatar) {
    return null;
  } else if (!!(block as ContentfulRichTextBlock).alignTextTo) {
    return <RichTextBlock {...(block as ContentfulRichTextBlock)} />;
  } else if (!!(block as ContentfulActionInfoBlock).textPosition) {
    return <ActionInfoBlock {...(block as ContentfulActionInfoBlock)} />;
  } else if (!!(block as ContentfulLink).url) {
    return null;
  }
};

const GridBlock: React.FC<ContentfulContentColumnGrid> = ({
  columns,
  alignColumnsOnMobile,
  ratio,
}) => {
  return (
    <GridAligner reversed={alignColumnsOnMobile === "fromRightToLeft"}>
      {columns?.map((block, index) => (
        <div key={index} style={{ flex: Number(ratio![index]) / 100 }}>
          {extractContentOfBlock(block!)}
        </div>
      ))}
    </GridAligner>
  );
};

export const ContentBlock: React.FC<ContentfulContentBlock> = ({
  margin = "large",
  blocks,
}) => {
  return (
    <Block margin={margin!}>
      {blocks?.map((block, index) => {
        if ((block as ContentfulContentColumnGrid).columns) {
          return (
            <GridBlock
              {...(block as ContentfulContentColumnGrid)}
              key={index}
            />
          );
        }
        //@ts-ignore
        const Block = extractContentOfBlock(block!);
        return <React.Fragment key={index}>{Block}</React.Fragment>;
      })}
    </Block>
  );
};
