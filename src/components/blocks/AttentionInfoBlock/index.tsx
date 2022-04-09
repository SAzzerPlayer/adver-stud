import React from "react";
import { YellowHoverInternalLink, YellowHoverExternalLink } from "../../shared";
import { Container, TextContent, Title } from "./styles";
import { dequal } from "dequal";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, getImageData } from "gatsby-plugin-image";
import { TImageAssetName } from "../../../types/images";

const query = graphql`
  query GetAllImages {
    allFile(filter: { absolutePath: { regex: "/.png/" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 418, aspectRatio: 1)
          }
        }
      }
    }
  }
`;

export interface IAttentionInfoBlockProps {
  title: string;
  imageName: TImageAssetName;
  imageAlt?: string;
  link?: {
    url: string;
    title: string;
    type: "external" | "internal";
  };
  reversed?: boolean;
  children: React.ReactNode;
}

export const AttentionInfoBlock = React.memo<IAttentionInfoBlockProps>(
  ({
    link,
    title,
    children: description,
    reversed = false,
    imageAlt,
    imageName = "bonuses",
  }) => {
    const data = useStaticQuery(query);
    const image = getImage(
      data.allFile.edges.find((e: any) => e.node.name === imageName)?.node
    );

    const content = [
      <TextContent key={"content"}>
        <Title style={{ whiteSpace: "pre-wrap" }}>{title}</Title>
        {description}
        {!!link &&
          (link.type === "external" ? (
            <YellowHoverExternalLink href={link.url}>
              {link.title}
            </YellowHoverExternalLink>
          ) : (
            <YellowHoverInternalLink to={link.url}>
              {link.title}
            </YellowHoverInternalLink>
          ))}
      </TextContent>,
      image ? (
        <GatsbyImage
          key="image"
          alt={imageAlt || "Іллюстрація"}
          image={image}
        />
      ) : null,
    ];
    return <Container>{reversed ? content.reverse() : content}</Container>;
  },
  dequal
);
