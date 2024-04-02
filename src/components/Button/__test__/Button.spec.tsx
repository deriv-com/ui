import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "..";

describe("Button component", () => {
  it("renders without crashing", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole("button", { name: /test button/i })).toBeInTheDocument();
  });

  it("applies the contained variant classes when variant is contained", () => {
    const { container } = render(<Button variant="contained">Test Button</Button>);
    expect(container.firstChild).toHaveClass("deriv-button__variant--contained");
  });

  it("applies the ghost variant classes when variant is ghost", () => {
    const { container } = render(<Button variant="ghost">Test Button</Button>);
    expect(container.firstChild).toHaveClass("deriv-button__variant--ghost");
  });

  it("applies the outlined variant classes when variant is outlined", () => {
    const { container } = render(<Button variant="outlined">Test Button</Button>);
    expect(container.firstChild).toHaveClass("deriv-button__variant--outlined");
  });

  it("applies the correct color class based on the color prop", () => {
    const { container } = render(<Button color="primary">Test Button</Button>);
    expect(container.firstChild).toHaveClass("deriv-button__color--primary");
  });

  it("applies full width class when isFullWidth prop is true", () => {
    const { container } = render(<Button isFullWidth>Test Button</Button>);
    expect(container.firstChild).toHaveClass("deriv-button__full-width");
  });

  it("does not apply full width class when isFullWidth prop is false", () => {
    const { container } = render(<Button>Test Button</Button>);
    expect(container.firstChild).not.toHaveClass("deriv-button__full-width");
  });

  it("shows loader when isLoading prop is true", () => {
    render(<Button isLoading>Test Button</Button>);
    expect(screen.getByTestId("dt_derivs-loader")).toBeInTheDocument();
  });

  it("does not show loader when isLoading prop is false", () => {
    render(<Button>Test Button</Button>);
    expect(screen.queryByTestId("loader")).toBeNull();
  });

  it("disables the button when disabled prop is true", () => {
    render(<Button disabled>Test Button</Button>);
    expect(screen.getByRole("button", { name: /test button/i })).toBeDisabled();
  });

  it("disables the button when isLoading prop is true", () => {
    render(<Button isLoading>Test Button</Button>);
    expect(screen.getByRole("button", { name: /test button/i })).toBeDisabled();
  });

  it("applies the correct size class based on the size prop", () => {
    const { container } = render(<Button size="lg">Test Button</Button>);
    expect(container.firstChild).toHaveClass("deriv-button__size--lg");
  });

  it("applies the correct rounded class based on the rounded prop", () => {
    const { container } = render(<Button rounded="md">Test Button</Button>);
    expect(container.firstChild).toHaveClass("deriv-button__rounded--md");
  });

  it("shows the icon when provided and not loading", () => {
    const Icon = () => <span>Icon</span>;
    render(<Button icon={<Icon />}>Test Button</Button>);
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  it("does not show the icon when isLoading prop is true", () => {
    const Icon = () => <span>Icon</span>;
    render(<Button isLoading icon={<Icon />}>Test Button</Button>);
    expect(screen.queryByText("Icon")).toBeNull();
  });

  it("renders children text when not loading", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole("button", { name: /test button/i })).toHaveTextContent("Test Button");
  });

  it("does not render children text when isLoading prop is true", () => {
    render(<Button isLoading>Test Button</Button>);
    expect(screen.queryByText("Test Button")).toBeNull();
  });

  it("hover styles are applied when hideHoverStyles is true", () => {
    render(
      <Button hideHoverStyles={true}>Hover Button</Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("deriv-button__hover--disabled");
  });

  it("hover styles are not applied when hideHoverStyles is false", () => {
    render(
      <Button>Hover Button</Button>
    );
    const button = screen.getByRole("button");
    expect(button).not.toHaveClass("deriv-button__hover--disabled");
  });

});
