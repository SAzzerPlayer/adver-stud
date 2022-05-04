import React from "react";
import Styled from "./styles";
import { HoverLink } from "src/components/shared";
import { GatsbyImage } from "gatsby-plugin-image";
import { getBottomBarSocialTabs, getBottomBarTabs } from "./funcs";
import { ContentfulSiteOptions } from "../../../graphql/generated";

const Footer: React.FC<ContentfulSiteOptions> = (props) => {
  const tabLinks = getBottomBarTabs(props).map(({ url, title }, index) => (
    <HoverLink key={index} to={url}>
      <h6>{title}</h6>
    </HoverLink>
  ));
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.ContentRow>
          <HoverLink to={"/"}>
            <h4>AdverStud</h4>
          </HoverLink>
          <Styled.Tabs className={"only-not-device"}>{tabLinks}</Styled.Tabs>
          <Styled.Social>
            {getBottomBarSocialTabs(props).map(
              ({ url, image, alt = "Image" }, index) => (
                <HoverLink key={index} to={url}>
                  <GatsbyImage alt={alt} image={image} />
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
