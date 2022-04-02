import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO title={"Про нас"} />
      <Layout>
        <h3 style={{ textAlign: "center" }}>Про нас - Кульний контент :)</h3>
      </Layout>
    </>
  );
};

export default AboutPage;
