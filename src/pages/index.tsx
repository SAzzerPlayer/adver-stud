import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { attentionBlocks } from "../options/pages/start";
import { AttentionInfoBlock } from "../components/blocks/AttentionInfoBlock";
import { ColumnContent } from "../components/shared/ColumnContent";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
    query AllPngImages {
      allFile(filter: { relativePath: { regex: "/.png/" } }) {
        totalCount
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 418, width: 418)
              id
            }
            name
          }
        }
      }
    }
  `;

const IndexPage: React.FC = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <>
      <SEO title={"Абітурієнтам"} />
      <Layout>
        <ColumnContent>
          {attentionBlocks.map((block, i) => (
            <AttentionInfoBlock key={i} {...block} reversed={!!(i % 2)} />
          ))}
        </ColumnContent>
      </Layout>
    </>
  );
};

export default IndexPage;
