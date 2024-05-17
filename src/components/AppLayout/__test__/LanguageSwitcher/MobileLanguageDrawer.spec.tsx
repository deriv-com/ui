import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MobileLanguagesDrawer } from "../../LanguagesSwitcher/MobileLanguagesDrawer";
import { FlagFranceIcon, FlagUnitedKingdomIcon } from "@deriv/quill-icons";


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
        expect(screen.getByText("English")).toHaveClass("derivs-text__weight--bold");
        expect(screen.getByText("French")).not.toHaveClass("derivs-text__weight--bold");
    });
});
