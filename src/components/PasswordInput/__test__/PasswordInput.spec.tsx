import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { PasswordInput } from "..";

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

    it("handles onChange event", async () => {
        const handleChange = jest.fn();
        render(
            <PasswordInput label="Password" onChange={handleChange} />
        );
        const input = screen.getByLabelText("Password");
        await userEvent.type(input, "password123");
        expect(handleChange).toHaveBeenCalledTimes(11);
    });

    it("handles onBlur event", async () => {
        const handleBlur = jest.fn();
        render(
            <PasswordInput label="Password" onBlur={handleBlur} />
        );
        const input = screen.getByLabelText("Password");
        await userEvent.click(input);
        await userEvent.click(input?.parentElement || document.body);
        expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("toggles password visibility", async () => {
        render(
            <PasswordInput label="Password" />
        );
        const input = screen.getByLabelText("Password");
        const toggleButton = screen.getByRole("button");
        await userEvent.click(toggleButton);
        expect(input).toHaveAttribute("type", "text");
        await userEvent.click(toggleButton);
        expect(input).toHaveAttribute("type", "password");
    });

    it("validates password and shows meter", async () => {
        const { container } = render(
            <PasswordInput label="Password" />
        );
        const input = screen.getByLabelText("Password");
        await userEvent.type(input, "pass");
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
