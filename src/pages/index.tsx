import * as React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Sticker } from "../components/Sticker";
import { colors } from "../styles";

const IndexPage = () => {
  return (
    <>
      <SEO title={"Абітурієнтам"} />
      <Layout>
        <h3 style={{ textAlign: "center" }}>
          Абітурієнтам - Кульний контент :)
        </h3>
          <div style={{display: 'flex', flexDirection: 'row'}}>
        <Sticker
          title={"Follow"}
          contentColor={colors.backgroundWhite}
          stickerColor={colors.accentGreen}
        />
        <Sticker
          title={""}
          icon={"star"}
          contentColor={colors.backgroundWhite}
          stickerColor={colors.accentGreen}
        /></div>
      </Layout>
    </>
  );
};

export default IndexPage;
