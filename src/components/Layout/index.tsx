import React from "react";
import { Fonts } from "./Fonts";
import { Page, Content } from "./styles";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../styles/global.css";

interface ILayoutProps {
  title: string;
}

export const Layout: React.FC<ILayoutProps> = ({ title, children }) => {
  return (
    <>
      <title>{title}</title>
      <Fonts />
      <Page>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Page>
    </>
  );
};
