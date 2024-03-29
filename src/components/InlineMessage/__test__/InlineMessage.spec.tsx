import React from "react";
import { render } from "@testing-library/react";
import { InlineMessage } from "..";

describe("InlineMessage Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<InlineMessage>Test Message</InlineMessage>);
    expect(getByText("Test Message")).toBeInTheDocument();
  });

  it("renders with specified variant", () => {
    const { container } = render(
      <InlineMessage variant="error">Error Message</InlineMessage>
    );
    expect(container.firstChild).toHaveClass(
      "deriv-inline-message__error--filled"
    );
  });

  it("renders with specified icon", () => {
    const { container } = render(
      <InlineMessage icon={<span>Icon</span>}>Message with Icon</InlineMessage>
    );
    expect(container.querySelector(".deriv-inline-message__icon")).toBeInTheDocument();
  });

  it("renders with specified type", () => {
    const { container } = render(
      <InlineMessage variant="warning" type="outlined">Outlined Warning Message</InlineMessage>
    );
    expect(container.firstChild).toHaveClass(
      "deriv-inline-message__warning--outlined"
    );
  });

  it("renders with custom class name", () => {
    const { container } = render(
      <InlineMessage className="custom-class">Custom Message</InlineMessage>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should position the icon at the top", () => {
    const { container } = render(
      <InlineMessage iconPosition="top" variant="info">
        Test Message
      </InlineMessage>
    );
    const iconElement = container.querySelector(".deriv-inline-message__icon--top")
    expect(iconElement).toBeInTheDocument();
  });
});
