import * as React from "react";
import { Layout } from "src/_components/Layout";
import { SEO } from "src/_components/SEO";
import { ColumnContent } from "src/_components/shared/ColumnContent";
import { attentionBlocks } from "src/options/pages/student";
import { AttentionInfoBlock } from "src/_components/blocks/AttentionInfoBlock";

const StudentPage = () => {
  return (
    <>
      <SEO title={"Студентам"} />
      <Layout>
        <ColumnContent>
          {attentionBlocks.map((block,  i) => (
            <AttentionInfoBlock key={i} {...block} reversed={!!(i % 2)} />
          ))}
        </ColumnContent>
      </Layout>
    </>
  );
};

export default StudentPage;
