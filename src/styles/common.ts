import { css } from "styled-components";
import { colors } from "./colors";

export const yellowButtonStyle = css`
  background: ${colors.accentYellow};
  border-radius: 30px;
  padding: 14px 32px;
  text-align: center;
  font-family: Lora, serif;
  font-size: 16px;
  line-height: 160%;
  color: ${colors.accentBlack};
  width: fit-content;
`;

export const textButtonStyle = css`
  background: transparent;
  border-radius: 30px;
  padding: 14px 32px;
  text-align: center;
  font-family: Lora, serif;
  font-size: 16px;
  line-height: 160%;
  color: ${colors.accentBlack};
  width: fit-content;
`;

type TGapDirection = "all" | "row" | "column";

export const getGapStyle = (gap: string, type: TGapDirection = "all") => css`
  & > * + * {
    margin-top: ${["all", "column"].includes(type) ? gap : 0};
    margin-bottom: 0;
    margin-left: ${["all", "row"].includes(type) ? gap : 0};
    margin-right: 0;
  }
`;
