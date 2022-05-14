import { GatsbyNode } from "gatsby";
import { getAllPagesDocument } from "./src/graphql";
import { TGetAllPagesQuery } from "./src/types";

const path = require("path");

const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { locales, pages } = (await graphql(getAllPagesDocument))
    .data as TGetAllPagesQuery;

  const defaultLocale = locales.nodes.find((e) => e.default);

  for (const node of pages.nodes) {
    const localePrefix =
      node.node_locale !== defaultLocale?.code ? `/${node.node_locale}` : "";

    actions.createPage({
      path: `${localePrefix}${node.url!.trim()}`,
      component: path.resolve("src/template/page.tsx"),
      context: {
        ...node,
      },
    });
  }
};

exports.createPages = createPages;
