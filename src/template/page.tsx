import React from "react";
import { SEO } from "../components/SEO";
import { Layout } from "../components/Layout";

const Template: React.FC = (props) => {
  return (
    <>
      <SEO title={"template"} />
      <Layout>
        <h4>template</h4>
      </Layout>
    </>
  );
};

export default Template;
