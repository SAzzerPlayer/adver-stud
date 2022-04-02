import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

const DepartmentPage = () => {
  return (
    <>
      <SEO title={"Наша кафедра"} />
      <Layout>
        <h3 style={{ textAlign: "center" }}>
          Наша кафедра - Кульний контент :)
        </h3>
      </Layout>
    </>
  );
};

export default DepartmentPage;
