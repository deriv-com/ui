import React from "react";
import { render } from "@testing-library/react";
import { Accordion } from "..";
import userEvent from "@testing-library/user-event";

describe("Accordion", () => {
    it("renders correctly", () => {
        const { getByText } = render(
            <Accordion title="Test Title">Test Content</Accordion>,
        );

        expect(getByText("Test Title")).toBeInTheDocument();
    });

    it("applies custom classname to accordion", () => {
        const { getByText } = render(
            <Accordion title="Test Title" className="test-classname">Test Content</Accordion>,
        );

        const accordion = getByText("Test Title");
        expect(accordion.parentElement).toBeInTheDocument();
        expect(accordion.parentElement?.parentElement).toHaveClass("test-classname");
    });

    it("opens and closes when the header is clicked", async () => {
        const { getByRole } = render(
            <Accordion title="Test Title">Test Content</Accordion>,
        );
        const button = getByRole("button");

        expect(button).toHaveAttribute("aria-expanded", "false");

        await userEvent.click(button);
        expect(button).toHaveAttribute("aria-expanded", "true");

        await userEvent.click(button);
        expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("opens by default when defaultOpen is passed", async () => {
        const { getByRole } = render(
            <Accordion title="Test Title" defaultOpen>
                Test Content
            </Accordion>,
        );
        const button = getByRole("button");
        expect(button).toHaveAttribute("aria-expanded", "true");

        await userEvent.click(button);
        expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("opens by default when defaultOpen is passed", async () => {
        const { getByRole } = render(
            <Accordion title="Test Title" defaultOpen>
                Test Content
            </Accordion>,
        );
        const button = getByRole("button");
        expect(button).toHaveAttribute("aria-expanded", "true");

        await userEvent.click(button);
        expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("renders correctly with underline variant", () => {
        const { container } = render(
            <Accordion title="Test Title" variant="underline">
                Test Content
            </Accordion>,
        );

        expect(container.firstChild).toHaveClass("deriv-accordion--underline");
    });

    it("renders correctly with bordered variant", () => {
        const { container } = render(
            <Accordion title="Test Title" variant="bordered">
                Test Content
            </Accordion>,
        );

        expect(container.firstChild).toHaveClass("deriv-accordion--bordered");
    });

    it("renders correctly with shadow variant", () => {
        const { container } = render(
            <Accordion title="Test Title" variant="shadow">
                Test Content
            </Accordion>,
        );

        expect(container.firstChild).toHaveClass("deriv-accordion--shadow");
    });

    it("renders correctly when isCompact is true", () => {
        const { container } = render(
            <Accordion title="Test Title" isCompact={true}>
                Test Content
            </Accordion>,
        );

        expect(container.firstChild).toHaveClass("deriv-accordion--compact");
    });

    it("renders correctly when isCompact is false", () => {
        const { container } = render(
            <Accordion title="Test Title" isCompact={false}>
                Test Content
            </Accordion>,
        );

        expect(container.firstChild).not.toHaveClass(
            "deriv-accordion--compact",
        );
    });
});
