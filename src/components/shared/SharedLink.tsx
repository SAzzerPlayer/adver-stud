import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import styled from "styled-components";

type TBaseLinkProps = Omit<GatsbyLinkProps<any>, "ref">;

export const BaseLink = React.forwardRef<any, TBaseLinkProps>(
  ({ children, to, activeClassName, partiallyActive, ...props }, ref) => {
    const internal = !to.includes("http");
    if (internal) {
      return (
        <Link
          ref={ref}
          to={to}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a ref={ref} href={to} className={activeClassName} {...props}>
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
