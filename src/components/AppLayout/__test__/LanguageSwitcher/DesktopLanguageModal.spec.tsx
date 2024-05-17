import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DesktopLanguagesModal } from "../../LanguagesSwitcher/DesktopLanguagesModal";
import { FlagFranceIcon, FlagUnitedKingdomIcon } from "@deriv/quill-icons";

describe("DesktopLanguagesModal", () => {
    const languages = [
        { code: "en", displayName: "English", icon: FlagUnitedKingdomIcon },
        { code: "fr", displayName: "French", icon: FlagFranceIcon },
    ];
    const onClose = jest.fn();
    const onLanguageSwitch = jest.fn();
    const currentLang = "en";
    const headerTitle = "Select Language";

    beforeEach(() => {
        render(
            <DesktopLanguagesModal
                isModalOpen={true}
                languages={languages}
                onClose={onClose}
                onLanguageSwitch={onLanguageSwitch}
                currentLang={currentLang}
                headerTitle={headerTitle}
            />,
        );
    });

    test("renders correctly when open", () => {
        expect(screen.getByText("Select Language")).toBeTruthy();
        expect(screen.getByText("English")).toBeTruthy();
        expect(screen.getByText("French")).toBeTruthy();
    });

    test("calls onLanguageSwitch and onClose when a language is clicked", () => {
        fireEvent.click(screen.getByText("French"));
        expect(onLanguageSwitch).toHaveBeenCalledWith("fr");
        expect(onClose).toHaveBeenCalled();
    });

    test("applies bold weight to current language", () => {
        const englishText = screen.getByText("English")
        expect(englishText).toHaveClass("derivs-text__weight--bold");

        const frenchText = screen.getByText("French").closest("span");
        expect(frenchText).not.toHaveClass("derivs-text__weight--bold");
    });
});
