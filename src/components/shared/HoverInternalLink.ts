import { Link } from "gatsby";
import styled from "styled-components";
import { yellowButtonStyle } from "../../styles/common";

export const HoverInternalLink = styled(Link)`
  text-decoration: none;
  :hover {
    opacity: 0.65;
  }
  :active {
    opacity: 0.85;
  }
`;

export const YellowHoverInternalLink = styled(HoverInternalLink)(
  () => yellowButtonStyle
);
