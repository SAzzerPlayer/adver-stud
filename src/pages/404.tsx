import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

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
