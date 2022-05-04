import { GatsbyNode } from "gatsby";
import {
  GetAllSiteContentQuery,
  GetAllSiteContentDocument,
  GetAllSiteOptionsDocument,
  GetAllSiteOptionsQuery,
} from "./src/graphql/generated";

const path = require("path");

const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const data = (await graphql(GetAllSiteContentDocument))
    .data as GetAllSiteContentQuery;
  const options = (await graphql(GetAllSiteOptionsDocument))
    ?.data as GetAllSiteOptionsQuery;

  const defaultLocale = data.allContentfulLocale.edges.find(
    (e) => e.node.default
  );
  for (const node of data?.allContentfulPage?.nodes || []) {
    const localePrefix =
      node.node_locale !== defaultLocale?.node.code
        ? `/${node.node_locale}`
        : "";
    actions.createPage({
      path: `${localePrefix}${node.url!.trim()}`,
      component: path.resolve("src/template/page.tsx"),
      context: {
        ...node,
        options: options?.allContentfulSiteOptions?.nodes.find(
          (n) => n.node_locale === node.node_locale
        ),
      },
    });
  }
};

exports.createPages = createPages;
