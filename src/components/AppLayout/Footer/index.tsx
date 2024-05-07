import { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import "./Footer.scss";

/**
 * Footer component.
 * @param {object} PropsWithChildren - Props object with children.
 * @param {React.ReactNode} PropsWithChildren.children - The children nodes to be rendered inside the footer.
 * @param {string} PropsWithChildren.className - Additional classes to be applied to the footer.
 * @returns {JSX.Element} - Returns the footer element.
 */
export const Footer = ({
    children,
    className,
    ...rest
}: PropsWithChildren<ComponentProps<"footer">>) => (
    <footer className={clsx("deriv-footer", className)} {...rest}>
        {children}
    </footer>
);

Footer.displayName = "Footer";
