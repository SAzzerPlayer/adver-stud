import * as React from "react";
import { Layout } from "../../components/Layout";
import { SEO } from "../../components/SEO";
import { attentionBlocks } from "../../options/pages/about";
import { AttentionInfoBlock } from "../../components/blocks/AttentionInfoBlock";
import { ColumnContent } from "../../components/shared/ColumnContent";

const AboutPage = () => {
  return (
    <>
      <SEO title={"Про нас"} />
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

export default AboutPage;
