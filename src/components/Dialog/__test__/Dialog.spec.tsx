import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from "..";
import { DialogHeader } from "../DialogHeader";

describe("Dialog component", () => {
  it("should render the basic dialog without header, footer and body", () => {
    render(
      <Dialog>
        <p>This is some dialog content</p>
      </Dialog>,
    );

    const dialog = screen.getByText("This is some dialog content");

    expect(dialog).toBeInTheDocument();
  });

  it("should render dialog header", () => {
    render(
      <Dialog>
        <Dialog.Header hideCloseIcon={false} title={"Dialog Title"} />
      </Dialog>,
    );

    const dialogHeader = screen.getByText("Dialog Title");
    const dialogCloseIcon = screen.queryByTestId("dt-close-icon");

    expect(dialogHeader).toBeInTheDocument();
    expect(dialogCloseIcon).toBeDefined();
  });

  it("should render the dialog header without close icon ", () => {
    render(
      <Dialog>
        <Dialog.Header hideCloseIcon={true} title={"Dialog Title"} />
      </Dialog>,
    );

    const dialogHeader = screen.getByText("Dialog Title");
    const dialogCloseIcon = screen.queryByTestId("dt-close-icon");

    expect(dialogHeader).toBeInTheDocument();
    expect(dialogCloseIcon).not.toBeInTheDocument();
  });


it("should render dialog Footer", () => {
    render(
      <Dialog>
        <Dialog.Footer>Dialog Footer</Dialog.Footer>
      </Dialog>,
    );

    const dialogFooter = screen.getByText("Dialog Footer");

    expect(dialogFooter).toBeInTheDocument();
  });

it("should close the modal when the close button in header is clicked", async () => {
    render(
      <Dialog>
        <DialogHeader title={" Modal Title"} hideCloseIcon={false}></DialogHeader>
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
