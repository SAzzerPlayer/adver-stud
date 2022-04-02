import { Link } from "gatsby";
import styled from "styled-components";

export const HoverInternalLink = styled(Link)`
  text-decoration: none;
  :hover {
    opacity: 0.65;
  }
  :active {
    opacity: 0.85;
  }
`;
