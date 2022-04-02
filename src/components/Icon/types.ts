import { FC, HTMLProps } from "react";

type TSvgComponent = Partial<
  Omit<HTMLProps<HTMLOrSVGElement>, "ref" | "as" | "color" | "crossOrigin">
>;

export interface TIconComponentProps extends TSvgComponent {
  size?: number;
  color?: string;
}

export type TIconComponent = FC<TIconComponentProps>;
