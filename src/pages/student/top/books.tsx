import * as React from "react";
import { Layout } from "../../../components/Layout";
import { SEO } from "../../../components/SEO";
import { ColumnContent } from "../../../components/shared/ColumnContent";
import { attentionBlocks } from "../../../options/pages/student/top/books";
import { AttentionInfoBlock } from "../../../components/blocks/AttentionInfoBlock";

const TopBooksPage = () => {
  return (
    <>
      <SEO title={"Топ-5 книг з PR"} />
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

export default TopBooksPage;
