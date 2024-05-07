import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Drawer } from "..";

describe("Drawer Component", () => {
    const onCloseDrawerMock = jest.fn();

    beforeEach(() => {
        onCloseDrawerMock.mockClear();
    });

    test("renders children when isOpen is true", () => {
        render(
            <Drawer isOpen={true} onCloseDrawer={onCloseDrawerMock}>
                <div>Test Drawer Content</div>
            </Drawer>,
        );

        const drawerContentElement = screen.getByText("Test Drawer Content");
        expect(drawerContentElement).toBeInTheDocument();
    });

    test("does not render children when isOpen is false", () => {
        const testText = "Test Drawer Content";
        render(
            <Drawer isOpen={false} onCloseDrawer={onCloseDrawerMock}>
                <div>{testText}</div>
            </Drawer>,
        );

        const drawerContentElement = screen.queryByText(testText);
        expect(drawerContentElement).not.toBeInTheDocument();
    });

      test("calls onCloseDrawer when overlay is clicked", async () => {
        render(
          <Drawer isOpen={true} onCloseDrawer={onCloseDrawerMock}>
            <div>Test Drawer Content</div>
          </Drawer>
        );

        const overlayElement = screen.getByTestId("drawer-overlay");
        await fireEvent.click(overlayElement);

        expect(onCloseDrawerMock).toHaveBeenCalledTimes(1);
      });

      test("apply the width to the drawer", async () => {
        render(
          <Drawer width="400px" isOpen={true} onCloseDrawer={onCloseDrawerMock}>
            Test Drawer Content
          </Drawer>
        );

        const overlayElement = screen.getByText("Test Drawer Content");
        expect(overlayElement).toHaveStyle("width: 400px");

      });
});
