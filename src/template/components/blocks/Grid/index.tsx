import React from "react";
import {
  TActionBlock,
  TGridBlock,
  TGridBlockColumnBlock,
  TPersonBlock,
  TTableBlock,
  TTextBlock,
  TTipListBlock,
} from "src/types";
import Styles from "./styles";
import Block from "..";

const renderBlock = (block: TGridBlockColumnBlock) => {
  if ((block as TTextBlock).type === "text-block") {
    return <Block.Text {...(block as TTextBlock)} />;
  } else if ((block as TActionBlock).type === "action-block") {
    return <Block.Action {...(block as TActionBlock)} />;
  } else if ((block as TTableBlock).type === "table-block") {
    return <Block.Table {...(block as TTableBlock)} />;
  } else if ((block as TPersonBlock).type === "person-block") {
    return <Block.Person {...(block as TPersonBlock)} />;
  } else if ((block as TTipListBlock).type === "tip-list-block") {
    return <Block.TipList {...(block as TTipListBlock)} />;
  }
  return null;
};

const GridBlock: React.FC<TGridBlock> = ({
  alignColumnsOnMobile,
  ratio,
  column_1,
  column_2,
  column_3,
  column_4,
}) => {
  const columns = [column_1, column_2, column_3, column_4];
  return (
    <Styles.Container alignColumnsOnMobile={alignColumnsOnMobile}>
      {columns.filter(Boolean).map((column, index) => (
        <Styles.Column key={index} ratio={ratio[index]}>
          {column?.map((block) => (
            <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
          ))}
        </Styles.Column>
      ))}
    </Styles.Container>
  );
};

export default GridBlock;
