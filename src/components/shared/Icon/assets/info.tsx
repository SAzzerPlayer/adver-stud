import React from "react";
import { TIconComponent } from "../types";
import { colors } from "src/styles";

const InfoIcon: TIconComponent = ({
  size = 32,
  color = colors.accentBlack,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66675 14.6667V17.3333C6.66675 21.7516 10.2485 25.3333 14.6667 25.3333H17.3334C21.7517 25.3333 25.3334 21.7516 25.3334 17.3333V14.6667C25.3334 10.2484 21.7517 6.66667 17.3334 6.66667H14.6667C10.2485 6.66667 6.66675 10.2484 6.66675 14.6667Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0002 16V21.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.0002 12.6667C15.6326 12.6667 15.3335 12.3676 15.3335 12C15.3335 11.6324 15.6326 11.3333 16.0002 11.3333C16.3678 11.3333 16.6668 11.6324 16.6668 12C16.6668 12.3676 16.3678 12.6667 16.0002 12.6667Z"
        fill={color}
      />
      <path
        d="M16.0001 10.6667C16.7365 10.6667 17.3334 11.2636 17.3334 12C17.3334 12.7364 16.7365 13.3333 16.0001 13.3333C15.2637 13.3333 14.6667 12.7364 14.6667 12C14.6667 11.2636 15.2637 10.6667 16.0001 10.6667Z"
        fill={color}
      />
    </svg>
  );
};

export default InfoIcon;
