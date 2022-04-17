// @ts-check
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
import { GatsbyNode } from "gatsby";
import {
  GetAllSiteContentDocument,
  GetAllSiteContentQuery,
} from "./graphql/generated";
const path = require("path");

const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const result = await graphql(GetAllSiteContentDocument);
  const data = result?.data as GetAllSiteContentQuery;
  for (const edge of (data?.allContentfulPage?.edges || [])) {
    actions.createPage({
      path: edge.node.url!,
      component: path.resolve("src/template/page.tsx"),
      context: {
        ...edge.node,
      },
    });
  }
};

exports.createPages = createPages;
