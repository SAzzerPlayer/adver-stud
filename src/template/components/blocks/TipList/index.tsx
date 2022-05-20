import React from "react";
import { TRichText, TTipListBlock } from "src/types";
import Styles from "./styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Icon } from "src/components/shared";
import { colors } from "src/styles";

const TipListBlock: React.FC<TTipListBlock> = ({
  tips,
  tipMarker = "none",
  style = "none",
  amountOfColumns,
}) => {
  const render = React.useCallback(
    (text: TRichText) => {
      let counter = 0;
      return renderRichText(
        { ...text, references: [] },
        {
          renderNode: {
            [BLOCKS.UL_LIST]: (node, children) => {
              return (
                <Styles.UnorderedList columns={amountOfColumns}>
                  {children}
                </Styles.UnorderedList>
              );
            },
            [BLOCKS.LIST_ITEM]: (node, children) => {
              counter += 1;
              const counterLabel = `${counter}${
                tipMarker === "nums" ? "." : ""
              }`;
              return (
                <Styles.ListItem className={"list-item"} displayStyle={style}>
                  {tipMarker !== "none" && (
                    <Styles.Marker displayStyle={style}>
                      {tipMarker === "attention" ? (
                        <Icon
                          name={"info"}
                          size={24}
                          color={colors.backgroundDarkGray}
                        />
                      ) : (
                        <span>{counterLabel}</span>
                      )}
                    </Styles.Marker>
                  )}
                  <Styles.TextContent displayStyle={style}>
                    {children}
                  </Styles.TextContent>
                </Styles.ListItem>
              );
            },
          },
        }
      );
    },
    [tipMarker, amountOfColumns, style]
  );
  return <Styles.Container>{render(tips)}</Styles.Container>;
};

export default TipListBlock;
