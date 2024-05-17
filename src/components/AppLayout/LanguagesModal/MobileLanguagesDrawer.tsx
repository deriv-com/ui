import "./LanguagesDrawer.scss";
import clsx from "clsx";
import { LanguageItem, TLanguageItem } from "./LanguageItem";

type TLanguageDrawer = {
    onClose: () => void;
    onLanguageSwitch: (code: string) => void;
    selectedLang: string;
    isOpen: boolean;
    wrapperClassName?: string;
};

// Define the props for the component using intersection type
type TLanguagesItemsDrawerProps = {
    languages: TLanguageItem[];
} & TLanguageDrawer;

export const MobileLanguagesDrawer = ({
    languages,
    onClose,
    onLanguageSwitch,
    selectedLang,
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
                            currentLang={selectedLang}
                        />
                    );
                })}
        </div>
    );
};
