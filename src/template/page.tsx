import React from "react";
import { SEO } from "src/components/SEO";
import { GlobalStyle } from "src/components/GlobalStyle";
import { TPage } from "../types";
import Structure from "./components/structure";
import Block from "./components/blocks";

interface ITemplateProps {
  pageContext: TPage;
}

const Template: React.FC<ITemplateProps> = ({ pageContext }) => {
  const { title, description, content, options } = pageContext;

  return (
    <>
      <SEO title={title!} description={description?.description} />
      <GlobalStyle />
      <Structure.Page>
        <Structure.Header {...options} />
        <Structure.Content>
          {content.filter(Boolean).map((c) => (
            <Block.Content {...c} key={c.id} />
          ))}
        </Structure.Content>
        <Structure.Footer {...options} />
      </Structure.Page>
    </>
  );
};

export default Template;
