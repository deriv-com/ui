import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MenuItem } from "../Header/MenuItem";

describe("MenuItem Component", () => {
    it('renders as a button when "as" prop is "button"', () => {
        render(
            <MenuItem as="button" onClick={jest.fn()}>
                Click me
            </MenuItem>,
        );
        const button = screen.getByRole("button", { name: "Click me" });
        expect(button).toBeInTheDocument();
        expect(button.tagName).toBe("BUTTON");
    });

    it('renders as a link when "as" prop is "a" and href is provided', () => {
        const href = "https://example.com";
        render(
            <MenuItem as="a" href={href}>
                Visit Example
            </MenuItem>,
        );
        const link = screen.getByRole("link", { name: "Visit Example" });
        expect(link).toBeInTheDocument();
        expect(link.tagName).toBe("A");
        expect(link).toHaveAttribute("href", href);
    });

    it("applies active and disableHover classes correctly", () => {
        render(
            <MenuItem as="button" active disableHover className="custom-class">
                Click me
            </MenuItem>,
        );
        const button = screen.getByRole("button", { name: "Click me" });
        expect(button).toHaveClass("deriv-menu-item");
        expect(button).toHaveClass("deriv-menu-item--active");
        expect(button).toHaveClass("custom-class");
    });

    it("handles onClick event for button", async () => {
        const mockClick = jest.fn();
        render(
            <MenuItem as="button" onClick={mockClick}>
                Click me
            </MenuItem>,
        );
        const button = screen.getByRole("button", { name: "Click me" });
        await userEvent.click(button);
        expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it("does not break when missing optional props", () => {
        render(
            <MenuItem as="button" onClick={jest.fn()}>
                Click me
            </MenuItem>,
        );
        const button = screen.getByRole("button", { name: "Click me" });
        expect(button).toBeInTheDocument();
    });
});
