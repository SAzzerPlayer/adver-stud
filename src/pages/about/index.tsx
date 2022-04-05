import * as React from "react";
import { Layout } from "../../components/Layout";
import { SEO } from "../../components/SEO";
import { attentionBlocks } from "../../options/pages/about";
import { AttentionInfoBlock } from "../../components/blocks/AttentionInfoBlock";
import styled from "styled-components";
import { getGapStyle } from "../../styles/common";

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${getGapStyle("192px", "column")};
  box-sizing: border-box;
`;

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
