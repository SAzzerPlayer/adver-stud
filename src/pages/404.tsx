import * as React from "react";
import { Layout } from "src/_components/Layout";
import { SEO } from "src/_components/SEO";

const NotFoundPage = () => {
  return (
    <>
      <SEO title={"Ресурс не знайден"} />
      <Layout>
        <h3 style={{ textAlign: "center" }}>
          Щось трапилось, бажаний ресурс не знайдено :(
        </h3>
      </Layout>
    </>
  );
};

export default NotFoundPage;
