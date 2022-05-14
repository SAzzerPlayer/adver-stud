import React from "react";
import Block from "./Block";
import GridAligner from "./GridAligner";
import { RichTextBlock } from "../../blocks/RichText";
import { ActionInfoBlock } from "../../blocks/ActionInfo";
import { PersonBlock } from "../../blocks/Person";
import {
  TActionBlock,
  TContentBlock,
  TContentBlockColumnBlock,
  TGridBlock,
  TPersonBlock,
  TTextBlock,
} from "../../../types";

const extractContentOfBlock = (block: TContentBlockColumnBlock) => {
  if (!!(block as TTextBlock).alignTextTo) {
    return <RichTextBlock {...(block as TTextBlock)} />;
  } else if (!!(block as TActionBlock).textPosition) {
    return <ActionInfoBlock {...(block as TActionBlock)} />;
  } else if (!!(block as TPersonBlock).socialLinks) {
    return <PersonBlock {...(block as TPersonBlock)} />;
  }
};

const GridBlock: React.FC<TGridBlock> = ({
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

export const ContentBlock: React.FC<TContentBlock> = ({
  margin = "large",
  blocks,
}) => {
  return (
    <Block margin={margin!}>
      {blocks?.map((block, index) => {
        if ((block as TGridBlock).column_1) {
          return <GridBlock {...(block as TGridBlock)} key={index} />;
        }

        const Block = extractContentOfBlock(block!);
        return <React.Fragment key={index}>{Block}</React.Fragment>;
      })}
    </Block>
  );
};
