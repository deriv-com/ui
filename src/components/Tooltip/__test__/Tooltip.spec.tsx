import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Tooltip } from "../index";

describe("YourComponent", () => {
    it("renders as a button", () => {
        render(
            <Tooltip
                as="button"
                tooltipContent="Button Tooltip"
                tooltipPosition="bottom"
            >
                Click Me
            </Tooltip>,
        );
        expect(
            screen.getByRole("button", { name: /click me/i }),
        ).toBeInTheDocument();
    });

    it("renders as a link", () => {
        render(
            <Tooltip
                as="a"
                href="https://example.com"
                tooltipContent="Link Tooltip"
                tooltipPosition="right"
            >
                Visit Example
            </Tooltip>,
        );
        const link = screen.getByRole("link", { name: /visit example/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "https://example.com");
    });

    it("renders as a div", () => {
        render(
            <Tooltip
                as="div"
                tooltipContent="Div Tooltip"
                tooltipPosition="top"
            >
                Content
            </Tooltip>,
        );
        expect(screen.getByText(/content/i)).toBeInTheDocument();
    });

    it("displays the correct tooltip content", async () => {
        const { container } = render(
            <Tooltip
                as="button"
                tooltipContent="Tooltip Content"
                tooltipPosition="bottom"
            >
                Button
            </Tooltip>,
        );
        fireEvent.mouseEnter(screen.getByText("Button"));
        await waitFor(() => {
            const tooltipContainer = container.querySelector(".deriv-tooltip");
            expect(tooltipContainer).toBeInTheDocument();
        });
        expect(screen.getByText(/tooltip content/i)).toBeInTheDocument();
    });

    it("applies the error variant class", async () => {
        const { container } = render(
            <Tooltip as="div" tooltipContent="Error Tooltip" variant="error">
                Error Content
            </Tooltip>,
        );
        fireEvent.mouseEnter(screen.getByText("Error Content"));
        await waitFor(() => {
            const tooltipContainer = container.querySelector(".deriv-tooltip");
            expect(tooltipContainer).toHaveClass("deriv-tooltip--error");
        });
    });

    it("applies the general variant class", async () => {
        const { container } = render(
            <Tooltip
                as="div"
                tooltipContent="General Tooltip"
                variant="general"
            >
                General Content
            </Tooltip>,
        );
        fireEvent.mouseEnter(screen.getByText("General Content"));
        await waitFor(() => {
            const tooltipContainer = container.querySelector(".deriv-tooltip");
            expect(tooltipContainer).toHaveClass("deriv-tooltip--general");
        });
    });
});
