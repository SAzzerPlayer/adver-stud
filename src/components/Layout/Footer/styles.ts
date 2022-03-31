import styled from "styled-components";
import { colors } from "../../../styles";
import { HoverLink } from "../../shared/HoverLink";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2em;
  left: 0;
  right: 0;
  background-color: ${colors.accentBlack};
  padding: 38px 140px 28px 140px;
`;

export const LinksRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5em;
`;

export const FooterLogoLink = styled(HoverLink)`
  font-family: Merriweather, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: ${colors.backgroundGray};
`;

export const OutsideLinksRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
`;

export const OutsideTextLink = styled(HoverLink)`
  font-family: Lora, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 136%;
  text-align: center;
  color: ${colors.backgroundGray};
`;

export const AboutInformationRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AboutText = styled.span`
  font-family: Lora, serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: ${colors.backgroundGray};
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const MockIconBody = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${colors.backgroundGray};
`;
