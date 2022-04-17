import { TIconName } from "src/_components/Icon";
import { IGatsbyImageData } from "gatsby-plugin-image";

export type TLinkToSite = {
  title: string;
  link: string;
  icon?: TIconName;
};

export type TTextLink = {
  url: string;
  title: string;
};

export type TImageLink = {
  url: string;
  image: IGatsbyImageData;
  alt?: string;
};
