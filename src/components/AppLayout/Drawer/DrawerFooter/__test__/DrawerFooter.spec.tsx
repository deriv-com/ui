import React from "react";
import { render, screen } from "@testing-library/react";
import { DrawerFooter } from "../";

describe("DrawerFooter Component", () => {
    it("renders the component correctly", () => {
        render(
            <DrawerFooter>
                <div>footer content</div>
            </DrawerFooter>,
        );

        const contentElement = screen.getByText("footer content");
        expect(contentElement).toBeInTheDocument();
    });

    it("applies className correctly", () => {
        render(
            <DrawerFooter className="test-class">
                some test content
            </DrawerFooter>,
        );

        const contentElement = screen.getByText("some test content");
        expect(contentElement).toBeInTheDocument();
        expect(contentElement).toHaveClass("deriv-drawer__footer test-class");
    });
});
