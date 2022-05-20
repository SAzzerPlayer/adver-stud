import styled from "styled-components";
import {breakpoints, getGapStyle} from "src/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  margin: 5.75em 0;
  @media (max-width: ${breakpoints.device}) {
    margin: 3em 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  ${getGapStyle("1em", "column")};
`;

export default {
  Container,
  Wrapper,
};
