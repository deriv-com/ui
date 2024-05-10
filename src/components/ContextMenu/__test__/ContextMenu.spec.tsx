import {  render, screen } from "@testing-library/react";
import { ContextMenu } from ".."; // Adjust the import path to the location of your component file

describe("ContextMenu Component", () => {
    // Test to check if the component renders children when open
    test("renders children when open", () => {
        render(
            <ContextMenu isOpen={true}>
                <div>Test Content</div>
            </ContextMenu>,
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    // Test to ensure the component does not render when it is not open
    test("does not render when closed", () => {
        render(
            <ContextMenu isOpen={false}>
                <div>Test Content</div>
            </ContextMenu>,
        );
        expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
    });

    // Test to check cleanup of timers to avoid memory leaks
    test("cleans up timers on unmount", () => {
        const clearTimeout = jest.spyOn(window, "clearTimeout");
        const { unmount } = render(
            <ContextMenu isOpen={false}>
                <div>Test Content</div>
            </ContextMenu>,
        );

        unmount();
        expect(clearTimeout).toHaveBeenCalledTimes(1);
    });

    // test to ensure the classname is applied
    test("applies className", () => {
        render(
            <ContextMenu isOpen={true} className="test-class">
                Test Content
            </ContextMenu>,
        );
        expect(screen.getByText("Test Content")).toHaveClass("test-class");
    });

});
