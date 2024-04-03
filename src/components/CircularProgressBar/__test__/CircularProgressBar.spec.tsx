import React from "react";
import { render } from "@testing-library/react";
import { CircularProgressBar } from "..";

describe("CircularProgressBar Component", () => {
    it("renders correctly with default props", () => {
        const { container } = render(<CircularProgressBar/>);
        expect(container.querySelector(".deriv-circular-progress__bar")).toBeInTheDocument();
    });

    it("renders children correctly", () => {
        const { getByText } = render(
            <CircularProgressBar>
                <div className="circular-progress-content">Child content</div>
            </CircularProgressBar>
        );
        expect(getByText("Child content")).toBeInTheDocument();
    });

    it("renders correctly with isClockwise prop as True", () => {
        const { container } = render(<CircularProgressBar is_clockwise/>);
        expect(container.querySelector(".deriv-circular-progress--clockwise")).toBeInTheDocument();
    });

});
