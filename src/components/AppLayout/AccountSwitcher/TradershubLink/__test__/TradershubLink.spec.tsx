import React from "react";
import { render, screen } from "@testing-library/react";
import { TradershubLink } from "..";

describe("TradershubLink Component", () => {
    it("renders child content correctly", () => {
        const linkText = "Click Here";
        render(
            <TradershubLink>
                {linkText}
            </TradershubLink>
        );

        expect(screen.getByText(linkText)).toBeInTheDocument();
    });

    it("applies default and additional class names", () => {
        const additionalClass = "additional-class";
        render(
            <TradershubLink className={additionalClass}>
                Visit Us
            </TradershubLink>
        );

        const container = screen.getByText("Visit Us").parentElement;
        expect(container).toHaveClass("deriv-account-switcher__tradershub-link");
        expect(container).toHaveClass(additionalClass);
    });

    it("correctly sets href and target attributes", () => {
        const testHref = "https://example.com";
        const testTarget = "_self";
        render(
            <TradershubLink href={testHref} target={testTarget}>
                Learn More
            </TradershubLink>
        );

        const link = screen.getByText("Learn More");
        expect(link).toHaveAttribute("href", testHref);
        expect(link).toHaveAttribute("target", testTarget);
    });

    it("handles additional props", () => {
        const testId = "test-link";
        render(
            <TradershubLink data-testid={testId}>
                Find Out More
            </TradershubLink>
        );

        const link = screen.getByTestId(testId);
        expect(link).toBeInTheDocument();
    });
});
