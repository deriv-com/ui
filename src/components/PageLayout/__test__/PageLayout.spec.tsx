import React from "react";
import { render } from "@testing-library/react";
import { PageLayout } from "..";

// Mocking the useDevice hook
jest.mock("../../../main", () => ({
    ...jest.requireActual('../../../main'),
  useDevice: jest.fn(),
}));

describe("PageLayout Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <PageLayout>
        <div>Content</div>
      </PageLayout>
    );
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("renders sidebar when provided and not on mobile", () => {
    const sidebar = <div>Sidebar</div>;
    const { getByText } = render(<PageLayout sidebar={sidebar} />);
    expect(getByText("Sidebar")).toBeInTheDocument();
  });

  fit("does not render sidebar on mobile", () => {
    // Mocking isMobile to be true
    jest.spyOn(require("../../../main"), "useDevice").mockImplementation(() => ({ isMobile: true }));

    const sidebar = <div>Sidebar</div>;
    const { queryByText } = render(<PageLayout sidebar={sidebar} />);
    expect(queryByText("Sidebar")).toBeNull();
  });

  it("does not render sidebar when not provided", () => {
    const { queryByTestId } = render(<PageLayout />);
    expect(queryByTestId("sidebar")).toBeNull();
  });
});
