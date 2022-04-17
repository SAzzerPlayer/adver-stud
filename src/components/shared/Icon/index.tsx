import React from "react";
import IconAssets, { TIconName } from "./assets";
import { TIconComponentProps } from "./types";

export interface IIconProps extends TIconComponentProps {
  name: TIconName;
}

export const Icon: React.FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = IconAssets[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

export * from "./types";
export * from "./assets";
