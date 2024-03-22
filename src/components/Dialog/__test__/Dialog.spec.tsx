import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from "..";
import { DialogHeader } from "../DialogHeader";

describe("Dialog component", () => {
    it("should render the basic dialog without header, footer and body", () => {
        render(
            <Dialog isOpen={true}>
                <p>This is some dialog content</p>
            </Dialog>,
        );

        const dialog = screen.getByText("This is some dialog content");

        expect(dialog).toBeInTheDocument();
    });

    it("should render dialog header", () => {
        render(
            <Dialog isOpen={true}>
                <Dialog.Header hideCloseIcon={false}>Dialog Title</Dialog.Header>
            </Dialog>,
        );

        const dialogHeader = screen.getByText("Dialog Title");
        const dialogCloseIcon = screen.queryByTestId("dt-close-icon");

        expect(dialogHeader).toBeInTheDocument();
        expect(dialogCloseIcon).toBeDefined();
    });

    it("should render the dialog header without close icon ", () => {
        render(
            <Dialog isOpen={true}>
                <Dialog.Header hideCloseIcon={true} >Dialog Title</Dialog.Header>
            </Dialog>,
        );

        const dialogHeader = screen.getByText("Dialog Title");
        const dialogCloseIcon = screen.queryByTestId("dt-close-icon");

        expect(dialogHeader).toBeInTheDocument();
        expect(dialogCloseIcon).not.toBeInTheDocument();
    });

    it("should render dialog Footer", () => {
        render(
            <Dialog isOpen={true}>
                <Dialog.Footer>Dialog Footer</Dialog.Footer>
            </Dialog>,
        );

        const dialogFooter = screen.getByText("Dialog Footer");

        expect(dialogFooter).toBeInTheDocument();
    });

    it("should close the modal when the close button in header is clicked", async () => {
        render(
            <Dialog isOpen={true}>
                <DialogHeader
                    title={" Modal Title"}
                    hideCloseIcon={false}
                ></DialogHeader>
                <Dialog.Body>
                    <p>This is some dialog content</p>
                </Dialog.Body>
            </Dialog>,
        );

        const modal = await screen.getByText("This is some dialog content");

        const modalCloseIcon = screen.getByTestId("dt-close-icon");

        await userEvent.click(modalCloseIcon);

        expect(modal).toBeInTheDocument();
    });
});
