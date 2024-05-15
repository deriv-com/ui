import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountSwitcherFooter } from "..";

describe("AccountSwitcherFooter Component", () => {
    it("renders children correctly", () => {
        render(
            <AccountSwitcherFooter>
                <div>Test Content</div>
            </AccountSwitcherFooter>
        );

        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("applies default and additional class names", () => {
        const additionalClass = "additional-class";
        render(
            <AccountSwitcherFooter className={additionalClass}>
                <div>Test Content</div>
            </AccountSwitcherFooter>
        );

        const footer = screen.getByText("Test Content").parentElement;
        expect(footer).toHaveClass("deriv-account-switcher__footer");
        expect(footer).toHaveClass(additionalClass);
    });

    it("passes additional props to the div element", () => {
        const testId = "test-footer";
        render(
            <AccountSwitcherFooter data-testid={testId}>
                <div>Test Content</div>
            </AccountSwitcherFooter>
        );

        const footer = screen.getByTestId(testId);
        expect(footer).toBeInTheDocument();
    });
});
