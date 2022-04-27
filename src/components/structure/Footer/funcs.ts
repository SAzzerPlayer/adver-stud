import { FindSiteMainOptionsBottomTabQuery } from "src/graphql/generated";

export const getBottomBarTabs = (
  result: FindSiteMainOptionsBottomTabQuery
): { url: string; title: string; locale?: string }[] =>
  (result.contentfulSiteOptions?.bottomBarTabs || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      title: tab?.title!,
      locale: tab?.node_locale,
    }))
    .filter((tab) => !!tab.url && !!tab.title);

export const getBottomBarSocialTabs = (
  result: FindSiteMainOptionsBottomTabQuery
) =>
  (result.contentfulSiteOptions?.bottomBarSocialLinks || [])
    .map((tab) => ({
      url: tab?.url?.url!,
      alt: tab?.image?.description!,
      image: tab?.image?.gatsbyImage,
    }))
    .filter((tab) => !!tab.url && !!tab.image);
