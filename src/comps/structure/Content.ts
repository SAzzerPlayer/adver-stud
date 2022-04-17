import styled from "styled-components";
import { breakpoints, getGapStyle } from "src/styles";

export default styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: ${breakpoints.monitor};
  width: 100vw;
  ${getGapStyle("64px", "column")}

  @media (max-width ${breakpoints.laptop}) {
    ${getGapStyle("48px", "column")}
  }

  @media (max-width ${breakpoints.device}) {
    ${getGapStyle("32px", "column")}
  }
`;
