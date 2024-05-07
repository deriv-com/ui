import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DrawerHeader } from "..";

describe("DrawerHeader Component", () => {
    const onCloseDrawerMock = jest.fn();

    beforeEach(() => {
        onCloseDrawerMock.mockClear();
    });

    it("renders Drawer correctly", () => {
        render(
            <DrawerHeader onCloseDrawer={onCloseDrawerMock}>
                Test Header Content
            </DrawerHeader>,
        );

        const headerContentElement = screen.getByText("Test Header Content");
        expect(headerContentElement).toBeInTheDocument();
    });

    it("applies wrapper class correctly", () => {
        const wrapperClassName = "test-class";
        render(
            <DrawerHeader
                onCloseDrawer={onCloseDrawerMock}
                wrapperClassName={wrapperClassName}
            >
                Test Header Content
            </DrawerHeader>,
        );

        const headerContentElement = screen.getByText("Test Header Content");
        expect(headerContentElement).toBeInTheDocument();
        expect(headerContentElement.parentElement).toHaveClass(
            "deriv-drawer__header",
            wrapperClassName,
        );
    });

    it("applies wrapper class correctly", () => {
        const className = "test-class";
        render(
            <DrawerHeader
                onCloseDrawer={onCloseDrawerMock}
                className={className}
            >
                Test Header Content
            </DrawerHeader>,
        );

        const headerContentElement = screen.getByText("Test Header Content");
        expect(headerContentElement).toBeInTheDocument();
        expect(headerContentElement).toHaveClass(
            "deriv-drawer__header__content",
            className,
        );
    });

    it("calls onCloseDrawer when close button is clicked", async () => {
        render(
            <DrawerHeader onCloseDrawer={onCloseDrawerMock}>
                Test Header Content
            </DrawerHeader>,
        );

        const closeButton = screen.getByRole("drawer-close-button");
        expect(closeButton).toBeInTheDocument();

        await fireEvent.click(closeButton);

        expect(onCloseDrawerMock).toHaveBeenCalledTimes(1);
    });
});
