import * as React from "react";
import { Layout } from "../../components/Layout";
import { SEO } from "../../components/SEO";

const StudentPage = () => {
  return (
    <>
      <SEO title={"Студентам"} />
      <Layout>
        <h3 style={{ textAlign: "center" }}>Студентам - Кульний контент :)</h3>
      </Layout>
    </>
  );
};

export default StudentPage;
