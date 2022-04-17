import styled from "styled-components";
import { colors } from "../../../styles";
import { Paragraph } from "../../shared";
import { TBadgeCollectionCardVariant } from "./types";

export const TitleSpan = styled.span`
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 136%;
  color: ${colors.accentBlack};
`;

export const Label = styled(Paragraph)<{ isLink?: boolean }>`
  text-decoration: ${({ isLink }) => (isLink ? "underline" : "none")};
`;

export const IndexNumber = styled.div<{ variant: TBadgeCollectionCardVariant }>`
  min-width: 36px;
  min-height: 36px;
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

export const Card = styled.div<{ variant: TBadgeCollectionCardVariant }>`
  display: flex;
  flex-direction: row;
  padding: 24px 32px;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "lightGray" ? colors.backgroundLightGray : colors.accentYellow};
  border-radius: 16px;
`;

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 16px;
  flex-direction: row;
  justify-content: space-between;
`;
