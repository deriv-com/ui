import React from "react";
import { render, screen } from "@testing-library/react";
import { TotalAsset } from "..";

describe("TotalAsset Component", () => {
    it("renders title, value, and description correctly", () => {
        const testTitle = "Total Balance";
        const testValue = "1000 USD";
        const testDescription = "this is just a test description";

        render(
            <TotalAsset
                title={testTitle}
                value={testValue}
                description={testDescription}
            />
        );

        expect(screen.getByText(testTitle)).toBeInTheDocument();
        expect(screen.getByText(testValue)).toBeInTheDocument();
        expect(screen.getByText(testDescription)).toBeInTheDocument();
    });

    it("applies additional className and other props", () => {
        const additionalClass = "additional-class";
        const testId = "total-asset";

        render(
            <TotalAsset
                title="Balance"
                value="$500"
                description="Just now"
                className={additionalClass}
                data-testid={testId}
            />
        );

        const container = screen.getByTestId(testId);
        expect(container).toHaveClass("deriv-total-assets");
        expect(container).toHaveClass(additionalClass);
    });
});
