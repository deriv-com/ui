import { render, screen } from "@testing-library/react";
import HelperMessage from "../HelperMessage";

const props = { message: "This is a helper message" };

describe("HelperMessage", () => {
    it("should render correctly", () => {
        render(<HelperMessage {...props} />);
        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message");
        expect(helperMessage).toHaveTextContent(props.message);
    });

    it("should render variants: General", () => {
        render(<HelperMessage {...props} />);
        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message--general");
    });

    it("should render variants: Success", () => {
        render(<HelperMessage {...props} variant="success" />);

        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message--success");
    });

    it("should render variants: Error", () => {
        render(<HelperMessage {...props} variant="error" />);

        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message--error");
    });

    it("should render variants: Warning", () => {
        render(<HelperMessage {...props} variant="warning" />);

        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message--warning");
    });

    it("should show disabled", () => {
        render(<HelperMessage {...props} disabled variant="disabled" />);

        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message--disabled");
    });

    it("should show Error variant", () => {
        render(<HelperMessage {...props} error />);

        const helperMessage = screen.getByText(props.message);
        expect(helperMessage).toHaveClass("deriv-helper-message--error");
    });
});
