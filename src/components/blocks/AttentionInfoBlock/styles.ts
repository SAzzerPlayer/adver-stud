import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8em;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
