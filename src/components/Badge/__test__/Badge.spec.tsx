import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "..";

describe("Badge component", () => {
    it("renders children", () => {
        render(<Badge isBold={false}>Test</Badge>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("renders left and right icons", () => {
        const leftIcon = <span data-testid="left-icon">Left Icon</span>;
        const rightIcon = <span data-testid="right-icon">Right Icon</span>;
        render(
            <Badge isBold={false} leftIcon={leftIcon} rightIcon={rightIcon}>
                Test
            </Badge>,
        );
        expect(screen.getByTestId("left-icon")).toBeInTheDocument();
        expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("applies custom class", () => {
        render(
            <Badge isBold={false} className="custom-class">
                Test
            </Badge>,
        );
        expect(document.querySelector(".custom-class")).toBeInTheDocument();
    });

    it("applies color variant class", () => {
        render(
            <Badge isBold={false} color="blue">
                Test
            </Badge>,
        );
        expect(
            document.querySelector(".deriv-badge__color--blue"),
        ).toBeInTheDocument();
    });

    it("applies padding variant class", () => {
        render(
            <Badge isBold={false} padding="loose">
                Test
            </Badge>,
        );
        expect(
            document.querySelector(".deriv-badge__size--loose"),
        ).toBeInTheDocument();
    });

    it("applies badge size class", () => {
        render(
            <Badge isBold={false} badgeSize="lg">
                Test
            </Badge>,
        );
        expect(
            document.querySelector(".deriv-badge__size--lg"),
        ).toBeInTheDocument();
    });

    it("applies bold text class", () => {
        render(<Badge isBold={true}>Test</Badge>);
        expect(screen.getByText("Test")).toHaveClass(
            "derivs-text__weight--bold",
        );
    });

    it("applies variant class", () => {
        render(
            <Badge isBold={false} variant="bordered">
                Test
            </Badge>,
        );
        expect(
            document.querySelector(".deriv-badge__variant--bordered"),
        ).toBeInTheDocument();
    });
});
