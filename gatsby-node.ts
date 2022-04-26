import { GatsbyNode } from "gatsby";
import {
  GetAllSiteContentQuery,
  GetAllSiteContentDocument,
} from "./src/graphql/generated";
const path = require("path");

const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const result = await graphql(GetAllSiteContentDocument);
  const data = result?.data as GetAllSiteContentQuery;
  const defaultLocale = data.allContentfulLocale.edges.find(
    (e) => e.node.default
  );
  for (const node of data?.allContentfulPage?.nodes || []) {
    actions.createPage({
      path: `${
        node.node_locale !== defaultLocale?.node.code
          ? `/${node.node_locale}`
          : ""
      }${node.url!.trim()}`,
      component: path.resolve("src/template/page.tsx"),
      context: {
        ...node,
      },
    });
  }
};

exports.createPages = createPages;
