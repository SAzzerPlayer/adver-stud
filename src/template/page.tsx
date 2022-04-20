import React from "react";
import { SEO } from "src/components/SEO";
import { Page, Header, Content, Footer } from "src/components/structure";
import { ContentfulActionInfoBlock, ContentfulPage } from "graphql/generated";
import { GlobalStyle } from "src/components/GlobalStyle";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Template: React.FC<any> = ({ pageContext }) => {
  const { title, description, content } = pageContext as ContentfulPage;

  const actionBlocks: ContentfulActionInfoBlock[] = [];
  content?.forEach((c) => {
    c?.blocks?.forEach((b) => {
      if (!!b && (b as ContentfulActionInfoBlock).article?.raw) {
        actionBlocks.push(b as ContentfulActionInfoBlock);
      }
    });
  });

  console.log();

  return (
    <>
      <SEO title={title!} description={description?.description} />
      <GlobalStyle />
      <Page>
        <Header />
        <Content
          style={{
            alignItems: "flex-start",
            textAlign: "center",
            whiteSpace: "pre-wrap",
          }}
        >
          {actionBlocks.map((b, index) => {
            return (
              <div key={index} style={{ margin: "4em" }}>
                {renderRichText(b!.article as any)}
              </div>
            );
          })}
        </Content>
        <Footer />
      </Page>
    </>
  );
};

export default Template;
