import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { PasswordInput } from "..";

jest.mock('@zxcvbn-ts/core', () => ({
    ...jest.requireActual('@zxcvbn-ts/core'),
    zxcvbn: jest.fn(() => ({
        score: 0,
        feedback: {
            warning: '',
            suggestions: [],
        },
    })),
}));

describe("PasswordInput component", () => {
    it("renders with default props", () => {
        render(
            <PasswordInput
                hidePasswordMeter
                hint="Password must be at least 8 characters"
                label="Password"
                isFullWidth={true} />
        );
        const input = screen.getByLabelText('Password');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'password');
        expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
    });

    it("handles onChange event", () => {
        const handleChange = jest.fn();
        render(
            <PasswordInput label="Password" onChange={handleChange} />
        );
        const input = screen.getByLabelText("Password");
        fireEvent.change(input, { target: { value: "password123" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("handles onBlur event", () => {
        const handleBlur = jest.fn();
        render(
            <PasswordInput label="Password" onBlur={handleBlur} />
        );
        const input = screen.getByLabelText("Password");
        fireEvent.blur(input);
        expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("toggles password visibility", () => {
        render(
            <PasswordInput label="Password" />
        );
        const input = screen.getByLabelText("Password");
        const toggleButton = screen.getByRole("button");
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute("type", "text");
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute("type", "password");
    });

    it("validates password and shows meter", () => {
        const { container } = render(
            <PasswordInput label="Password" />
        );
        const input = screen.getByLabelText("Password");
        fireEvent.change(input, { target: { value: "pass" } });
        expect(container.querySelector(".deriv-password__meter__bar--weak")).toBeInTheDocument();
    });

    it("displays hint message", () => {
        render(
            <PasswordInput label="Password" hint="Password must contain at least one uppercase letter" />
        );
        expect(screen.getByText("Password must contain at least one uppercase letter")).toBeInTheDocument();
    });

    it("hides password meter when hidePasswordMeter prop is true", () => {
        const { container } = render(
            <PasswordInput label="Password" hidePasswordMeter />
        );
        expect(container.querySelector(".deriv-password__meter")).not.toBeInTheDocument();
    });

});
