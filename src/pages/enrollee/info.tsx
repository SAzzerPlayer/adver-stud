import { SEO } from "../../components/SEO";
import { Layout } from "../../components/Layout";
import { attentionBlocks } from "../../options/pages/enrollee/info";
import { AttentionInfoBlock } from "../../components/blocks/AttentionInfoBlock";
import * as React from "react";
import styled from "styled-components";
import { getGapStyle } from "../../styles/common";

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${getGapStyle("192px", "column")};
  box-sizing: border-box;
`;

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
