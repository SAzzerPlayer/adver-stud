import React from "react";
import styled from "styled-components";
import { Paragraph } from "../shared";
import { colors } from "../../styles";
import { dequal } from "dequal";

export type TBadgeCollectionCardVariant = "lightGray" | "yellow";

const IndexNumber = styled.div<{ variant: TBadgeCollectionCardVariant }>`
  min-width: 36px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.accentYellow};
  margin-right: 16px;

  p {
    color: ${({ variant }) =>
      variant === "lightGray" ? colors.black : colors.accentBlack};
    font-weight: ${({ variant }) => (variant === "lightGray" ? "400" : "600")};
  }
`;

const Card = styled.div<{ variant: TBadgeCollectionCardVariant }>`
  display: flex;
  flex-direction: row;
  padding: 24px 32px;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "lightGray" ? colors.backgroundLightGray : colors.accentYellow};
  border-radius: 16px;
`;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export type TBadgeItem = { text: string; link?: string };

export interface IBadgeCollectionBlockProps {
  items: TBadgeItem[];
  variant: TBadgeCollectionCardVariant;
  showIndex?: boolean;
}

export const BadgeCollectionBlock = React.memo<IBadgeCollectionBlockProps>(
  ({ items, variant, showIndex }) => (
    <Wrapper>
      {items.map(({ text }, index) => (
        <Card key={index} variant={variant}>
          {showIndex && (
            <IndexNumber variant={variant}>
              <Paragraph style={{ margin: 0, textAlign: "center" }}>
                {index + 1}
              </Paragraph>
            </IndexNumber>
          )}
          <Paragraph
            style={{
              margin: 0,
              color: variant === "yellow" ? colors.black : colors.accentBlack,
            }}
          >
            {text}
          </Paragraph>
        </Card>
      ))}
    </Wrapper>
  ),
  dequal
);
