import React, { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageItem } from "../LanguageItem";
import { FlagUnitedKingdomIcon } from "@deriv/quill-icons";

jest.mock("../../../../main", () => ({
    Button: ({
        children,
        onClick,
    }: {
        children: ReactNode;
        onClick: () => void;
    }) => <button onClick={onClick}>{children}</button>,
    Text: ({ children }: { children: ReactNode }) => <span>{children}</span>,
}));

describe("LanguageItem", () => {
    const language = {
        code: "en",
        displayName: "English",
        icon: FlagUnitedKingdomIcon,
    };
    const onButtonClick = jest.fn();
    const currentLang = "en";

    beforeEach(() => {
        render(
            <LanguageItem
                language={language}
                onButtonClick={onButtonClick}
                currentLang={currentLang}
            />,
        );
    });

    test("renders correctly", () => {
        expect(screen.getByText("English")).toBeInTheDocument();
    });

    test("calls onButtonClick when button is clicked", () => {
        fireEvent.click(screen.getByText("English"));
        expect(onButtonClick).toHaveBeenCalled();
    });

    test("applies bold weight to current language", () => {
        expect(screen.getByText("English")).toHaveClass(
            "derivs-text__weight--bold",
        );
    });
});
