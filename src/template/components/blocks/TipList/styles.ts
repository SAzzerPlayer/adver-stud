import styled, { css } from "styled-components";
import { breakpoints, colors } from "../../../../styles";
import { TTipListBlockStyle } from "../../../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UnorderedList = styled.ul<{ columns: number }>`
  display: grid;
  flex: 1;
  grid-template-columns: ${({ columns }) => {
    let parts: string[] = [];
    for (let i = 0; i < columns; i++) {
      parts.push((100 / columns).toFixed(2) + "%");
    }
    return parts.join(" ");
  }};
  grid-gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${breakpoints.device}) {
    grid-template-columns: 100%;
  }
`;

export const ListItem = styled.li<{ displayStyle: TTipListBlockStyle }>`
  display: flex;
  align-items: center;
  padding: 1.5em 1.25em;
  border-radius: 16px;
  ${({ displayStyle }) => {
    if (displayStyle === "yellow") {
      return css`
        background: ${colors.accentYellow};
      `;
    } else if (displayStyle === "gray") {
      return css`
        background: ${colors.backgroundLightGray};
      `;
    }
    return css`
      align-items: flex-start;
      padding: 0;
    `;
  }}
`;

export const Marker = styled.p<{ displayStyle: TTipListBlockStyle }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 1.5em;
  min-width: 1.5em;
  height: fit-content;
  padding: 4px;
  border-radius: 50%;
  margin-right: 1em;

  background: ${({ displayStyle }) =>
    displayStyle === "gray" ? colors.accentYellow : "transparent"};
`;

const TextContent = styled(Container)<{ displayStyle: TTipListBlockStyle }>`
  justify-content: ${({ displayStyle }) =>
    displayStyle !== "none" ? "center" : "flex-start"};
`;

export default {
  Container,
  UnorderedList,
  ListItem,
  Marker,
  TextContent,
};
