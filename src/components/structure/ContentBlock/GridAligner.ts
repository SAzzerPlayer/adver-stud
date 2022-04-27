import styled from "styled-components";
import { breakpoints, getGapStyle } from "../../../styles";

export default styled.div<{ reversed?: boolean }>`
  display: flex;
  width: 100%;
  ${getGapStyle("16px", "row")};

  & > div {
    display: flex;
  }

  @media (max-width: ${breakpoints.device}) {
    flex-direction: ${({ reversed }) =>
      reversed ? "column-reverse" : "column"};
    ${getGapStyle("0", "row")};
    ${getGapStyle("16px", "column")};
    & > div {
      flex: 1 !important;
    }
  }
`;
