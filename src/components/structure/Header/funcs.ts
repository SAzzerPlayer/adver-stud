import { ContentfulSiteOptions } from "src/graphql/generated";

export const getTopBarTabs = (
  result: ContentfulSiteOptions
): { url: string; title: string; locale?: string }[] =>
  (result.topBarTabs || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      title: tab?.title!,
      locale: tab?.node_locale,
    }))
    .filter((tab) => !!tab.url && !!tab.title);

export const getTopBarSocialTabs = (result: ContentfulSiteOptions) =>
  (result.topBarSocialLinks || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      alt: tab?.image?.description!,
      image: tab?.image?.gatsbyImage,
      locale: tab?.node_locale,
    }))
    .filter((tab) => !!tab.url && !!tab.image);
