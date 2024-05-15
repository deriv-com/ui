import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "..";

const testText = "This is a test content.";
const mockFn = jest.fn();

const HeaderComponent = () => (
    <Header role="header" className="custom-class" onClick={mockFn}>
        <p>{testText}</p>
    </Header>
);

describe("Header component", () => {
    it("should render children properly", () => {
        render(<HeaderComponent />);
        expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it("should render with default class", () => {
        render(<HeaderComponent />);
        const headerElement = screen.getByRole("header");
        expect(headerElement).toHaveClass("deriv-header");
    });

    it("should render with additional class", () => {
        render(<HeaderComponent />);
        const headerElement = screen.getByRole("header");
        expect(headerElement).toHaveClass("deriv-header custom-class");
    });

    it("should render rest props", async () => {
        render(<HeaderComponent />);
        const headerElement = screen.getByRole("header");
        await userEvent.click(headerElement);
        expect(mockFn).toHaveBeenCalled();
    });
});
