import "./LanguagesDrawer.scss";
import clsx from "clsx";
import { LanguageItem } from "./LanguageItem";
import { ComponentProps } from "react";

type TLanguageDrawer = {
    onClose: () => void;
    onLanguageSwitch: (code: string) => void;
    selectedLanguage: string;
    isOpen: boolean;
    wrapperClassName?: string;
};

// Define the props for the component using intersection type
type TLanguagesItemsDrawerProps = {
    languages: ComponentProps<typeof LanguageItem>['language'][];
} & TLanguageDrawer;

export const MobileLanguagesDrawer = ({
    languages,
    onClose,
    onLanguageSwitch,
    selectedLanguage,
    isOpen,
    wrapperClassName,
}: TLanguagesItemsDrawerProps) => {
    return (
        <div className={clsx("languages__body", wrapperClassName)}>
            {isOpen &&
                languages.map((language) => {
                    const onButtonClick = () => {
                        onLanguageSwitch(language.code);
                        onClose();
                    };
                    return (
                        <LanguageItem
                            key={language.code}
                            language={language}
                            onButtonClick={onButtonClick}
                            selectedLanguage={selectedLanguage}
                        />
                    );
                })}
        </div>
    );
};
MobileLanguagesDrawer.displayName = "MobileLanguagesDrawer";
