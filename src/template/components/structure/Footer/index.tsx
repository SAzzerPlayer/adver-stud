import React from "react";
import Styled from "./styles";
import { HoverLink } from "src/components/shared";
import { GatsbyImage } from "gatsby-plugin-image";
import { TPageOptions } from "../../../../types";

const Footer: React.FC<TPageOptions> = ({
  bottomBarLogo,
  bottomBarLinks,
  bottomBarSocialLinks,
}) => {
  const tabLinks = bottomBarLinks.map(({ url, title, node_locale }, index) => (
    <HoverLink key={index} to={url.url} locale={node_locale}>
      <h6>{title}</h6>
    </HoverLink>
  ));
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.ContentRow>
          <HoverLink
            to={bottomBarLogo.url.url}
            locale={bottomBarLogo.node_locale}
          >
            <h4>{bottomBarLogo.title}</h4>
          </HoverLink>
          <Styled.Tabs className={"only-not-device"}>{tabLinks}</Styled.Tabs>
          <Styled.Social>
            {bottomBarSocialLinks.map(
              ({ url, image, node_locale, title }, index) => (
                <HoverLink key={index} to={url.url} locale={node_locale}>
                  {image ? (
                    <GatsbyImage
                      alt={image.description}
                      image={image.gatsbyImageData}
                    />
                  ) : (
                    <h6>{title}</h6>
                  )}
                </HoverLink>
              )
            )}
          </Styled.Social>
        </Styled.ContentRow>
        <Styled.ContentRow className={"only-device"}>
          <Styled.Tabs>{tabLinks}</Styled.Tabs>
        </Styled.ContentRow>
        <p>@ {new Date().getFullYear()} AdverStud</p>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Footer;
