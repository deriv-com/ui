import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SideNote } from "..";

describe("SideNote Component", () => {

  it("renders properly with default props", () => {
    const { getByText, queryByTestId, container } = render(
      <SideNote>
        <div>Child content</div>
      </SideNote>,
    );
    const title = queryByTestId("dt_deriv-side-note-title");
    const content = getByText("Child content");
    const actionButton = container.getElementsByClassName('deriv-side-note__action');
    expect(title).not.toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(actionButton).toHaveLength(0);
  });

  it("renders children and title correctly", () => {
    const { getByText } = render(
      <SideNote title="Title">
        <div>Child content</div>
      </SideNote>
    );
    const title =getByText("Title");
    const child=getByText("Child content")
    expect(title).toBeInTheDocument();
    expect(child).toBeInTheDocument();
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
    const title = getByText("Title");
    const child = queryByText("Child content");
    expect(title).toBeInTheDocument();
    expect(child).toBeNull();
  });

  it("renders only children when title is not provided", () => {
    const { getByText, queryByText } = render(
      <SideNote>
        <div>Child content</div>
      </SideNote>
    );
    const title = queryByText("Title");
    const child = getByText("Child content");
    expect(child).toBeInTheDocument();
    expect(title).toBeNull();
  });

  it("renders action button with default label if no actionLabel provided", () => {
    const { getByText } = render(
      <SideNote actionClick={() => { }}>
        <div>Child content</div>
      </SideNote>
    );
    const action = getByText("Learn more")
    expect(action).toBeInTheDocument();
  });

});
