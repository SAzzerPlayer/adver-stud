import styled from "styled-components";
import { breakpoints } from "src/styles";

export default styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: ${breakpoints.monitor};
  width: 100%;
`;
