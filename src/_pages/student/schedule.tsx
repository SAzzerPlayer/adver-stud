import * as React from "react";
import { Layout } from "src/_components/Layout";
import { SEO } from "src/_components/SEO";
import { ColumnContent, H2 } from "src/_components/shared";
import { TitleBlock } from "src/_components/blocks";
import styled from "styled-components";
import { BadgeCollectionBlock } from "src/_components/blocks";
import {
  semestrBadgeCollectionItems,
  sessionBadgeCollectionItems,
} from "../../options/pages/student/schedule";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentPage = () => {
  return (
    <>
      <SEO title={"Розклад"} />
      <Layout>
        <ColumnContent>
          <TitleBlock
            title={"Розклад"}
            description={
              "Навчальний розклад, розклад сесії та графіки перескладань розміщені тут. Скрольте вниз."
            }
          />
          <FlexColumn>
            <H2>Розклад сесії 1 семестр 2021-2022 н.р.</H2>
            <BadgeCollectionBlock
              items={sessionBadgeCollectionItems}
              variant={"yellow"}
            />
          </FlexColumn>
          <FlexColumn>
            <H2>Розклад 1 семестр 2021-2022 н.р.</H2>
            <BadgeCollectionBlock
              items={semestrBadgeCollectionItems}
              variant={"yellow"}
            />
          </FlexColumn>
        </ColumnContent>
      </Layout>
    </>
  );
};

export default StudentPage;
