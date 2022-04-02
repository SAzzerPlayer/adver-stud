import React from "react";
import { Helmet } from "react-helmet";

interface ISEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<ISEOProps> = ({ title, description }) => {
  return (
    <Helmet title={title}>
      {!!description && <meta name="description" content={description} />}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={"*"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};
