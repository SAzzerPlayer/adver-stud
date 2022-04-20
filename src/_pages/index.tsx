import * as React from "react";
import { Layout } from "src/_components/Layout";
import { SEO } from "src/_components/SEO";
import { attentionBlocks } from "src/options/pages/start";
import { AttentionInfoBlock } from "src/_components/blocks/AttentionInfoBlock";
import { ColumnContent } from "src/_components/shared/ColumnContent";

const IndexPage: React.FC = () => {
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
