import React from "react";
import {
  HeaderContainer,
  LogoLink,
  MockIconBody,
  OnChapterLink,
  SiteChapters,
  SocialIcons,
} from "./styles";
import { siteChapters, socialSiteChapters } from "./options";
import { HoverLink } from "../../shared/HoverLink";

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
          <HoverLink key={i} to={s.link}>
            <MockIconBody>{s.title}</MockIconBody>
          </HoverLink>
        ))}
      </SocialIcons>
    </HeaderContainer>
  );
};
