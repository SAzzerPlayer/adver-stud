import styled from "styled-components";
import { colors, shadows } from "../../../styles";
import { HoverInternalLink } from "../../shared";
import { getGapStyle } from "../../../styles/common";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  padding: 0 5em;
  background-color: ${colors.backgroundGray};
  box-shadow: ${shadows.soft};
  ${getGapStyle("1.5em", "row")}
`;

export const LogoLink = styled(HoverInternalLink)`
  font-family: Merriweather, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  color: ${colors.backgroundDarkGray};
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

export const SiteChapters = styled.div`
  display: flex;
  align-items: center;
  ${getGapStyle("3em", "row")}
`;

export const OnChapterLink = styled(HoverInternalLink)`
  font-family: Lora, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: ${colors.backgroundDarkGray};
  text-decoration: none;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  ${getGapStyle("1em", "row")}
  & a {
    max-height: 32px;
  }
`;
