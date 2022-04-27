import React from "react";
import { SEO } from "src/components/SEO";
import { Page, Header, Content, Footer } from "src/components/structure";
import { ContentfulPage } from "src/graphql/generated";
import { GlobalStyle } from "src/components/GlobalStyle";
import { ContentBlock } from "src/components/structure/ContentBlock";

const Template: React.FC<any> = ({ pageContext }) => {
  const { title, description, content, node_locale } =
    pageContext as ContentfulPage;
  console.log(node_locale);
  return (
    <>
      <SEO title={title!} description={description?.description} />
      <GlobalStyle />
      <Page>
        <Header />
        <Content
          style={{
            alignItems: "center",
            flex: 1,
          }}
        >
          {content?.filter(Boolean).map((c, index) => (
            <ContentBlock {...c!} key={index} />
          ))}
        </Content>
        <Footer />
      </Page>
    </>
  );
};

export default Template;
