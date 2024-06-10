import { render, screen } from "@testing-library/react";
import { Submenu } from "..";

const mockText = "Submenu test content";

describe("Submenu Component", () => {
    it("renders when isOpen is true", () => {
        render(
            <Submenu isOpen>
                <p>{mockText}</p>
            </Submenu>,
        );
        expect(screen.getByText(mockText)).toBeInTheDocument();
    });

    it("does not render when isOpen is false", () => {
        render(
            <Submenu isOpen={false}>
                <p>{mockText}</p>
            </Submenu>,
        );
        expect(screen.queryByText(mockText)).not.toBeInTheDocument();
    });

    it("applies exit animation class when isOpen changes to false", () => {
        const { rerender, container } = render(
            <Submenu isOpen>
                <p>{mockText}</p>
            </Submenu>,
        );
        expect(container.firstChild).toHaveClass("submenu");

        rerender(
            <Submenu isOpen={false}>
                <p>{mockText}</p>
            </Submenu>,
        );
        expect(container.firstChild).toHaveClass("submenu_exit");
    });
});
