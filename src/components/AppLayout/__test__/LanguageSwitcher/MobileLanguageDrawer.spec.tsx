import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileLanguagesDrawer } from "../../LanguagesSwitcher/MobileLanguagesDrawer";
import { FlagFranceIcon, FlagUnitedKingdomIcon } from "@deriv/quill-icons";

jest.mock("./../../LanguagesSwitcher/LanguageItem", () => ({
    LanguageItem: ({ language, onButtonClick, currentLang }) => (
        <div onClick={onButtonClick}>
            <span>{language.icon}</span>
            <span>{language.displayName}</span>
            <span>{currentLang === language.code ? "bold" : "normal"}</span>
        </div>
    ),
}));

describe("MobileLanguagesDrawer", () => {
    const languages = [
        { code: "en", displayName: "English", icon: FlagUnitedKingdomIcon },
        { code: "fr", displayName: "French", icon: FlagFranceIcon },
    ];
    const onClose = jest.fn();
    const onLanguageSwitch = jest.fn();
    const selectedLang = "en";
    const isOpen = true;
    const wrapperClassName = "custom-wrapper";

    beforeEach(() => {
        render(
            <MobileLanguagesDrawer
                languages={languages}
                onClose={onClose}
                onLanguageSwitch={onLanguageSwitch}
                selectedLang={selectedLang}
                isOpen={isOpen}
                wrapperClassName={wrapperClassName}
            />
        );
    });

    test("renders correctly when open", () => {
        expect(screen.getByText("English")).toBeInTheDocument();
        expect(screen.getByText("French")).toBeInTheDocument();
    });

    test("calls onLanguageSwitch and onClose when a language is clicked", () => {
        fireEvent.click(screen.getByText("French"));
        expect(onLanguageSwitch).toHaveBeenCalledWith("fr");
        expect(onClose).toHaveBeenCalled();
    });

    test("applies bold weight to selected language", () => {
        expect(screen.getByText("bold")).toBeInTheDocument();
        expect(screen.getByText("normal")).toBeInTheDocument();
    });
});
