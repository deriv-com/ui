import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Breadcrumbs } from "..";

const items = [
    { value: 0, text: "Item1" },
    { value: 1, text: "Item2" },
    { value: 2, text: "Item3" },
    { value: 3, text: "Item4" },
];

describe("Breadcrumb component", () => {
    it("renders all provided items", () => {
        const handleOnClick = jest.fn();
        render(<Breadcrumbs items={items} handleOnClick={handleOnClick} />);

        const list = screen.getByRole("list");
        const { getAllByRole } = within(list);
        const renderedBreadCrumbs = getAllByRole("listitem");

        expect(renderedBreadCrumbs.length).toBe(4);
    });

    it("triggers provided callback when item was clicked", async () => {
        const handleOnClick = jest.fn();
        render(<Breadcrumbs items={items} handleOnClick={handleOnClick} />);

        const list = screen.getByRole("list");
        const { getByText } = within(list);
        userEvent.click(getByText("Item1"));

        await waitFor(() => {
            expect(handleOnClick).toHaveBeenCalledTimes(1);
        });
    });

    it("renders all provided items with custom separator ", () => {
        const handleOnClick = jest.fn();
        render(
            <Breadcrumbs
                items={items}
                handleOnClick={handleOnClick}
                separator={<div data-testid="dt_separator">{`-->`}</div>}
            />,
        );

        const list = screen.getByRole("list");
        const { getAllByTestId } = within(list);
        const renderedSeparators = getAllByTestId("dt_separator");

        expect(renderedSeparators.length).toBe(3);
    });
});
