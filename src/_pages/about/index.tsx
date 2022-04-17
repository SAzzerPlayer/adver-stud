import * as React from "react";
import { Layout } from "../../components/Layout";
import { SEO } from "../../components/SEO";
import {
  attentionBlocks,
  badgeCollectionItems,
} from "../../options/pages/about";
import { AttentionInfoBlock, TitleBlock } from "../../components/blocks";
import { ColumnContent, H2, Paragraph } from "../../components/shared";
import { BadgeCollectionBlock } from "../../components/blocks/BadgeCollectionBlock";

const AboutPage = () => {
  return (
    <>
      <SEO title={"Про нас"} />
      <Layout>
        <ColumnContent>
          <TitleBlock
            title={"Про нас"}
            description={
              "Цікаві факти про факультет та про нові можливості, які відкриваються перед студентами."
            }
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <H2>10 фактів про факультет</H2>
            <Paragraph>
              Десятка цікавинок, які розкажуть тобі про наш факультет від «А» до
              «Я».
            </Paragraph>
            <BadgeCollectionBlock
              items={badgeCollectionItems}
              variant={"lightGray"}
              showIndex
            />
          </div>
          {attentionBlocks.map((block, i) => (
            <AttentionInfoBlock key={i} {...block} reversed={!!(i % 2)} />
          ))}
        </ColumnContent>
      </Layout>
    </>
  );
};

export default AboutPage;