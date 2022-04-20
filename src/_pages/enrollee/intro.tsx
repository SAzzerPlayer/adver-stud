import { SEO } from "src/_components/SEO";
import { Layout } from "src/_components/Layout";
import { attentionBlocks } from "src/options/pages/enrollee/intro";
import { AttentionInfoBlock } from "src/_components/blocks";
import * as React from "react";
import { ColumnContent } from "src/_components/shared";

const IntroPage = () => {
  return (
    <>
      <SEO title={"Абітурієнту на замітку: як вступити на факультет"} />
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

export default IntroPage;
