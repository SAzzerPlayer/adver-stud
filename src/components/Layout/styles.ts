import styled from "styled-components";
import { colors } from "../../styles";
import { getGapStyle } from "../../styles/common";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${colors.backgroundGray};
`;

export const Margins = styled.div`
  display: flex;
  flex: 1;
  margin: 0 5%;
  max-width: 1280px;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em 0 10em 0;
  flex: 1;
  max-width: 1280px;
  align-self: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  background-color: ${colors.accentBlack};
  padding: 38px 8em 28px 8em;
  ${getGapStyle("2em", "column")}
`;
