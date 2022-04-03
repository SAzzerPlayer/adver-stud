import styled from "styled-components";
import { yellowButtonStyle } from "../../styles/common";

export const HoverExternalLink = styled.a`
  text-decoration: none;
  :hover {
    opacity: 0.65;
  }
  :active {
    opacity: 0.85;
  }
`;

export const YellowHoverExternalLink = styled(HoverExternalLink)(
  () => yellowButtonStyle
);
