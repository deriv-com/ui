import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TooltipMenuIcon } from "..";

describe("TooltipMenuIcon Component", () => {
    it("renders correctly with default props", () => {
        render(
            <TooltipMenuIcon as="button" tooltipContent="Tooltip text">
                Hover me
            </TooltipMenuIcon>,
        );
        expect(screen.getByRole("button")).toHaveTextContent("Hover me");
    });

    it("displays tooltip on hover", async () => {
        render(
            <TooltipMenuIcon as="button" tooltipContent="Tooltip text">
                Hover me
            </TooltipMenuIcon>,
        );
        const button = screen.getByRole("button");
        await userEvent.hover(button);
        expect(await screen.findByText("Tooltip text")).toBeVisible();
        await userEvent.unhover(button);
        expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
    });

    it("accepts and applies custom tooltip position", async () => {
        render(
            <TooltipMenuIcon
                as="button"
                tooltipContent="Tooltip text"
                tooltipPosition="bottom"
            >
                Hover me
            </TooltipMenuIcon>,
        );

        await userEvent.hover(screen.getByRole("button"));
        expect(await screen.findByText("Tooltip text")).toBeVisible();
    });

    it("accepts and applies custom tooltip color", async () => {
        const customColor = "#ff5733";
        render(
            <TooltipMenuIcon
                as="button"
                tooltipContent="Tooltip text"
                tooltipColor={customColor}
            >
                Hover me
            </TooltipMenuIcon>,
        );

        await userEvent.hover(screen.getByRole("button"));
        expect(await screen.findByText("Tooltip text")).toHaveStyle(
            `background-color: ${customColor}`,
        );
    });

    it("renders correctly with as='a'", () => {
        render(
            <TooltipMenuIcon
                as="a"
                tooltipContent="Tooltip text"
                href="https://test.com"
            >
                Hover me
            </TooltipMenuIcon>,
        );
        expect(screen.getByRole("link")).toHaveTextContent("Hover me");
    });
});
