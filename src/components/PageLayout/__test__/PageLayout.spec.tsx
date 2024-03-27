import React from "react";
import { render, screen } from "@testing-library/react";
import { PageLayout } from "..";

// Mocking the useDevice hook
jest.mock("../../../hooks/useDevice", () => ({
    ...jest.requireActual('../../../hooks/useDevice'),
  useDevice: jest.fn().mockReturnValue({isMobile:false}),
}));

describe("PageLayout Component", () => {
  it("renders children correctly", () => {
    render(
      <PageLayout>
        <div>Content</div>
      </PageLayout>
    );
    const content =screen.getByText("Content")
    expect(content).toBeInTheDocument();
  });

  it("renders sidebar when provided and not on mobile", () => {
    const sidebar = <div>Sidebar</div>;
    render(<PageLayout sidebar={sidebar} />);
    const sidebarContent =screen.getByText("Sidebar")
    expect(sidebarContent).toBeInTheDocument();
  });

  it("does not render sidebar on mobile", () => {
    jest.spyOn(require("../../../hooks/useDevice"), "useDevice").mockImplementation(() => ({ isMobile: true }));
    const sidebar = <div>Sidebar</div>;
    render(<PageLayout sidebar={sidebar} />);
    const sidebarContent =screen.queryByText("Sidebar")
    expect(sidebarContent).not.toBeInTheDocument()
  });

  it("does not render sidebar when not provided", () => {
    render(<PageLayout />);
    const sidebarContent=screen.queryByTestId("sidebar")
    expect(sidebarContent).toBeNull();
  });
});
