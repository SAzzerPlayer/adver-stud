import React from "react";
import Styled from "./styles";
import { HoverLink, Icon } from "src/components/shared";
import { colors } from "src/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticHeaderData } from "./useStaticHeaderData";
import { getTopBarSocialTabs, getTopBarTabs } from "./funcs";

const Header: React.FC = () => {
  const result = useStaticHeaderData();

  const logoUrl = result.contentfulOptions?.topBarLogo?.url?.url || "/";
  const logoTitle = result.contentfulOptions?.topBarLogo?.title || "AdverStud";

  return (
    <Styled.Container>
      <Styled.Content>
        <HoverLink to={logoUrl}>
          <h4 style={{ color: colors.accentDarkBlack }}>{logoTitle}</h4>
        </HoverLink>
        <Styled.MenuCheckbox />
        <Styled.MenuLabel>
          <Icon name={"menu"} size={24} />
          <Icon name={"close"} size={24} />
        </Styled.MenuLabel>
        <Styled.Tabs>
          {getTopBarTabs(result).map(({ url, title }, index) => (
            <HoverLink key={index} to={"/"}>
              <h6>{title}</h6>
            </HoverLink>
          ))}
        </Styled.Tabs>
        <Styled.Social>
          {getTopBarSocialTabs(result).map(
            ({ url, image, alt = "Image" }, index) => (
              <HoverLink key={index} to={url}>
                <GatsbyImage alt={alt} image={image} />
              </HoverLink>
            )
          )}
        </Styled.Social>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Header;
