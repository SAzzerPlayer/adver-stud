import React from "react";
import {
  ContentfulActionBlock,
  ContentfulPerson,
  ContentfulContentBlock,
  ContentfulGrid,
  ContentfulLink,
  ContentfulTextBlock,
} from "src/graphql/generated";
import Block from "./Block";
import GridAligner from "./GridAligner";
import { RichTextBlock } from "../../blocks/RichText";
import { ActionInfoBlock } from "../../blocks/ActionInfo";

const extractContentOfBlock = (
  block:
    | ContentfulActionBlock
    | ContentfulTextBlock
    | ContentfulPerson
    | ContentfulLink
) => {
  if (!!(block as ContentfulTextBlock).alignTextTo) {
    return <RichTextBlock {...(block as ContentfulTextBlock)} />;
  } else if (!!(block as ContentfulActionBlock).textPosition) {
    return <ActionInfoBlock {...(block as ContentfulActionBlock)} />;
  } else if (!!(block as ContentfulLink).url) {
    return null;
  }
};

const GridBlock: React.FC<ContentfulGrid> = ({
  column_1,
  column_2,
  column_3,
  column_4,
  alignColumnsOnMobile,
  ratio,
}) => {
  return (
    <GridAligner reversed={alignColumnsOnMobile === "fromRightToLeft"}>
      {!!column_1 && (
        <div style={{ flex: Number(ratio![0]) / 100 }}>
          {column_1.map((block) => extractContentOfBlock(block! as any))}
        </div>
      )}
      {!!column_2 && (
        <div style={{ flex: Number(ratio![1]) / 100 }}>
          {column_2.map((block) => extractContentOfBlock(block! as any))}
        </div>
      )}
      {!!column_3 && (
        <div style={{ flex: Number(ratio![2]) / 100 }}>
          {column_3.map((block) => extractContentOfBlock(block! as any))}
        </div>
      )}
      {!!column_4 && (
        <div style={{ flex: Number(ratio![3]) / 100 }}>
          {column_4.map((block) => extractContentOfBlock(block! as any))}
        </div>
      )}
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
        if ((block as ContentfulGrid).column_1) {
          return <GridBlock {...(block as ContentfulGrid)} key={index} />;
        }
        //@ts-ignore
        const Block = extractContentOfBlock(block!);
        return <React.Fragment key={index}>{Block}</React.Fragment>;
      })}
    </Block>
  );
};
