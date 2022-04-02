import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

const IndexPage = () => {
  return (
    <>
      <SEO title={"Абітурієнтам"} />
      <Layout>
        <h3 style={{ textAlign: "center" }}>
          Абітурієнтам - Кульний контент :)
        </h3>
      </Layout>
    </>
  );
};

export default IndexPage;
