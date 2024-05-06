import React from "react";
import { render, screen } from "@testing-library/react";
import { DrawerContent } from "../";

describe("DrawerContent Component", () => {
    it("renders the component correctly", () => {
        render(
            <DrawerContent>
                <div>some test content</div>
            </DrawerContent>,
        );

        const contentElement = screen.getByText("some test content");
        expect(contentElement).toBeInTheDocument();
    });

    it("applies className correctly", () => {
        render(
            <DrawerContent className="test-class">
                some test content
            </DrawerContent>,
        );

        const contentElement = screen.getByText("some test content");
        expect(contentElement).toBeInTheDocument();
        expect(contentElement).toHaveClass("test-class");
    });
});
