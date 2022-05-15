import styled from "styled-components";
import { getGapStyle } from "src/styles/common";
import { breakpoints } from "../../../styles";

export const Container = styled.div<{ reversed?: boolean }>`
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
      max-width: 328px;
      max-height: 328px;
    }
  }

  & > * {
    margin: 0 24px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  p,
  a,
  b,
  strong,
  i,
  em,
  mark,
  u {
    margin: 1.25em 0 !important;
  }
`;
