import { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import { DerivLogo } from "./DerivLogo";
import { AccountSwitcher } from "./AccountSwitcher";

import "./Header.scss";
import { Wrapper } from "../Wrapper";

/**
 * Header component.
 * @param {object} PropsWithChildren - Props object with children.
 * @param {React.ReactNode} PropsWithChildren.children - The children nodes to be rendered inside the header.
 * @param {string} PropsWithChildren.className - Additional classes to be applied to the header.
 * @returns {JSX.Element} - Returns the header element.
 */
export const Header = ({
    children,
    className,
    ...rest
}: PropsWithChildren<ComponentProps<"header">>) => (
    <header className={clsx("deriv-header", className)} {...rest}>
        {children}
    </header>
);

const HeaderRightWrapper = ({
    children,
    ...rest
}: PropsWithChildren<ComponentProps<"div">>) => (
    <Wrapper variant="right" {...rest}>
        {children}
    </Wrapper>
);
const HeaderLefttWrapper = ({
    children,
    ...rest
}: PropsWithChildren<ComponentProps<"div">>) => (
    <Wrapper variant="left" {...rest}>
        {children}
    </Wrapper>
);

Header.DerivLogo = DerivLogo;
Header.AccountSwitcher = AccountSwitcher;
Header.RightWrapper = HeaderRightWrapper;
Header.LeftWrapper = HeaderLefttWrapper;

Header.displayName = "Header";
