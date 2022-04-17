import React from "react";
import { TIconComponent } from "../types";
import { colors } from "src/styles";

const MenuIcon: TIconComponent = ({
  size = 24,
  color = colors.accentBlack,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.46409 15.5355L15.5352 8.46448"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.46409 8.46445L15.5352 15.5355"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
