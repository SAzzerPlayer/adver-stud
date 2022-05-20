import { css } from "styled-components";

type TGapDirection = "all" | "row" | "column";

export const getGapStyle = (gap: string, type: TGapDirection = "all") => css`
  & > * + * {
    margin-top: ${["all", "column"].includes(type) ? gap : 0};
    margin-bottom: 0;
    margin-left: ${["all", "row"].includes(type) ? gap : 0};
    margin-right: 0;
  }
`;
