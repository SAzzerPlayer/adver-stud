import styled from 'styled-components';
import {breakpoints} from "../../../styles";

export default styled.div<{ reversed?: boolean }>`
  display: flex;
  width: 100%;
  gap: 16px;

  & > div {
    display: flex;
  }

  @media (max-width: ${breakpoints.device}) {
    flex-direction: ${({ reversed }) =>
    reversed ? "column-reverse" : "column"};
    & > div {
      flex: 1 !important;
    }
  }
`;
