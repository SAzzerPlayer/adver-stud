import styled from "styled-components";
import { getGapStyle } from "../../../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${getGapStyle("0.5em", "column")};
  .photo {
    max-width: 512px;
  }
  .social-icon {
    max-width: 2em;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  h6,
  p,
  a,
  b,
  strong,
  i,
  em,
  mark,
  u {
    margin: 0.5em 0 !important;
    line-height: 160%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > * {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`;

export default {
  Container,
  TextContent,
  SocialLinks,
};
