
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
        const tab1Content = screen.getByText("Tab 1 Content")
        expect(tabsComponent).toBeInTheDocument();
        expect(tab1Content).toBeInTheDocument();
        expect(tabsComponent).toHaveClass("derivs-primary-tabs");
    });

    it("changes active tab when clicked", () => {
        render(
            <Tabs>
                <Tab title="Tab 1">Tab 1 Content</Tab>
                <Tab title="Tab 2">Tab 2 Content</Tab>
            </Tabs>
        );
        const tab2 = screen.getByText("Tab 2");
        fireEvent.click(tab2);
        const activeButton = screen.getAllByRole("button")[1];
        const tabContent = screen.getByText("Tab 2 Content")
        expect(tabContent).toBeInTheDocument();
        expect(activeButton).toHaveClass("derivs-primary-tabs__btn--active");
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
