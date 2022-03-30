import React from "react";
import { Fonts } from "./Fonts";
import { Page } from "./styles";

interface ILayoutProps {
  title: string;
}

export const Layout: React.FC<ILayoutProps> = ({ title, children }) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <Fonts />
      </head>
      <Page>{children}</Page>
    </>
  );
};
