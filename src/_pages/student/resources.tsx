import * as React from "react";
import { Layout } from "../../components/Layout";
import { SEO } from "../../components/SEO";
import { ColumnContent, H2 } from "../../components/shared";
import { TitleBlock } from "../../components/blocks";
import styled from "styled-components";
import { BadgeCollectionBlock } from "../../components/blocks";
import {
  disciplineBadgeCollectionItems,
  worksBadgeCollectionItems,
} from "../../options/pages/student/resources";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentPage = () => {
  return (
    <>
      <SEO title={"Матеріали для навчання"} />
      <Layout>
        <ColumnContent>
          <TitleBlock
            title={"Матеріали для навчання"}
            description={
              "Навчально-методичні посібники / посібники для самостійної роботи здобувачів вищої освіти та дистанційного навчання, електронні курси, конспекти лекцій / практикуми / методичні вказівки \n" +
              "/ рекомендації / робочі програми / інші друковані навчально-методичні праці."
            }
          />
          <FlexColumn>
            <H2>Навчально-методичні праці</H2>
            <BadgeCollectionBlock
              items={worksBadgeCollectionItems}
              variant={"yellow"}
            />
          </FlexColumn>
          <FlexColumn>
            <H2>Робочі програми дисциплін</H2>
            <BadgeCollectionBlock
              items={disciplineBadgeCollectionItems}
              variant={"yellow"}
            />
          </FlexColumn>
        </ColumnContent>
      </Layout>
    </>
  );
};

export default StudentPage;
