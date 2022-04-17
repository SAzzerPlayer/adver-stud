import React from "react";
import { Helmet } from "react-helmet";

interface ISEOProps {
  title?: string;
  description?: string | null;
}

export const SEO: React.FC<ISEOProps> = ({ title, description }) => {
  return (
    <Helmet title={title} defaultTitle={"AdverStud"}>
      {!!description && <meta name="description" content={description} />}
    </Helmet>
  );
};
