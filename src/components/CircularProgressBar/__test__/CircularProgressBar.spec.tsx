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

    it("renders circular progress bar with custom className", () => {
        const { container } = render(<CircularProgressBar className="custom-class" />);
        const circularProgressBar = container.querySelector(".custom-class");
        expect(circularProgressBar).toBeInTheDocument();
        expect(circularProgressBar).toHaveClass("deriv-circular-progress", "custom-class");
      });

      it("renders circular progress bar with custom radius and stroke", () => {
        const { container } = render(<CircularProgressBar radius={30} stroke={5} />);
        const circularProgressBar = container.querySelector(".deriv-circular-progress__bar");
        expect(circularProgressBar).toHaveAttribute("r", "27.5");
        expect(circularProgressBar).toHaveAttribute("stroke-width", "5");
      });

      it("renders circular progress bar with custom progress and warning limits", () => {
        const { container } = render(<CircularProgressBar progress={20} warning_limit={30} danger_limit={10} />);
        const circularProgressBar = container.querySelector(".deriv-circular-progress__bar");
        expect(circularProgressBar).toHaveClass("deriv-circular-progress__bar--warning");
      });

      it("renders circular progress bar with custom progress and danger limits", () => {
        const { container } = render(<CircularProgressBar progress={5} warning_limit={30} danger_limit={10} />);
        const circularProgressBar = container.querySelector(".deriv-circular-progress__bar");
        expect(circularProgressBar).toHaveClass("deriv-circular-progress__bar--danger");
      });

});
