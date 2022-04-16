import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { ColumnContent, ButtonInternalLink } from "../components/shared";
import { BadgeCollectionBlock, TitleBlock } from "../components/blocks";
import {
  bachelorBadgeCollectionItems,
  masterBadgeCollectionItems,
} from "../options/pages/publications";
import { getGapStyle } from "../styles/common";
import styled from "styled-components";

const TabView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${getGapStyle("24px", "row")}
  margin-bottom: 2em;
`;

const PublicationPage = () => {
  const isMasterView =
    typeof window !== "undefined"
      ? window.location.search.includes("master")
      : false;
  return (
    <>
      <SEO title={"Публікації"} />
      <Layout>
        <ColumnContent>
          <TitleBlock
            title={"Кваліфікаційні роботи студентів"}
            description={
              "Тут зібрані роботи студентів, які можна завантажити і подивитися в якості прикладу. "
            }
          />
          <div style={{ display: "column", flexDirection: "column" }}>
            <TabView>
              <ButtonInternalLink
                to={"/publications/?who=bachelor"}
                active={!isMasterView}
              >
                Бакалаври
              </ButtonInternalLink>
              <ButtonInternalLink
                to={"/publications/?who=master"}
                active={isMasterView}
              >
                Магістри
              </ButtonInternalLink>
            </TabView>
            <BadgeCollectionBlock
              items={
                isMasterView
                  ? masterBadgeCollectionItems
                  : bachelorBadgeCollectionItems
              }
              variant={"lightGray"}
            />
          </div>
        </ColumnContent>
      </Layout>
    </>
  );
};

export default PublicationPage;
