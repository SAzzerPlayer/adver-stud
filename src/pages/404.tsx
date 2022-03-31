import * as React from "react";
import { Layout } from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title={"Не знайдено ресурс"}>
      <h3 style={{ textAlign: "center" }}>
        Щось трапилось, бажаний ресурс не знайдено :(
      </h3>
    </Layout>
  );
};

export default NotFoundPage;
