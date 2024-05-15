import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Wrapper } from "..";

type TWrapperComponent = {
    variant?: "left" | "right";
};

const testText = "This is a unit test for Wrapper Component";
const mockClick = jest.fn();

const WrapperComponent = ({ variant = "left" }: TWrapperComponent) => (
    <Wrapper
        role="div"
        variant={variant}
        className="deriv-test-class"
        onClick={mockClick}
    >
        <span>{testText}</span>
    </Wrapper>
);

describe("Wrapper Component", () => {
    it("should render children properly", () => {
        render(<WrapperComponent />);
        expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it("should apply additional className properly", () => {
        render(<WrapperComponent />);
        const divElement = screen.getByRole("div");
        expect(divElement).toHaveClass("deriv-test-class");
    });

    it("should render additional props properly", async () => {
        render(<WrapperComponent />);
        const divElement = screen.getByRole("div");
        await userEvent.click(divElement);
        expect(mockClick).toHaveBeenCalled();
    });

    it('should render as left variant when "variant" prop is "left"', () => {
        render(<WrapperComponent variant="left" />);
        const divElement = screen.getByRole("div");
        expect(divElement).toHaveClass("deriv-wrapper__left");
    });

    it('should render as right variant when "variant" prop is "right"', () => {
        render(<WrapperComponent variant="right" />);
        const divElement = screen.getByRole("div");
        expect(divElement).toHaveClass("deriv-wrapper__right");
    });
});
