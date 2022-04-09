import * as React from "react";
import {
  HoverInternalLink,
  YellowHoverInternalLink,
} from "./HoverInternalLink";
import { textButtonStyle } from "../../styles/common";
import styled from "styled-components";

const TextHoverInternalLink = styled(HoverInternalLink)(() => textButtonStyle);

export interface IButtonInternalLinkProps {
  children: React.ReactNode;
  to: string;
  active?: boolean;
}

export const ButtonInternalLink: React.FC<IButtonInternalLinkProps> = ({
  active,
  to,
  children,
}) =>
  active ? (
    <YellowHoverInternalLink to={to}>{children}</YellowHoverInternalLink>
  ) : (
    <TextHoverInternalLink to={to}>{children}</TextHoverInternalLink>
  );
