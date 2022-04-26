import { graphql, useStaticQuery } from "gatsby";
import { FindSiteMainOptionsTopTabQuery } from "src/graphql/generated";

export const useStaticHeaderData = (): FindSiteMainOptionsTopTabQuery =>
  useStaticQuery(graphql`
    query FindSiteMainOptionsTopTab {
      contentfulSiteOptions(contentfulid: { regex: "/Main/" }) {
        id
        node_locale
        contentfulid
        contentful_id
        topBarLogo {
          id
          node_locale
          title
          url {
            url
          }
          image {
            gatsbyImageData
            description
          }
        }
        topBarTabs {
          id
          node_locale
          title
          url {
            url
          }
        }
        topBarSocialLinks {
          id
          node_locale
          url {
            url
          }
          image {
            id
            description
            gatsbyImage(width: 32, height: 32)
          }
        }
      }
    }
  `);
