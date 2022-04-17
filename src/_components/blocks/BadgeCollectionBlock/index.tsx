import React from "react";
import { Paragraph, HoverInternalLink, HoverExternalLink } from "../../shared";
import { colors } from "../../../styles";
import { dequal } from "dequal";
import { Icon } from "../../Icon";
import { Wrapper, Label, Card, TitleSpan, IndexNumber } from "./styles";
import { TBadgeCollectionCardVariant, TBadgeItem } from "./types";

export interface IBadgeCollectionBlockProps {
  items: TBadgeItem[];
  variant: TBadgeCollectionCardVariant;
  showIndex?: boolean;
}

export const BadgeCollectionBlock = React.memo<IBadgeCollectionBlockProps>(
  ({ items, variant, showIndex }) => (
    <Wrapper>
      {items.map(({ title, text, link }, index) => {
        const textContent = (
          <Label
            isLink={!!link}
            style={{
              margin: 0,
              color: variant === "yellow" ? colors.black : colors.accentBlack,
            }}
          >
            {!!title && (
              <>
                <TitleSpan>{title}</TitleSpan>
                <br />
              </>
            )}
            {text}
            {!!link && (
              <Icon name={"linkArrow"} style={{ marginLeft: "4px" }} />
            )}
          </Label>
        );
        return (
          <Card key={index} variant={variant}>
            {showIndex && (
              <IndexNumber variant={variant}>
                <Paragraph style={{ margin: 0, textAlign: "center" }}>
                  {index + 1}
                </Paragraph>
              </IndexNumber>
            )}
            {link ? (
              <>
                {link.type === "external" && (
                  <HoverExternalLink href={link.url}>
                    {textContent}
                  </HoverExternalLink>
                )}
                {link.type === "internal" && (
                  <HoverInternalLink to={link.url}>
                    {textContent}
                  </HoverInternalLink>
                )}
              </>
            ) : (
              textContent
            )}
          </Card>
        );
      })}
    </Wrapper>
  ),
  dequal
);

export * from "./types";
