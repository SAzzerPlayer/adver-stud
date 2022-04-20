import * as React from "react";
import { Layout } from "src/_components/Layout";
import { SEO } from "src/_components/SEO";
import { ColumnContent } from "src/_components/shared";
import { TitleBlock } from "src/_components/blocks";

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
