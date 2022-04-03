import React from "react";
import { YellowHoverInternalLink, YellowHoverExternalLink } from "../../shared";
import { Container, TextContent, Title } from "./styles";

export interface IAttentionInfoBlockProps {
  title: string;
  imageSrcPath: string;
  imageAlt?: string;
  link?: {
    url: string;
    title: string;
    type: "external" | "internal";
  };
  reversed?: boolean;
  children: React.ReactNode;
}

export const AttentionInfoBlock: React.FC<IAttentionInfoBlockProps> = ({
  link,
  title,
  imageSrcPath,
  imageAlt,
  children: description,
  reversed = false,
}) => {
  const content = [
    <TextContent>
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
    <img
      src={imageSrcPath}
      alt={imageAlt || "Іллюстрація"}
      width={418}
      height={418}
    />,
  ];
  return <Container>{reversed ? content.reverse() : content}</Container>;
};
