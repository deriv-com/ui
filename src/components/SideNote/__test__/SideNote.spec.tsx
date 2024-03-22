import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SideNote } from "..";

describe("SideNote Component", () => {
  it("renders children and title correctly", () => {
    const { getByText } = render(
      <SideNote title="Title">
        <div>Child content</div>
      </SideNote>
    );
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Child content")).toBeInTheDocument();
  });

  it("renders action button and handles click event", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <SideNote actionClick={handleClick} actionLabel="Action">
        <div>Child content</div>
      </SideNote>
    );
    const actionButton = getByText("Action");
    fireEvent.click(actionButton);
    expect(handleClick).toHaveBeenCalled();
  });

  it("applies additional className correctly", () => {
    const { container } = render(
      <SideNote className="custom-class">
        <div>Child content</div>
      </SideNote>
    );
    expect(container.firstChild).toHaveClass("deriv-side-note", "custom-class");
  });

  it("renders only title when children are not provided", () => {
    const { getByText, queryByText } = render(<SideNote title="Title" />);
    expect(getByText("Title")).toBeInTheDocument();
    expect(queryByText("Child content")).toBeNull();
  });

  it("renders only children when title is not provided", () => {
    const { getByText, queryByText } = render(
      <SideNote>
        <div>Child content</div>
      </SideNote>
    );
    expect(getByText("Child content")).toBeInTheDocument();
    expect(queryByText("Title")).toBeNull();
  });

  it("renders action button with default label if no actionLabel provided", () => {
    const { getByText } = render(
      <SideNote actionClick={() => {}}>
        <div>Child content</div>
      </SideNote>
    );
    expect(getByText("Learn more")).toBeInTheDocument();
  });

});
