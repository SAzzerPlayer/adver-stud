import { SEO } from "../../components/SEO";
import { Layout } from "../../components/Layout";
import { attentionBlocks } from "../../options/pages/enrollee/info";
import { AttentionInfoBlock } from "../../components/blocks/AttentionInfoBlock";
import * as React from "react";
import { ColumnContent } from "../../components/shared/ColumnContent";

const IndexPage = () => {
  return (
    <>
      <SEO title={"Контакти"} />
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
