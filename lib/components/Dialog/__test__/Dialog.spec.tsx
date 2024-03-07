import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dialog } from "..";

describe("Dialog Component", () => {
  it("renders with header and body", () => {
    render(
      <Dialog
        isOpen={true}
        header="Test Header"
        body={<div>Test Body</div>}
        primaryButton={<button>Primary Button</button>}
      />
    );

    expect(screen.getByText("Test Header")).toBeInTheDocument();
    expect(screen.getByText("Test Body")).toBeInTheDocument();
    expect(screen.getByText("Primary Button")).toBeInTheDocument();
  });

  it("renders without header and secondary button", () => {
    render(
      <Dialog
        isOpen={true}
        body={<div>Test Body</div>}
        primaryButton={<button>Primary Button</button>}
      />
    );

    expect(screen.queryByText("Test Header")).toBeNull();
    expect(screen.getByText("Test Body")).toBeInTheDocument();
    expect(screen.getByText("Primary Button")).toBeInTheDocument();
    expect(screen.queryByText("Secondary Button")).toBeNull();
  });

  it("calls onClick handler for primary button", () => {
    const onClick = jest.fn();
    render(
      <Dialog
        isOpen={true}
        header="Test Header"
        body={<div>Test Body</div>}
        primaryButton={<button onClick={onClick}>Primary Button</button>}
      />
    );

    fireEvent.click(screen.getByText("Primary Button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("calls onClick handler for secondary button", () => {
    const onClick = jest.fn();
    render(
      <Dialog
      isOpen={true}
        header="Test Header"
        body={<div>Test Body</div>}
        primaryButton={<button>Primary Button</button>}
        secondaryButton={<button onClick={onClick}>Secondary Button</button>}
      />
    );

    fireEvent.click(screen.getByText("Secondary Button"));
    expect(onClick).toHaveBeenCalled();
  });
});
