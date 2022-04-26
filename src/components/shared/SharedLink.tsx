import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import styled from "styled-components";
import { colors } from "src/styles";

type TBaseLinkProps = Omit<GatsbyLinkProps<any>, "ref">;

export const BaseLink = React.forwardRef<any, TBaseLinkProps>(
  ({ children, to, activeClassName, partiallyActive, ...props }, ref) => {
    const internal = !to.includes("http");
    const isEnglish =
      internal && !to.startsWith("/en/")
        ? location.pathname.startsWith("/en/")
        : false;
    const link = isEnglish ? "/en" + to : to;
    if (internal) {
      return (
        <Link
          ref={ref}
          to={link}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a ref={ref} href={link} className={activeClassName} {...props}>
        {children}
      </a>
    );
  }
);

export const HoverLink = styled(BaseLink)`
  text-decoration: none;

  :hover {
    opacity: 0.65;
  }

  :active {
    opacity: 0.85;
  }
`;

export const YellowHoverLink = styled(HoverLink)`
  background: ${colors.accentYellow};
  border-radius: 30px;
  padding: 14px 32px;
  color: ${colors.accentBlack};
  width: fit-content;
`;
