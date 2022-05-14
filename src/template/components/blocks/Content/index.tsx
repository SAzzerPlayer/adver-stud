import React from "react";
import {
  TActionBlock,
  TContentBlock,
  TContentBlockColumnBlock,
  TGridBlock,
  TPersonBlock,
  TTableBlock,
  TTabsBlock,
  TTextBlock,
  TTipListBlock,
} from "../../../../types";
import Styles from "./styles";
import Block from "..";

const renderBlock = (block: TContentBlockColumnBlock) => {
  if ((block as TTextBlock).type === "text-block") {
    return <Block.Text {...(block as TTextBlock)} />;
  } else if ((block as TActionBlock).type === "action-block") {
    return <Block.Action {...(block as TActionBlock)} />;
  } else if ((block as TTableBlock).type === "table-block") {
    return <Block.Table {...(block as TTableBlock)} />;
  } else if ((block as TTabsBlock).type === "tabs-block") {
    return <Block.Tabs {...(block as TTabsBlock)} />;
  } else if ((block as TGridBlock).type === "grid-block") {
    return <Block.Grid {...(block as TGridBlock)} />;
  } else if ((block as TPersonBlock).type === "person-block") {
    return <Block.Person {...(block as TPersonBlock)} />;
  } else if ((block as TTipListBlock).type === "tip-list-block") {
    return <Block.TipList {...(block as TTipListBlock)} />;
  }
  return null;
};

const ContentBlock: React.FC<TContentBlock> = ({ blocks }) => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        {blocks.map((b) => (
          <React.Fragment key={b.id}>{renderBlock(b)}</React.Fragment>
        ))}
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default ContentBlock;
