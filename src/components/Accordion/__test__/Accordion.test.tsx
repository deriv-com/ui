import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Accordion } from "..";

describe("Accordion", () => {
    it("renders correctly", () => {
        const { getByText } = render(
            <Accordion title="Test Title">Test Content</Accordion>,
        );

        expect(getByText("Test Title")).toBeInTheDocument();
    });

    it("opens and closes when the header is clicked", () => {
        const { getByRole } = render(
            <Accordion title="Test Title">Test Content</Accordion>,
        );

        screen.debug();
        const button = getByRole("button");

        expect(button).toHaveAttribute("aria-expanded", "false");

        fireEvent.click(button);
        expect(button).toHaveAttribute("aria-expanded", "true");

        fireEvent.click(button);
        expect(button).toHaveAttribute("aria-expanded", "false");
    });
});
