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
    </Helmet>
  );
};
