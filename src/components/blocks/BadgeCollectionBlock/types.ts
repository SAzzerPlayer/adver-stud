export type TBadgeCollectionCardVariant = "lightGray" | "yellow";

export type TBadgeItem = {
  title?: string;
  text: string;
  link?: {
    url: string;
    type: "internal" | "external";
  };
};
