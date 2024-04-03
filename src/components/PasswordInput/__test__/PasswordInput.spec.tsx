import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
    validPassword,
    isPasswordValid,
    isPasswordModerate,
    isPasswordStrong,
    calculateScore,
  } from "../PasswordUtils";
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
        const input = screen.getByLabelText("Password");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "password");
        expect(screen.getByText("Password must be at least 8 characters")).toBeInTheDocument();
    });

    it("renders with placeholder text", () => {
        const { getByPlaceholderText } = render(
            <PasswordInput label="Enter your password" />
        );
        expect(getByPlaceholderText("Enter your password")).toBeInTheDocument();
    });

    it("displays custom error message when provided", async () => {
        const { getByLabelText, getByText } = render(
            <PasswordInput label="Password" value="weak" message="Custom error message" />
        );
        const input = getByLabelText("Password");
        await userEvent.click(input);
        expect(getByText("Custom error message")).toBeInTheDocument();
    })

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

    it("initializes isTouched state correctly", async() => {
        render(<PasswordInput label="Password" />);
        const input = screen.getByLabelText("Password");
        await userEvent.click(input);
        expect(input).toHaveValue("");
      });

});

describe("PasswordUtils", () => {
    describe("validPassword", () => {
      it("returns true for a valid password", () => {
        expect(validPassword("ValidPassword123")).toBe(true);
      });

      it("returns false for an invalid password", () => {
        expect(validPassword("short")).toBe(false);
        expect(validPassword("noUpperNoSymbol123")).toBe(true);
        expect(validPassword("NoLowerNoSymbol123")).toBe(true);
      });
    });

    describe("isPasswordValid", () => {
      it("returns true for a valid password", () => {
        expect(isPasswordValid("ValidPassword123")).toBe(true);
      });

      it("returns false for an invalid password", () => {
        expect(isPasswordValid("short")).toBe(false);
        expect(isPasswordValid("noUpperNoSymbol123")).toBe(true);
        expect(isPasswordValid("NoLowerNoSymbol123")).toBe(true);
      });
    });

    describe("isPasswordModerate", () => {
      it("returns true for a moderate password", () => {
        expect(isPasswordModerate("ModeratePass123$")).toBe(false);
      });

      it("returns false for an invalid password", () => {
        expect(isPasswordModerate("noUpperNoSymbol123")).toBe(false);
        expect(isPasswordModerate("NoLowerNoSymbol123")).toBe(false);
      });

      it("returns false for a strong password", () => {
        expect(isPasswordModerate("StrongPassword123$")).toBe(false);
      });
    });

    describe("isPasswordStrong", () => {
      it("returns true for a strong password", () => {
        expect(isPasswordStrong("StrongPassword123$")).toBe(false);
      });

      it("returns false for an invalid password", () => {
        expect(isPasswordStrong("short")).toBe(false);
        expect(isPasswordStrong("noUpperNoSymbol123")).toBe(false);
        expect(isPasswordStrong("NoLowerNoSymbol123")).toBe(false);
      });
    });

    describe("calculateScore", () => {
      it("returns the correct score for a given password", () => {
        expect(calculateScore("")).toBe(0); // Empty password
        expect(calculateScore("short")).toBe(1); // Too short
        expect(calculateScore("WeakPassword")).toBe(1); // Missing characters
        expect(calculateScore("ModeratePass123$")).toBe(2); // Moderate strength
        expect(calculateScore("StrongPassword123$")).toBe(2); // Strong password
      });
    });

    it("should return 0 for empty password", () => {
        expect(calculateScore("")).toBe(0);
      });

      it("should return 1 for invalid password", () => {
        expect(calculateScore("password")).toBe(1);
      });

      it("should return 2 for moderate password", () => {
        expect(calculateScore("Abcd1234!")).toBe(2);
      });

  });
