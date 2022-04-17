import styled from "styled-components";
import { colors } from "../../../styles";
import { getGapStyle } from "../../../styles/common";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${getGapStyle("8em", "row")}
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  ${getGapStyle("20px", "column")}
  flex: 1;
`;

export const Title = styled.h2`
  font-family: Merriweather, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 124%;
  color: ${colors.accentBlack};
  margin: 0;
  padding: 0;
`;
