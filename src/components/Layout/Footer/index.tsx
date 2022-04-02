import React from "react";
import {
  FooterContainer,
  LinksRow,
  FooterLogoLink,
  OutsideLinksRow,
  OutsideTextLink,
  AboutInformationRow,
  AboutText,
  SocialIcons,
  MockIconBody,
} from "./styles";
import { outsideSiteLinks, socialSiteChapters } from "../../../options";
import { HoverLink } from "../../shared/HoverLink";
import { Icon } from "../../Icon";
import { colors } from "../../../styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LinksRow>
        <FooterLogoLink to={"/"}>AdverStud</FooterLogoLink>
        <OutsideLinksRow>
          {outsideSiteLinks.map((s, i) => (
            <OutsideTextLink key={i} to={s.link}>
              {s.title}
            </OutsideTextLink>
          ))}
        </OutsideLinksRow>
        <SocialIcons>
          {socialSiteChapters.map((s, i) => (
            <HoverLink key={i} to={s.link}>
              {s.icon ? (
                <Icon name={s.icon} color={colors.backgroundGray} />
              ) : null}
            </HoverLink>
          ))}
        </SocialIcons>
      </LinksRow>
      <AboutInformationRow>
        <AboutText>@ {new Date().getFullYear()} AdverStud</AboutText>
      </AboutInformationRow>
    </FooterContainer>
  );
};
