import React from "react";
import { SEO } from "../components/SEO";
import { Layout } from "../components/Layout";
import { ContentfulPage } from "../../graphql/generated";

const Template: React.FC<any> = ({ pageContext, children }) => {
  const { title } = pageContext as ContentfulPage;

  return (
    <>
      <SEO title={title!} />
      <Layout>{children}</Layout>
    </>
  );
};

export default Template;
