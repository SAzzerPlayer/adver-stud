import React from "react";
import { SEO } from "src/components/SEO";
import { Page, Header, Content, Footer } from "src/components/structure";
import { ContentfulPage } from "graphql/generated";
import { GlobalStyle } from "src/components/GlobalStyle";

const Template: React.FC<any> = ({ pageContext }) => {
  const { title, description } = pageContext as ContentfulPage;

  return (
    <>
      <SEO title={title!} description={description?.description} />
      <GlobalStyle />
      <Page>
        <Header />
        <Content>
          <h1>Hello</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
          <h5>Hello</h5>
          <h6>Hello</h6>
        </Content>
        <Footer />
      </Page>
    </>
  );
};

export default Template;
