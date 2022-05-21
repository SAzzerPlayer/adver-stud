import styled from "styled-components";
import { TGridBlockAlignColumns, TGridBlockRatio } from "src/types";
import { breakpoints, getGapStyle } from "src/styles";

const Container = styled.div<{ alignColumnsOnMobile: TGridBlockAlignColumns }>`
  display: flex;
  justify-content: space-between;

  > * + * {
    margin-left: 3em;
  }

  @media (max-width: ${breakpoints.device}) {
    flex-direction: ${({ alignColumnsOnMobile }) =>
      alignColumnsOnMobile === "fromRightToLeft" ? "column-reverse" : "column"};

    > * {
      margin-left: 0;
      margin-bottom: 1em;
    }
  }
`;

const Column = styled.div<{ ratio: TGridBlockRatio }>`
  display: flex;
  flex-direction: column;
  flex: ${({ ratio }) => +ratio / 100};
  ${getGapStyle("1em", "column")};
  @media (max-width: ${breakpoints.device}) {
    flex: unset;
  }
`;

export default {
  Container,
  Column,
};
