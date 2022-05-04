import React from "react";
import Styled from "./styles";
import { HoverLink, Icon } from "src/components/shared";
import { colors } from "src/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import { getTopBarSocialTabs, getTopBarTabs } from "./funcs";
import { ContentfulSiteOptions } from "../../../graphql/generated";

const Header: React.FC<ContentfulSiteOptions> = (props) => {
  const logoUrl = props.topBarLogo?.url?.url || "/";
  const logoTitle = props.topBarLogo?.title || "AdverStud";

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
          {getTopBarTabs(props).map(({ url, title, locale }, index) => (
            <HoverLink key={index} to={url} locale={locale}>
              <h6>{title}</h6>
            </HoverLink>
          ))}
        </Styled.Tabs>
        <Styled.Social>
          {getTopBarSocialTabs(props).map(
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
