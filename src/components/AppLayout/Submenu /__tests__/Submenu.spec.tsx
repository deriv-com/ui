import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Submenu } from "..";

describe("Submenu Component", () => {
    it("renders correctly with required props", () => {
        render(
            <Submenu
                icon={<span>Icon</span>}
                label="Account settings"
                submenuContent={<button>Click me</button>}
            />,
        );
        expect(screen.getByText("Account settings")).toBeInTheDocument();
        expect(screen.getByText("Icon")).toBeInTheDocument();
    });

    it("toggles submenu on button click", async () => {
        render(
            <Submenu
                icon={<span>Icon</span>}
                label="Account settings"
                submenuContent={<span>Close</span>}
            />,
        );

        expect(screen.queryByText("Close")).not.toBeInTheDocument();
        // Open the submenu
        await userEvent.click(screen.getByRole("button"));
        expect(screen.getByText("Close")).toBeInTheDocument();
    });

    it("applies custom class names", async () => {
        const mockClassName = "test-class";

        render(
            <Submenu
                icon={<span>Icon</span>}
                label="Account settings"
                submenuClassName={mockClassName}
                submenuContent={<span>Submenu Content</span>}
            />,
        );

        await userEvent.click(screen.getByRole("button"));
        expect(
            screen.getByRole("button", { name: "Submenu Content" }).parentNode,
        ).toHaveClass(mockClassName);
    });

    it("renders the submenu children properly", async () => {
        render(
            <Submenu
                icon={<span>Icon</span>}
                label="Account settings"
                submenuContent={<span>Submenu Content</span>}
            >
                <span>submenu children</span>
            </Submenu>,
        );

        await userEvent.click(screen.getByRole("button"));
        expect(screen.getByText("submenu children")).toBeInTheDocument();
    });
});
