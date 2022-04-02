import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

const PublicationPage = () => {
  return (
    <>
      <SEO title={"Публікації"} />
      <Layout>
        <h3 style={{ textAlign: "center" }}>Публікації - Кульний контент :)</h3>
      </Layout>
    </>
  );
};

export default PublicationPage;
