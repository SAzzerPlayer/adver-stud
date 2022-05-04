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
import { PersonBlock } from "../../blocks/Person";

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
  } else if (!!(block as ContentfulPerson).socialLinks) {
    return <PersonBlock {...(block as ContentfulPerson)} />;
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
  const columns = [column_1, column_2, column_3, column_4];
  const reversed = alignColumnsOnMobile === "fromRightToLeft";

  return (
    <GridAligner reversed={reversed}>
      {columns.map((column, index) =>
        column ? (
          <div style={{ flex: Number(ratio![index]) / 100 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {column.map((block) => extractContentOfBlock(block! as any))}
            </div>
          </div>
        ) : null
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
