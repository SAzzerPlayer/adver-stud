import type { GatsbyConfig } from "gatsby";
import { breakpoints } from "./src/styles";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `AdverStud`,
    siteUrl: `https://adverstud.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["png"],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: Object.values(breakpoints)
            .map((s) => s.split("px")[0])
            .map(Number)
            .sort(),
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lora", "Merriweather"],
        },
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7l842l07s140`,
        accessToken: `7XYHTS07k1_--aBxCAxwW3l3Pufp3mxK05PREmgDwuc`,
      },
    },
    {
      resolve: `gatsby-source-contentful-locales`,
      options: {
        spaceId: `7l842l07s140`,
        accessToken: `7XYHTS07k1_--aBxCAxwW3l3Pufp3mxK05PREmgDwuc`,
      },
    },
    "gatsby-plugin-root-import",
  ],
};

export default config;
