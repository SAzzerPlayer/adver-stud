import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import styled from "styled-components";
import { attentionBlocks } from "../options/pages/start";
import { AttentionInfoBlock } from "../components/blocks/AttentionInfoBlock";

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 192px;
`;

const IndexPage = () => {
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
