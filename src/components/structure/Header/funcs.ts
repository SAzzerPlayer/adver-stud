import { FindSiteMainOptionsTopTabQuery } from "src/graphql/generated";

export const getTopBarTabs = (
  result: FindSiteMainOptionsTopTabQuery
): { url: string; title: string }[] =>
  (result.contentfulSiteOptions?.topBarTabs || [])
    .filter((tab) => tab?.node_locale === "uk-UA")
    .map((tab) => ({
      url: tab?.url?.url!,
      title: tab?.title!,
    }))
    .filter((tab) => !!tab.url && !!tab.title);

export const getTopBarSocialTabs = (result: FindSiteMainOptionsTopTabQuery) =>
  (result.contentfulSiteOptions?.topBarSocialLinks || [])
    .filter((tab) => tab?.node_locale === "uk-UA")
    .map((tab) => ({
      url: tab?.url?.url!,
      alt: tab?.image?.description!,
      image: tab?.image?.gatsbyImage,
    }))
    .filter((tab) => !!tab.url && !!tab.image);
