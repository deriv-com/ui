import React from "react";
import { render, screen } from "@testing-library/react";
import { Dialog } from "..";

describe("Dialog Component", () => {
  test("renders dialog with title, body, and footer", () => {
    const title = "Dialog Title";
    const bodyContent = "Dialog Body Content";
    const footerContent = "Dialog Footer Content";

    render(
      <Dialog
        title={title}
        bodyChildren={<div>{bodyContent}</div>}
        footerChildren={<div>{footerContent}</div>}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(bodyContent)).toBeInTheDocument();
    expect(screen.getByText(footerContent)).toBeInTheDocument();
  });

});
