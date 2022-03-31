import * as React from "react";
import { Layout } from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout title={"Абітурієнтам"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          minHeight: 256,
          flex: 1,
        }}
      >
        <h1>Кульний контент :)</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
