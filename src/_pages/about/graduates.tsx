import * as React from "react";
import { Layout } from "src/_components/Layout";
import { SEO } from "src/_components/SEO";
import { attentionBlocks } from "src/options/pages/about/graduates";
import { AttentionInfoBlock, TitleBlock } from "src/_components/blocks";
import { ColumnContent } from "src/_components/shared";

const AboutGraduatesPage = () => {
  return (
    <>
      <SEO title={"Видатні випускники"} />
      <Layout>
        <ColumnContent>
          <TitleBlock
            title={"Видатні випускники"}
            description={
              "Факультет систем і засобів масової комунікації Дніпровського національного університету імені Олеся Гончара – це найталановитіші студенти, найпрофесійніші викладачі, дружня атмосфера і безмежні можливості!\n" +
              "Наші випускники працюють по всьому світу і в самих різних областях. Хтось подався за моря покращувати західну журналістику, хтось залишився тут і створив власні проекти, а хтось - зовсім змінив професію і зайнявся створенням фільмів. Але всіх їх об'єднує одне – любов і вдячність до факультету, а головне – працюючих на ньому людей."
            }
          />
          {attentionBlocks.map((block, i) => (
            <AttentionInfoBlock key={i} {...block} reversed={!!(i % 2)} />
          ))}
        </ColumnContent>
      </Layout>
    </>
  );
};

export default AboutGraduatesPage;
