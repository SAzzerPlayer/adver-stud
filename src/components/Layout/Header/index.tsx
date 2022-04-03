import React from "react";
import {
  HeaderContainer,
  LogoLink,
  OnChapterLink,
  SiteChapters,
  SocialIcons,
} from "./styles";
import { siteChapters, socialSiteChapters } from "../../../options";
import { HoverExternalLink } from "../../shared";
import { Icon } from "../../Icon";
import { colors } from "../../../styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoLink to={"/"}>AdverStud</LogoLink>
      <SiteChapters>
        {siteChapters.map((s, i) => (
          <OnChapterLink key={i} to={s.link}>
            {s.title}
          </OnChapterLink>
        ))}
      </SiteChapters>
      <SocialIcons>
        {socialSiteChapters.map((s, i) => (
          <HoverExternalLink key={i} href={s.link}>
            {s.icon ? <Icon name={s.icon} color={colors.accentBlack} /> : null}
          </HoverExternalLink>
        ))}
      </SocialIcons>
    </HeaderContainer>
  );
};
