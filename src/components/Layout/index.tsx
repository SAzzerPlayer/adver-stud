import React from "react";
import { Page, Content } from "./styles";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../styles/global.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <Page>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Page>
  );
};
