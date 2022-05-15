import React from "react";
import { SEO } from "src/components/SEO";
import { GlobalStyle } from "src/components/GlobalStyle";
import { TLocale, TPage } from "../types";
import Structure from "./components/structure";
import Block from "./components/blocks";
import { DefaultLocaleContext } from "src/context/DefaultLocale";

interface ITemplateProps {
  pageContext: TPage & { defaultLocale: TLocale };
}

const Template: React.FC<ITemplateProps> = ({ pageContext }) => {
  const { title, description, content, options, node_locale } = pageContext;

  return (
    <DefaultLocaleContext.Provider
      value={{ ...pageContext.defaultLocale, currentPageLocale: node_locale }}
    >
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
    </DefaultLocaleContext.Provider>
  );
};

export default Template;
