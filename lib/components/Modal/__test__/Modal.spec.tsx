import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event';
import { Modal } from "..";
import { constrainedMemory } from "process";

// mock CloseIcon component with jest

describe("Modal component", () => {
    it("should render the basic modal without header, footer and body", () => {
        render(
            <Modal ariaHideApp={false} isOpen={true}>
                <p>This is some modal content</p>
            </Modal>,
        );

        const modal = screen.getByText("This is some modal content");

        expect(modal).toBeInTheDocument();
    });

    it("should render modal header", () => {
        render(
            <Modal ariaHideApp={false} isOpen={true}>
                <Modal.Header>Modal Title</Modal.Header>
            </Modal>,
        );

        const modalHeader = screen.getByText("Modal Title");
        const modalCloseIcon = screen.queryByTestId("dt-close-icon");

        expect(modalHeader).toBeInTheDocument();
        expect(modalCloseIcon).toBeDefined();
    });

    it("should render the modal header without close icon ", () => {
        render(
            <Modal ariaHideApp={false} isOpen={true}>
                <Modal.Header hideCloseIcon>Modal Title</Modal.Header>
            </Modal>,
        );

        const modalHeader = screen.getByText("Modal Title");
        const modalCloseIcon = screen.queryByTestId("dt-close-icon");

        expect(modalHeader).toBeInTheDocument();
        expect(modalCloseIcon).not.toBeInTheDocument();
    });

    it("should render the modal header without border ", () => {
        render(
            <Modal ariaHideApp={false} isOpen={true}>
                <Modal.Header hideBorder>Modal Title</Modal.Header>
            </Modal>,
        );

        const modalHeader = screen.getByText("Modal Title");
        expect(modalHeader).toHaveClass("deriv-modal__header--no-border");
    });

    it("should render modal Footer", () => {
        render(
            <Modal ariaHideApp={false} isOpen={true}>
                <Modal.Footer>Modal Footer</Modal.Footer>
            </Modal>,
        );

        const modalFooter = screen.getByText("Modal Footer");

        expect(modalFooter).toBeInTheDocument();
    });

    it("should render the modal footer without border ", () => {
        render(
            <Modal ariaHideApp={false} isOpen={true}>
                <Modal.Footer hideBorder>Modal Title</Modal.Footer>
            </Modal>,
        );

        const modalFooter = screen.getByText("Modal Title");
        expect(modalFooter).toHaveClass("deriv-modal__footer--no-border");
    });

    it("should apply custom styles to the content and overlay", () => {
        const customStyle = {
            content: { backgroundColor: "red" },
            overlay: { opacity: 0.5 },
        };
        const { getByRole } = render(
            <Modal ariaHideApp={false} isOpen={true} style={customStyle}>
                <p>Modal Content</p>
            </Modal>,
        );

        const modalContent = getByRole("dialog");
        expect(modalContent).toHaveStyle("background-color: red");
        expect(modalContent.parentElement).toHaveStyle("opacity: 0.5");
    });

    // it("should call the onClose prop when the close button is clicked", () => {
    //     const onCloseMock = jest.fn();
    //     const { getByRole } = render(
    //         <Modal isOpen={true} onRequestClose={onCloseMock}>
    //             <p>This is some modal content</p>
    //         </Modal>,
    //     );

    //     userEvent.click(getByRole("button", { name: "Close" }));

    //     expect(onCloseMock).toHaveBeenCalledTimes(1);
    // });

    //   it('should not render the modal when isOpen is false', () => {
    //     const { queryByText } = render(<Modal isOpen={false}>This will not be shown</Modal>);

    //     expect(queryByText('This will not be shown')).not.toBeInTheDocument();
    //   });

    //   it('should apply custom styles to the content and overlay', () => {
    //     const customStyle = {
    //       content: { backgroundColor: 'red' },
    //       overlay: { opacity: 0.5 },
    //     };
    //     const { getByRole } = render(
    //       <Modal isOpen={true} style={customStyle}>
    //         <p>This content should have red background</p>
    //       </Modal>
    //     );

    //     const modalContent = getByRole('dialog');
    //     expect(modalContent).toHaveStyle('background-color: red');
    //     expect(modalContent).toHaveStyle('opacity: 0.5');
    //   });
});
