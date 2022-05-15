import styled from "styled-components";
import { TTextBlockAlignTo } from "../../../../types";

const Container = styled.div<{ align: TTextBlockAlignTo }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => {
    if (align === "Left") return "flex-start";
    if (align === "Center") return "center";
    if (align === "Right") return "flex-end";
  }};
  text-align: ${({ align }) => {
    if (align === "Left") return "left";
    if (align === "Center") return "center";
    if (align === "Right") return "right";
  }};

  h6,
  p,
  a,
  b,
  strong,
  i,
  em,
  mark,
  u {
    margin: 1.25em 0 !important;
    line-height: 160%;
  }
`;

export default {
  Container,
};
