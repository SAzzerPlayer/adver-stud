import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import styled from "styled-components";
import { colors } from "src/styles";
import { useDefaultLocale } from "../../context/DefaultLocale";

type TBaseLinkProps = Omit<GatsbyLinkProps<any>, "ref">;

export const BaseLink = React.forwardRef<
  any,
  TBaseLinkProps & { locale?: string }
>(
  (
    { children, to, activeClassName, partiallyActive, locale, ...props },
    ref
  ) => {
    const internal = !to.includes("http");

    const defaultLocale = useDefaultLocale();

    const link =
      internal && locale && locale !== defaultLocale.code
        ? `/${locale}${to}`
        : to;

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
    opacity: 0.9;
  }
`;

export const YellowHoverLink = styled(HoverLink)`
  background: ${colors.accentYellow};
  border-radius: 30px;
  padding: 14px 32px;
  color: ${colors.accentBlack};
  width: fit-content;
`;
