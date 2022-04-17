import { SEO } from "../../components/SEO";
import { Layout } from "../../components/Layout";
import { attentionBlocks } from "../../options/pages/enrollee/intro";
import { AttentionInfoBlock } from "../../components/blocks";
import * as React from "react";
import { ColumnContent } from "../../components/shared";

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