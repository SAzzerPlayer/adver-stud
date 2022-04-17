import React from "react";
import Styled from "./styles";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

export interface IFooterProps {
  tabs: {
    url: string;
    text: string;
  }[];
  iconTabs: {
    url: string;
    image: IGatsbyImageData;
  }[];
}

const Footer: React.FC<IFooterProps> = () => {
  return <Styled.Container>{null}</Styled.Container>;
};

export default Footer;
