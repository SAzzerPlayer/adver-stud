import styled, { css } from "styled-components";
import { breakpoints, getGapStyle } from "src/styles";
import { TContentBlockMargin } from "../../../../types";

const Container = styled.div<{ margin: TContentBlockMargin }>`
  display: flex;
  flex-direction: column;
  width: inherit;

  ${({ margin }) => {
    if (margin === "large") {
      return css`
        margin-top: 10em;

        @media (max-width: ${breakpoints.device}) {
          margin-top: 5em;
        }
      `;
    } else if (margin === "medium") {
      return css`
        margin-top: 8em;
        @media (max-width: ${breakpoints.device}) {
          margin-top: 4em;
        }
      `;
    }
    return css`
      margin-top: 6em;
      @media (max-width: ${breakpoints.device}) {
        margin-top: 3em;
      }
    `;
  }}
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
