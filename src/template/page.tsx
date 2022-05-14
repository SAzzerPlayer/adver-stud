import React from "react";
import { SEO } from "src/components/SEO";
import { Page, Header, Content, Footer } from "src/components/structure";
import { GlobalStyle } from "src/components/GlobalStyle";
import { ContentBlock } from "src/components/structure/ContentBlock";
import { TPage } from "../types";

interface ITemplateProps {
  pageContext: TPage;
}

const Template: React.FC<ITemplateProps> = ({ pageContext }) => {
  const { title, description, content, options } = pageContext;

  return (
    <>
      <SEO title={title!} description={description?.description} />
      <GlobalStyle />
      <Page>
        <Header {...options} />
        <Content
          style={{
            alignItems: "center",
            flex: 1,
          }}
        >
          {content.filter(Boolean).map((c, index) => (
            <ContentBlock {...c} key={index} />
          ))}
        </Content>
        <Footer {...options} />
      </Page>
    </>
  );
};

export default Template;
