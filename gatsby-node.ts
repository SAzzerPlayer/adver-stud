import { GatsbyNode } from "gatsby";
import {
  GetAllSiteContentDocument,
  GetAllSiteContentQuery,
} from "./graphql/generated";
const path = require("path");

const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const result = await graphql(GetAllSiteContentDocument);
  const data = result?.data as GetAllSiteContentQuery;
  for (const node of (data?.allContentfulPage?.nodes || [])) {
    actions.createPage({
      path: node.url!.trim(),
      component: path.resolve("src/template/page.tsx"),
      context: {
        ...node,
      },
    });
  }
};

exports.createPages = createPages;
