
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Tab, Tabs } from "..";

describe("Tabs Component", () => {
    it("renders Tabs component with primary variant by default", () => {
        const { container } = render(
            <Tabs>
                <Tab title="Tab 1">Tab 1 Content</Tab>
                <Tab title="Tab 2">Tab 2 Content</Tab>
            </Tabs>
        );

        const tabsComponent = container.querySelector(".derivs-primary-tabs")
        const tabTitle = screen.getByText("Tab 1")
        const tab1Content = screen.getByText("Tab 1 Content")
        expect(tabTitle).toBeInTheDocument();
        expect(tabsComponent).toBeInTheDocument();
        expect(tab1Content).toBeInTheDocument();
        expect(tabsComponent).toHaveClass("derivs-primary-tabs");
    });

    it("changes active tab when clicked and checks active tab content showing", () => {
        render(
            <Tabs activeTab="Tab 1">
                <Tab title="Tab 1">Tab 1 Content</Tab>
                <Tab title="Tab 2">Tab 2 Content</Tab>
            </Tabs>
        );
        const tab1 = screen.getByText("Tab 1 Content")
        expect(tab1).toBeInTheDocument();
        const tab2 = screen.getByText("Tab 2");
        fireEvent.click(tab2);
        const activeButton = screen.getAllByRole("button")[1];
        const tabContent = screen.getByText("Tab 2 Content")
        expect(tabContent).toBeInTheDocument();
        expect(activeButton).toHaveClass("derivs-primary-tabs__btn--active");
    });

    it("should render tabs with correct variant", () => {
        const { container } = render(
            <Tabs variant="secondary">
                <Tab title="Tab 1">Tab 1 Content</Tab>
                <Tab title="Tab 2">Tab 2 Content</Tab>
            </Tabs>
        );
        const tabsComponent = container.querySelector(".derivs-secondary-tabs")
        expect(tabsComponent).toBeInTheDocument();
    });

    it("should render tabs with correct title font size", () => {
        const { container } = render(
            <Tabs TitleFontSize="lg">
                <Tab title="Tab 1">Tab 1 Content</Tab>
                <Tab title="Tab 2">Tab 2 Content</Tab>
            </Tabs>
        );

        const tabsComponent = container.querySelector(".derivs-primary-tabs")

        expect(tabsComponent).toHaveStyle("font-size: lg;");
    });

    it("should call onChange handler when a tab is clicked", () => {
        const mockOnChange = jest.fn();
        const { getByText } = render(
            <Tabs onChange={mockOnChange}>
                <Tab title="Tab 1">Tab 1 Content</Tab>
                <Tab title="Tab 2">Tab 2 Content</Tab>
            </Tabs>
        );
        const tabTitle = getByText("Tab 1");
        fireEvent.click(tabTitle);
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("applies custom class to wrapper", () => {
        const { container } = render(
            <Tabs wrapperClassName="custom-wrapper">
                <Tab title="Tab 1">Tab 1 Content</Tab>
                <Tab title="Tab 2">Tab 2 Content</Tab>
            </Tabs>
        );
        const tabsWrapper = container.querySelector(".custom-wrapper");
        expect(tabsWrapper).toBeInTheDocument();
    });
});
