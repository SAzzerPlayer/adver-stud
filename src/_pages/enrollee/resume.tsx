import { SEO } from "../../components/SEO";
import { Layout } from "../../components/Layout";
import {
  attentionBlocks,
  methodBadgeCollectionItems,
} from "../../options/pages/enrollee/resume";
import {
  AttentionInfoBlock,
  BadgeCollectionBlock,
  TitleBlock,
} from "../../components/blocks";
import * as React from "react";
import { ColumnContent, H2, Paragraph } from "../../components/shared";

const ResumePage = () => {
  return (
    <>
      <SEO title={"Для абітурієнтів бакалаврів та магістрів!"} />
      <Layout>
        <ColumnContent>
          <TitleBlock
            title={"Для абітурієнтів бакалаврів та магістрів!"}
            description={
              "Освітня підготовка бакалаврів за спеціальністю «Журналістика» триває 4 роки. У Дніпровському національному університеті імені Олеся Гончара наявні як денна, так і заочна форми навчання.\n"
            }
          />
          <H2>Перелік деяких навчальних дисциплін бакалаврського рівня</H2>
          {attentionBlocks.map((block, i) => (
            <AttentionInfoBlock key={i} {...block} reversed={!!(i % 2)} />
          ))}
          <div style={{ flex: "display", flexDirection: "column" }}>
            <H2>Перелік навчальних дисциплін магістерського рівня (ОПП)</H2>
            <Paragraph>
              Магістерська освітня програма передбачає вивчення більше 30
              навчальних дисциплін.
            </Paragraph>
            <BadgeCollectionBlock
              items={methodBadgeCollectionItems}
              variant={"yellow"}
              showIndex
            />
          </div>
        </ColumnContent>
      </Layout>
    </>
  );
};

export default ResumePage;
