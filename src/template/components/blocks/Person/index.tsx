import React from "react";
import { TPersonBlock } from "../../../../types";
import Styles from "./styles";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { HoverLink } from "../../../../components/shared";

const PersonBlock: React.FC<TPersonBlock> = ({
  image,
  description,
  socialLinks,
}) => {
  return (
    <Styles.Container>
      {!!image && (
        <GatsbyImage
          className={"photo"}
          alt={image.description}
          image={image.gatsbyImageData}
        />
      )}
      {!!description && (
        <Styles.TextContent>
          {renderRichText({ ...description, references: [] })}
        </Styles.TextContent>
      )}
      {!!socialLinks && (
        <Styles.SocialLinks>
          {socialLinks.map(({ id, image, title, url, node_locale }) => (
            <HoverLink key={id} to={url.url} locale={node_locale}>
              {image ? (
                <GatsbyImage
                  className={"social-icon"}
                  alt={image.description}
                  image={image.gatsbyImageData}
                />
              ) : (
                <h6>{title}</h6>
              )}
            </HoverLink>
          ))}
        </Styles.SocialLinks>
      )}
    </Styles.Container>
  );
};

export default PersonBlock;
