import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { H2, ColumnContent, Paragraph } from "../components/shared";
import { TitleBlock } from "../components/blocks";

const DepartmentPage = () => {
  return (
    <>
      <SEO title={"Наша кафедра"} />
      <Layout>
        <ColumnContent>
          <TitleBlock
            title={"Кафедра реклами та зв'язків \n" + "з громадськістю"}
            description={'Still in progress'}
          />
        </ColumnContent>
      </Layout>
    </>
  );
};

export default DepartmentPage;
