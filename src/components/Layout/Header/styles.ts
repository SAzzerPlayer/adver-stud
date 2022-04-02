import styled from "styled-components";
import { colors, shadows } from "../../../styles";
import { HoverLink } from "../../shared/HoverLink";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  padding: 18px 5em;
  gap: 1.5em;
  background-color: ${colors.backgroundGray};
  box-shadow: ${shadows.soft};
`;

export const LogoLink = styled(HoverLink)`
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
  gap: 3em;
`;

export const OnChapterLink = styled(HoverLink)`
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
  column-gap: 1em;
  & a {
    max-height: 32px;
  }
`;

export const MockIconBody = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${colors.backgroundDarkGray};
`;
