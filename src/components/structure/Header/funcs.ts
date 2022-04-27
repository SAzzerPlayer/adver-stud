import { FindSiteMainOptionsTopTabQuery } from "src/graphql/generated";

export const getTopBarTabs = (
  result: FindSiteMainOptionsTopTabQuery
): { url: string; title: string; locale?: string }[] =>
  (result.contentfulSiteOptions?.topBarTabs || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      title: tab?.title!,
      locale: tab?.node_locale,
    }))
    .filter((tab) => !!tab.url && !!tab.title);

export const getTopBarSocialTabs = (result: FindSiteMainOptionsTopTabQuery) =>
  (result.contentfulSiteOptions?.topBarSocialLinks || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      alt: tab?.image?.description!,
      image: tab?.image?.gatsbyImage,
      locale: tab?.node_locale,
    }))
    .filter((tab) => !!tab.url && !!tab.image);
