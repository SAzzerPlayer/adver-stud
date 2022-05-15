export const getAllPagesDocument = `
    fragment Link on ContentfulLink {
      id
      title
      node_locale
      url {
        url
      }
      image {
        title
        description
        gatsbyImageData(quality: 80)
      }
    }
    
    fragment SocialLink on ContentfulLink {
      id
      title
      node_locale
      url {
        url
      }
      image {
        title
        description
        gatsbyImageData(width: 32, height: 32, quality: 80)
      }
    }
    
    fragment PageOptions on ContentfulPageOptions {
      id
      type
      topBarLogo {
        ...Link
      }
      topBarLinks {
        ...Link
      }
      topBarSocialLinks {
        ...SocialLink
      }
      bottomBarLogo {
        ...Link
      }
      bottomBarLinks {
        ...Link
      }
      bottomBarSocialLinks {
        ...SocialLink
      }
    }
    
    fragment ActionBlock on ContentfulActionBlock {
      id
      type
      textPosition
      illustration {
        title
        description
        gatsbyImageData(quality: 80, width: 416, height: 416, aspectRatio: 1)
      }
      article {
        raw
      }
      button {
        ...Link
      }
    }
    
    fragment PersonBlock on ContentfulPerson {
      id
      type
      image {
        title
        description
        gatsbyImageData(quality: 80, aspectRatio: 1)
      }
      socialLinks {
        ...SocialLink
      }
      description {
        raw
      }
    }
    
    fragment TextBlock on ContentfulTextBlock {
      id
      type
      text {
        raw
      }
      alignTextTo
    }
    
    fragment TipListBlock on ContentfulTipList {
      id
      type
      amountOfColumns
      tipMarker
      style
      tips {
        raw
      }
    }
    
    fragment TableBlockColumn on ContentfulTableColumn {
      id
      type
      align
      title
      content {
        raw
      }
    }
    
    fragment TableBlock on ContentfulTable {
      id
      type
      numerateRows
      columns {
        ...TableBlockColumn
      }
    }
    
    fragment GridBlock on ContentfulGrid {
      id
      type
      ratio
      alignColumnsOnMobile
      column_1 {
        ...TextBlock
        ...ActionBlock
        ...PersonBlock
        ...TableBlock
        ...TipListBlock
      }
      column_2 {
        ...TextBlock
        ...ActionBlock
        ...PersonBlock
        ...TableBlock
        ...TipListBlock
      }
      column_3 {
        ...TextBlock
        ...ActionBlock
        ...PersonBlock
        ...TableBlock
        ...TipListBlock
      }
      column_4 {
        ...TextBlock
        ...ActionBlock
        ...PersonBlock
        ...TableBlock
        ...TipListBlock
      }
    }
    
    fragment TabsBlockColumn on ContentfulTabsColumn {
      id
      type
      title
      content {
        ...TextBlock
        ...ActionBlock
        ...PersonBlock
        ...TableBlock
        ...TipListBlock
        ...GridBlock
      }
    }
    
    fragment TabsBlock on ContentfulTabs {
      id
      type
      initialTab
      tabs {
        ...TabsBlockColumn
      }
    }
    
    fragment ContentBlock on ContentfulContentBlock {
      id
      type
      margin
      blocks {
        ...TableBlock
        ...ActionBlock
        ...TextBlock
        ...TabsBlock
        ...TipListBlock
        ...GridBlock
      }
    }
    
    query GetAllPages {
      locales: allContentfulLocale {
        nodes {
          default
          fallbackCode
          code
          id
          name
        }
      }
      pages: allContentfulPage(filter: { url: { regex: "///" } }, limit: 999) {
        nodes {
          id
          type
          node_locale
          url
          title
          description {
            description
          }
          options {
            ...PageOptions
          }
          content {
            ...ContentBlock
          }
        }
      }
    }
`;
