import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountsPanel } from "..";

describe("AccountsPanel Component", () => {
    it("renders children correctly", () => {
        render(
            <AccountsPanel title="Test Panel">
                <div>Panel Content</div>
            </AccountsPanel>,
        );

        expect(screen.getByText("Panel Content")).toBeInTheDocument();
    });

    it("should hide the content when isOpen is set to false", async () => {
        render(
            <AccountsPanel title="Test Panel" isOpen={false}>
                Panel Content
            </AccountsPanel>,
        );

        const accordionContent = screen.getByText("Panel Content");
        expect(accordionContent.parentElement).not.toHaveClass(
            "deriv-accordion__content--active",
        );
    });

    it("should show the content when isOpen is set to true", async () => {
        render(
            <AccountsPanel title="Test Panel" isOpen={true}>
                Panel Content
            </AccountsPanel>,
        );

        const accordionContent = screen.getByText("Panel Content");
        expect(accordionContent.parentElement).toHaveClass(
            "deriv-accordion__content--active",
        );
    });

    it("applies custom className and headerClassName to Accordion", () => {
        const className = "custom-class";
        const headerClassName = "custom-header-class";

        render(
            <AccountsPanel
                title="Panel Header"
                className={className}
                headerClassName={headerClassName}
            >
                Panel Content
            </AccountsPanel>,
        );

        const accountSwitcherWrapper =
            screen.getByText("Panel Content").parentElement?.parentElement;
        const accountSwitcherHeader =
            screen.getByText("Panel Header").parentElement;

        expect(accountSwitcherWrapper).toHaveClass(className);
        expect(accountSwitcherHeader).toHaveClass(headerClassName);
    });
});
