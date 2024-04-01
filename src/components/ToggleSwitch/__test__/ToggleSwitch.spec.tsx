import React from "react";
import { render } from "@testing-library/react";
import { ToggleSwitch } from "..";
import userEvent from "@testing-library/user-event";

describe("ToggleSwitch Component", () => {
    it("should renders with correct value passed as prop", () => {
        const { getByRole, rerender } = render(<ToggleSwitch value={true} />);
        const toggleSwitch = getByRole("checkbox");
        expect(toggleSwitch).toBeChecked();
        rerender(<ToggleSwitch value={false} />);
        expect(toggleSwitch).not.toBeChecked();
    });

    it("should be set to false when no value prop is provided", () => {
        const { getByRole } = render(<ToggleSwitch/>);
        const toggleSwitch = getByRole("checkbox");
        expect(toggleSwitch).not.toBeChecked();
    });
    it("should update the value when user clicks on it", async () => {
        const { getByRole } = render(<ToggleSwitch/>);
        const toggleSwitch = getByRole("checkbox");
        expect(toggleSwitch).not.toBeChecked();
        await userEvent.click(toggleSwitch);
        expect(toggleSwitch).toBeChecked();
    });

    it("should call the onChange prop when user clicks on it", async () => {
        const mockedOnChange = jest.fn();
        const { getByRole } = render(<ToggleSwitch onChange={mockedOnChange} />);
        const toggleSwitch = getByRole("checkbox");
        await userEvent.click(toggleSwitch);
        expect(mockedOnChange).toHaveBeenCalled();
    });


    it("should apply wrapperClassName and className correctly", () => {
        const { container } = render(
            <ToggleSwitch
                wrapperClassName="wrapper-class"
                className="custom-class"
            />
        );
        const wrapper = container.querySelector(".deriv-toggle-switch.wrapper-class");
        expect(wrapper).toBeInTheDocument();
        const input = wrapper?.querySelector("input");
        expect(input).toHaveClass("custom-class");
    });

    it("applies wrapperStyle and style correctly", () => {
        const { container } = render(
            <ToggleSwitch
                wrapperStyle={{ backgroundColor: "red" }}
                style={{ fontSize: "16px" }}
            />
        );
        const input = container.querySelector(".deriv-toggle-switch input");
        expect(input).toHaveStyle({ fontSize: "16px" });
        const label = input?.parentElement;
        expect(label).toHaveStyle({ backgroundColor: "red" });
    });
});
