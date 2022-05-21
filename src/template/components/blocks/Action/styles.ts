import styled from "styled-components";
import { breakpoints } from "src/styles";

const Container = styled.div<{ reversed?: boolean }>`
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.device}) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      max-width: 416px;
    }
  }

  & > * {
    margin: 0 24px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h6,
  p,
  a,
  b,
  strong,
  i,
  em,
  mark,
  u {
    margin: 1em 0 !important;
  }
`;

export default {
  Container,
  TextContent,
};
