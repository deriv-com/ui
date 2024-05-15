import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from "..";

const testText = "This is a test content.";
const mockFn = jest.fn();

const FooterComponent = () => (
    <Footer role="footer" className="custom-class" onClick={mockFn}>
        <p>{testText}</p>
    </Footer>
);

describe("Footer component", () => {
    it("should render children properly", () => {
        render(<FooterComponent />);
        expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it("should render with default class", () => {
        render(<FooterComponent />);
        const footerElement = screen.getByRole("footer");
        expect(footerElement).toHaveClass("deriv-footer");
    });

    it("should render with additional class", () => {
        render(<FooterComponent />);
        const footerElement = screen.getByRole("footer");
        expect(footerElement).toHaveClass("deriv-footer custom-class");
    });

    it("should render rest props", async () => {
        render(<FooterComponent />);
        const footerElement = screen.getByRole("footer");
        await userEvent.click(footerElement);
        expect(mockFn).toHaveBeenCalled();
    });
});
