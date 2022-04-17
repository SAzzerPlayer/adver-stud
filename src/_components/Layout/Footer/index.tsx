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
} from "./styles";
import { outsideSiteLinks, socialSiteChapters } from "../../../options";
import { HoverExternalLink } from "../../shared";
import { Icon } from "../../Icon";
import { colors } from "../../../styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LinksRow>
        <FooterLogoLink to={"/"}>AdverStud</FooterLogoLink>
        <OutsideLinksRow>
          {outsideSiteLinks.map((s, i) => (
            <OutsideTextLink key={i} href={s.link}>
              {s.title}
            </OutsideTextLink>
          ))}
        </OutsideLinksRow>
        <SocialIcons>
          {socialSiteChapters.map((s, i) => (
            <HoverExternalLink key={i} href={s.link}>
              {s.icon ? (
                <Icon name={s.icon} color={colors.backgroundGray} />
              ) : null}
            </HoverExternalLink>
          ))}
        </SocialIcons>
      </LinksRow>
      <AboutInformationRow>
        <AboutText>@ {new Date().getFullYear()} AdverStud</AboutText>
      </AboutInformationRow>
    </FooterContainer>
  );
};
