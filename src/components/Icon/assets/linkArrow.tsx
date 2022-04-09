import React from "react";
import { TIconComponent } from "../types";
import { colors } from "../../../styles";

const LinkArrowIcon: TIconComponent = ({
  size = 10,
  color = colors.accentBlack,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size * (11 / 10)}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.04911 1.28486C9.02024 1.01023 8.77421 0.810995 8.49958 0.839859L4.02423 1.31024C3.7496 1.3391 3.55037 1.58513 3.57924 1.85976C3.6081 2.13439 3.85413 2.33362 4.12876 2.30476L8.10685 1.88665L8.52496 5.86473C8.55383 6.13936 8.79986 6.33859 9.07449 6.30973C9.34912 6.28087 9.54835 6.03483 9.51948 5.76021L9.04911 1.28486ZM1.38857 10.9775L8.94042 1.65178L8.16327 1.02246L0.611427 10.3482L1.38857 10.9775Z"
        fill={color}
      />
    </svg>
  );
};

export default LinkArrowIcon;
