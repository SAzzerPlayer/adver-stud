import React from "react";
import { TIconComponent } from "../types";
import { colors } from "src/styles";

const HeartIcon: TIconComponent = ({
  size = 80,
  color = colors.backgroundWhite,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.4312 61.8281C40.6467 62.6363 39.3498 62.6375 38.5637 61.8307L30.2555 53.3036L20.5888 43.3036C15.3591 37.7769 15.3591 29.127 20.5888 23.6003C23.1496 21.1392 26.6181 19.853 30.1644 20.0496C33.7107 20.2462 37.0158 21.9079 39.2888 24.637C39.6802 25.0209 40.3093 25.0128 40.6906 24.6189L40.7022 24.607C42.9752 21.8779 46.2803 20.2162 49.8266 20.0196C53.3729 19.823 56.8414 21.1092 59.4022 23.5703C64.6319 29.097 64.6319 37.7469 59.4022 43.2736L49.7355 53.2736L41.4312 61.8281Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;
