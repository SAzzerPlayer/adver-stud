import { css } from "styled-components";
import { colors } from "./colors";

export const yellowButtonStyle = css`
  background: ${colors.accentYellow};
  border-radius: 30px;
  padding: 14px 32px;
  text-align: center;
  font-family: Lora, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${colors.accentBlack};
  width: fit-content;
`;
