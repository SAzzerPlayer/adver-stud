import React from "react";
import {
  TActionBlock,
  TGridBlock,
  TPersonBlock,
  TTableBlock,
  TTabsBlock,
  TTabsBlockColumnContentBlock,
  TTextBlock,
  TTipListBlock,
} from "src/types";
import Styles from "./styles";
import Block from "..";

const renderBlock = (block: TTabsBlockColumnContentBlock) => {
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
  } else if ((block as TGridBlock).type === "grid-block") {
    return <Block.Grid {...(block as TGridBlock)} />;
  }
  return null;
};

const TabsBlock: React.FC<TTabsBlock> = ({ initialTab, tabs }) => {
  const [activeTab, setActiveTab] = React.useState(Math.max(0, initialTab - 1));

  const visibleContent = tabs[activeTab]?.content || [];

  return (
    <Styles.Container>
      <Styles.TabsWrapper>
        {tabs.map(({ title, id }, index) => (
          <Styles.Tab
            key={id}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </Styles.Tab>
        ))}
      </Styles.TabsWrapper>
      {visibleContent.map((block) => (
        <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
      ))}
    </Styles.Container>
  );
};

export default TabsBlock;
