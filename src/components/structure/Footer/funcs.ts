import { ContentfulSiteOptions } from "src/graphql/generated";

export const getBottomBarTabs = (
  result: ContentfulSiteOptions
): { url: string; title: string; locale?: string }[] =>
  (result.bottomBarTabs || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      title: tab?.title!,
      locale: tab?.node_locale,
    }))
    .filter((tab) => !!tab.url && !!tab.title);

export const getBottomBarSocialTabs = (result: ContentfulSiteOptions) =>
  (result.bottomBarSocialLinks || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      alt: tab?.image?.description!,
      image: tab?.image?.gatsbyImage,
    }))
    .filter((tab) => !!tab.url && !!tab.image);
