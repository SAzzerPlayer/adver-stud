import { IGatsbyImageData } from "gatsby-plugin-image";

export type TRichText = {
  raw: string;
};

export type TImage = {
  title: string;
  description: string;
  gatsbyImageData: IGatsbyImageData;
};

export type TLink = {
  id: string;
  node_locale: string;
  title: string;
  url: {
    url: string;
  };
  image?: TImage;
};

export type TPageOptions = {
  id: string;
  type: "page-options";
  topBarLogo: TLink;
  topBarLinks: TLink[];
  topBarSocialLinks: TLink[];
  bottomBarLogo: TLink;
  bottomBarLinks: TLink[];
  bottomBarSocialLinks: TLink[];
};

export type TActionBlockTextPosition = "onLeftSide" | "onRightSide";

export type TActionBlock = {
  id: string;
  type: "action-block";
  textPosition: TActionBlockTextPosition;
  illustration: TImage;
  article: TRichText;
  button?: TLink;
};

export type TPersonBlock = {
  id: string;
  type: "person";
  image: TImage;
  socialLinks?: TLink[];
  description: TRichText;
};

export type TTextBlockAlignTo = "Left" | "Center" | "Right";

export type TTextBlock = {
  id: string;
  type: "text-block";
  text: TRichText;
  alignTextTo: TTextBlockAlignTo;
};

export type TTipListBlockStyle = "none" | "gray" | "yellow";

export type TTipListBlockTipMarker =
  | "none"
  | "nums"
  | "circle&nums"
  | "attention";

export type TTipListBlock = {
  id: string;
  type: "tip-list";
  style: TTipListBlockStyle;
  tipMarker: TTipListBlockTipMarker;
  amountOfColumns: number;
  tips: TRichText;
};

export type TTableBlockColumnTextAlign = "left" | "center" | "right";

export type TTableBlockColumn = {
  id: string;
  type: "table-column";
  title: string;
  content: TRichText;
  align: TTableBlockColumnTextAlign;
};

export type TTableBlock = {
  id: string;
  type: "table";
  numerateRows: boolean;
  columns: TTableBlockColumn[];
};

export type TGridBlockRatio =
  | "0"
  | "5"
  | "10"
  | "15"
  | "20"
  | "25"
  | "30"
  | "35"
  | "40"
  | "45"
  | "50"
  | "55"
  | "60"
  | "65"
  | "70"
  | "75"
  | "80"
  | "85"
  | "90"
  | "95"
  | "100";

export type TGridBlockColumnBlock =
  | TActionBlock
  | TPersonBlock
  | TTextBlock
  | TTableBlock
  | TTipListBlock;

export type TGridBlockColumn = TGridBlockColumnBlock[];

export type TGridBlockAlignColumns = "fromLeftToRight" | "fromRightToLeft";

export type TGridBlock = {
  id: string;
  type: "grid";
  ratio: TGridBlockRatio[];
  alignColumnsOnMobile: TGridBlockAlignColumns;
  column_1: TGridBlockColumn;
  column_2: TGridBlockColumn;
  column_3?: TGridBlockColumn;
  column_4?: TGridBlockColumn;
};

export type TTabsBlockColumnContentBlock =
  | TGridBlock
  | TActionBlock
  | TTextBlock
  | TPersonBlock
  | TTableBlock
  | TTipListBlock;

export type TTabsBlockColumnContent = TTabsBlockColumnContentBlock[];

export type TTabsBlockColumn = {
  id: string;
  type: "tabs-column";
  title: string;
  content: TTabsBlockColumnContent;
};

export type TTabsBlock = {
  id: string;
  initialTab: number;
  tabs: TTabsBlockColumn[];
};

export type TContentBlockMargin = "small" | "medium" | "large";

export type TContentBlockColumnBlock =
  | TActionBlock
  | TPersonBlock
  | TTextBlock
  | TTableBlock
  | TTipListBlock
  | TGridBlock
  | TTabsBlock;

export type TContentBlockColumn = TContentBlockColumnBlock[];

export type TContentBlock = {
  id: string;
  type: "content-block";
  margin: TContentBlockMargin;
  blocks: TContentBlockColumn;
};

export type TLocale = {
  id: string;
  default: boolean;
  fallbackCode?: string;
  code: string;
  name: string;
};

export type TPage = {
  id: string;
  type: "page";
  node_locale: string;
  url: string;
  title: string;
  description: {
    description: string;
  };
  options: TPageOptions;
  content: TContentBlock[];
};

export type TGetAllPagesQuery = {
  locales: {
    nodes: TLocale[];
  };
  pages: {
    nodes: TPage[];
  };
};
