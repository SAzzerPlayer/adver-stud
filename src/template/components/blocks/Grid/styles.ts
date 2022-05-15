import styled from "styled-components";
import { TGridBlockAlignColumns, TGridBlockRatio } from "src/types";
import { breakpoints } from "src/styles";

const Container = styled.div<{ alignColumnsOnMobile: TGridBlockAlignColumns }>`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.device}) {
    flex-direction: ${({ alignColumnsOnMobile }) =>
      alignColumnsOnMobile === "fromLeftToRight" ? "column-reverse" : "column"};
  }
`;

const Column = styled.div<{ ratio: TGridBlockRatio }>`
  display: flex;
  flex-direction: column;
  flex: ${({ ratio }) => +ratio / 100};

  @media (max-width: ${breakpoints.device}) {
    flex: unset;
  }
`;

export default {
  Container,
  Column,
};
