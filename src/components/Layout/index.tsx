import React from "react";
import { Page, Content, Margins } from "./styles";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Page>
      <Header />
      <Margins>
        <Content>{children}</Content>
      </Margins>
      <Footer />
    </Page>
  );
};
