import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountSwitcherTab } from "..";

describe("AccountSwitcherTab Component", () => {
    it("renders children within the Tab component", () => {
        const childText = "Test Child Content";
        render(
            <AccountSwitcherTab title="Any Title">
                {childText}
            </AccountSwitcherTab>,
        );

        const renderedChild = screen.getByText(childText);
        expect(renderedChild).toBeInTheDocument();
    });
});
