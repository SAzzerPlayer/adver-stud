import React from "react";
import Styled from "./styles";
import { HoverLink, Icon } from "src/components/shared";
import { colors } from "src/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import { TPageOptions } from "../../../types";

const Header: React.FC<TPageOptions> = ({
  topBarLogo,
  topBarLinks,
  topBarSocialLinks,
}) => {
  const logoUrl = topBarLogo.url.url || "/";
  const logoTitle = topBarLogo.title || "AdverStud";

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
          {topBarLinks.map(({ url, node_locale, title }, index) => (
            <HoverLink key={index} to={url.url} locale={node_locale}>
              <h6>{title}</h6>
            </HoverLink>
          ))}
        </Styled.Tabs>
        <Styled.Social>
          {topBarSocialLinks.map(
            ({ url, image, title, node_locale }, index) => (
              <HoverLink key={index} to={url.url} locale={node_locale}>
                {image ? (
                  <GatsbyImage
                    alt={image.description}
                    image={image.gatsbyImageData}
                  />
                ) : (
                  <h6>title</h6>
                )}
              </HoverLink>
            )
          )}
        </Styled.Social>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Header;
