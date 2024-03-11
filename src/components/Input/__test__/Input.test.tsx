import { render, screen } from "@testing-library/react";
import { Input } from "..";

const props = { label: "Test", message: "Test message", id: "test" };

describe("Input", () => {
    it("should render correctly", () => {
        const { container, getByLabelText } = render(<Input {...props} />);
        const inputContainer = container.firstChild;
        const input = getByLabelText(props.label);
        expect(inputContainer).toHaveClass("deriv-input__container");
        expect(inputContainer).toHaveTextContent(props.label);
        expect(inputContainer).toHaveTextContent(props.message);
        expect(input).toBeInTheDocument();
    });

    it("should show label", () => {
        render(<Input {...props} />);
        const inputLabel = screen.getByText(props.label);
        expect(inputLabel).toBeInTheDocument();
    });

    it("container should be full width", () => {
        const { container } = render(<Input {...props} isFullWidth />);
        const inputContainer = container.firstChild;
        expect(inputContainer).toHaveClass("deriv-input__container--full");
    });

    it("should show message", () => {
        render(<Input {...props} />);
        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message--general");
        expect(helperMessage).toBeInTheDocument();
    });

    it("should hide message", () => {
        const { container } = render(<Input {...props} hideMessage />);
        const inputContainer = container.firstChild;
        const input = inputContainer?.lastChild;
        expect(input).not.toHaveClass("deriv-helper-message--general");
    });

    it("should show different variants: General", () => {
        const { container } = render(<Input {...props} />);
        const inputContainer = container.firstChild;
        const input = inputContainer?.firstChild;
        const inputLabel = screen.getByText(props.label);
        const helperMessage = screen.getByText(props.message);
        expect(input).toHaveClass("deriv-input--general");
        expect(input).not.toHaveClass("deriv-input--error");
        expect(inputLabel).toHaveClass("deriv-input__label--general");
        expect(helperMessage).toHaveClass("deriv-helper-message--general");
    });

    it("should show different variants: Success", () => {
        const { container } = render(<Input variant="success" {...props} />);
        const inputContainer = container.firstChild;
        const input = inputContainer?.firstChild;
        const inputLabel = screen.getByText(props.label);
        const helperMessage = screen.getByText(props.message);
        expect(input).toHaveClass("deriv-input--success");
        expect(input).not.toHaveClass("deriv-input--error");
        expect(inputLabel).toHaveClass("deriv-input__label--success");
        expect(helperMessage).toHaveClass("deriv-helper-message--success");
    });

    it("should show different variants: Error", () => {
        const { container } = render(<Input variant="error" {...props} />);
        const inputContainer = container.firstChild;
        const input = inputContainer?.firstChild;
        const inputLabel = screen.getByText(props.label);
        const helperMessage = screen.getByText(props.message);
        expect(input).toHaveClass("deriv-input--error");
        expect(input).not.toHaveClass("deriv-input--success");
        expect(inputLabel).toHaveClass("deriv-input__label--error");
        expect(helperMessage).toHaveClass("deriv-helper-message--error");
    });

    it("should show different variants: Warning", () => {
        const { container } = render(<Input variant="warning" {...props} />);
        const inputContainer = container.firstChild;
        const input = inputContainer?.firstChild;
        const inputLabel = screen.getByText(props.label);
        const helperMessage = screen.getByText(props.message);
        expect(input).toHaveClass("deriv-input--general");
        expect(input).not.toHaveClass("deriv-input--error");
        expect(inputLabel).toHaveClass("deriv-input__label--general");
        expect(helperMessage).toHaveClass("deriv-helper-message--warning");
    });

    it("should show different variants: Disabled", () => {
        const { container } = render(<Input variant="disabled" {...props} />);
        const inputContainer = container.firstChild;
        const input = inputContainer?.firstChild;
        const inputLabel = screen.getByText(props.label);
        expect(input).toHaveClass("deriv-input--disabled");
        expect(input).not.toHaveClass("deriv-input--error");
        expect(inputLabel).toHaveClass("deriv-input__label--disabled");
    });

    it("should show different variants: Disabled", () => {
        const { container } = render(<Input variant="disabled" {...props} />);
        const inputContainer = container.firstChild;
        const input = inputContainer?.firstChild;
        const inputLabel = screen.getByText(props.label);
        expect(input).toHaveClass("deriv-input--disabled");
        expect(input).not.toHaveClass("deriv-input--error");
        expect(inputLabel).toHaveClass("deriv-input__label--disabled");
    });
});
