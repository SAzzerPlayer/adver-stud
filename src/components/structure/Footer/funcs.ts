import { FindSiteMainOptionsBottomTabQuery } from "graphql/generated";

export const getBottomBarTabs = (
  result: FindSiteMainOptionsBottomTabQuery
): { url: string; title: string }[] =>
  (result.contentfulOptions?.bottomBarTabs || [])
    .filter((tab) => tab?.node_locale === "uk-UA")
    .map((tab) => ({
      url: tab?.url?.url!,
      title: tab?.title!,
    }))
    .filter((tab) => !!tab.url && !!tab.title);

export const getBottomBarSocialTabs = (
  result: FindSiteMainOptionsBottomTabQuery
) =>
  (result.contentfulOptions?.bottomBarSocialLinks || [])
    .filter((tab) => tab?.node_locale === "uk-UA")
    .map((tab) => ({
      url: tab?.url?.url!,
      alt: tab?.image?.description!,
      image: tab?.image?.gatsbyImage,
    }))
    .filter((tab) => !!tab.url && !!tab.image);
