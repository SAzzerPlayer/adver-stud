import React from "react";
import { SEO } from "../comps/SEO";
import { Page, Header, Content, Footer } from "src/comps/structure";
import { ContentfulPage } from "../../graphql/generated";
import { GlobalStyle } from "src/comps/GlobalStyle";

const Template: React.FC<any> = ({ pageContext }) => {
  const { title, description } = pageContext as ContentfulPage;

  return (
    <>
      <SEO title={title!} description={description?.description} />
      <GlobalStyle />
      <Page>
        <Header tabs={[]} iconTabs={[]} />
        <Content>
          <h1>Hello</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
          <h5>Hello</h5>
          <h6>Hello</h6>
        </Content>
        <Footer tabs={[]} iconTabs={[]} />
      </Page>
    </>
  );
};

export default Template;
