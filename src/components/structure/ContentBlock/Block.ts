import styled, { css } from "styled-components";
import { breakpoints, getGapStyle } from "../../../styles";

const marginTypeParser = (
  type: string,
  breakPoint: keyof typeof breakpoints
) => {
  if (type === "small") {
    switch (breakPoint) {
      case "device": {
        return css`
          margin: 24px 0;
        `;
      }
      case "laptop": {
        return css`
          margin: 36px 0;
        `;
      }
      default: {
        return css`
          margin: 36px 0;
        `;
      }
    }
  } else if (type === "medium") {
    switch (breakPoint) {
      case "device": {
        return css`
          margin: 36px 0;
        `;
      }
      case "laptop": {
        return css`
          margin: 48px 0;
        `;
      }
      default: {
        return css`
          margin: 64px 0;
        `;
      }
    }
  } else {
    switch (breakPoint) {
      case "device": {
        return css`
          margin: 48px 0;
        `;
      }
      case "laptop": {
        return css`
          margin: 64px 0;
        `;
      }
      default: {
        return css`
          margin: 96px 0;
        `;
      }
    }
  }
};

export default styled.div<{ margin: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${getGapStyle("8px", "column")};

  ${({ margin }) => marginTypeParser(margin, "monitor")};

  @media (max-width: ${breakpoints.laptop}) {
    ${({ margin }) => marginTypeParser(margin, "laptop")};
  }

  @media (max-width: ${breakpoints.device}) {
    ${({ margin }) => marginTypeParser(margin, "device")};
  }
`;
