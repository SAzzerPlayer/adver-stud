import { graphql, useStaticQuery } from "gatsby";
import { FindSiteMainOptionsBottomTabQuery } from "src/graphql/generated";

export const useStaticFooterData = (): FindSiteMainOptionsBottomTabQuery =>
  useStaticQuery(graphql`
    query FindSiteMainOptionsBottomTab {
      contentfulSiteOptions(contentfulid: { regex: "/Main/" }) {
        id
        node_locale
        contentfulid
        contentful_id
        bottomBarLogo {
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
        bottomBarTabs {
          id
          node_locale
          title
          url {
            url
          }
        }
        bottomBarSocialLinks {
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
