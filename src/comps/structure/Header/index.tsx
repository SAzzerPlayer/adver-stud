import React from "react";
import Styled from "./styles";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

export interface IHeaderProps {
  tabs: {
    url: string;
    text: string;
  }[];
  iconTabs: {
    url: string;
    image: IGatsbyImageData;
  }[];
}

const Header: React.FC<IHeaderProps> = () => {
  return <Styled.Container>{null}</Styled.Container>;
};

export default Header;
