import { act, render, screen } from "@testing-library/react";
import { DatePicker } from "..";

describe("DatePicker", () => {
    it("should display the datepicker on clicking the input field", () => {
        render(
            <DatePicker
                value="2025-02-13"
                onDateChange={() => {}}
                label="Date"
            />,
        );
        act(() => {
            screen.getByRole("textbox", { name: "Date" }).click();
        });
        expect(
            screen.getByRole("button", { name: "February 14, 2025" }),
        ).toBeInTheDocument();
    });

    it("should display the datepicker on clicking the calendar icon button", () => {
        render(
            <DatePicker
                value="2026-02-13"
                onDateChange={() => {}}
                label="Date"
            />,
        );
        act(() => {
            screen.getByRole("button", { name: "Date" }).click();
        });
        expect(
            screen.getByRole("button", { name: "February 14, 2026" }),
        ).toBeInTheDocument();
    });

    it("should hide the datepicker if it's currently being displayed, on clicking the input field", () => {
        render(
            <DatePicker
                value="2026-02-13"
                onDateChange={() => {}}
                label="Date"
            />,
        );
        expect(
            screen.queryByRole("button", { name: "February 14, 2026" }),
        ).not.toBeInTheDocument();
        act(() => {
            screen.getByRole("textbox", { name: "Date" }).click();
        });
        expect(
            screen.getByRole("button", { name: "February 14, 2026" }),
        ).toBeInTheDocument();
        act(() => {
            screen.getByRole("textbox", { name: "Date" }).click();
        });
        expect(
            screen.queryByRole("button", { name: "February 14, 2026" }),
        ).not.toBeInTheDocument();
    });

    it("should keep the input field disabled if disabled prop is true", () => {
        render(
            <DatePicker
                value="2026-02-13"
                onDateChange={() => {}}
                label="Date"
                disabled
            />,
        );
        expect(screen.getByRole("textbox", { name: "Date" })).toBeDisabled();
    });

    it("should keep the input field disabled if disabled prop is true", () => {
        render(
            <DatePicker
                value="2026-02-13"
                onDateChange={() => {}}
                label="Date"
                disabled
            />,
        );
        expect(screen.getByRole("textbox", { name: "Date" })).toBeDisabled();
    });

    it("should apply the general classname if the datepicker variant is set to general", () => {
        render(
            <DatePicker
                value=""
                message="Helper message"
                variant="general"
                onDateChange={() => {}}
            />,
        );
        expect(screen.getByText("Helper message")).toHaveClass(
            "deriv-helper-message--general",
        );
    });

    it("should apply the success classname if the datepicker variant is set to success", () => {
        render(
            <DatePicker
                value=""
                message="Helper message"
                variant="success"
                onDateChange={() => {}}
            />,
        );
        expect(screen.getByText("Helper message")).toHaveClass(
            "deriv-helper-message--success",
        );
    });

    it("should apply the warning classname if the datepicker variant is set to warning", () => {
        render(
            <DatePicker
                value=""
                message="Helper message"
                variant="warning"
                onDateChange={() => {}}
            />,
        );
        expect(screen.getByText("Helper message")).toHaveClass(
            "deriv-helper-message--warning",
        );
    });

    it("should apply the error classname if the datepicker variant is set to error", () => {
        render(
            <DatePicker
                value=""
                message="Helper message"
                variant="error"
                onDateChange={() => {}}
            />,
        );
        expect(screen.getByText("Helper message")).toHaveClass(
            "deriv-helper-message--error",
        );
    });

    it("should display the error message if the datepicker is marked as invalid", () => {
        render(
            <DatePicker
                value=""
                message="Helper message"
                errorMessage="Error message"
                isInvalid
                variant="error"
                onDateChange={() => {}}
            />,
        );
        expect(screen.queryByText("Helper message")).not.toBeInTheDocument();
        expect(screen.getByText("Error message")).toBeInTheDocument();
    });

    it("should display the helper message if the datepicker is not marked as invalid", () => {
        render(
            <DatePicker
                value=""
                message="Helper message"
                errorMessage="Error message"
                variant="error"
                onDateChange={() => {}}
            />,
        );
        expect(screen.queryByText("Error message")).not.toBeInTheDocument();
        expect(screen.getByText("Helper message")).toBeInTheDocument();
    });
});
