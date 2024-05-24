import { ReactElement, ReactNode } from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";
import clsx from "clsx";

type TLanguageItem = {
    code: string;
    displayName: string | ReactElement;
    icon: ReactNode;
};
type TLangComponent = {
    language: TLanguageItem;
    onButtonClick: () => void;
    selectedLanguage: string;
};
export const LanguageItem = ({
    language,
    onButtonClick,
    selectedLanguage,
}: TLangComponent) => {
    const isSelected = selectedLanguage === language.code;
    return (
        <Button
            className={clsx("languages-modal__body-button", {
                "languages-modal__body-button-selected": isSelected,
            })}
            icon={language.icon}
            onClick={onButtonClick}
            variant="ghost"
            color="white"
        >
            <Text size="sm" weight={isSelected ? "bold" : "normal"}>
                {language.displayName}
            </Text>
        </Button>
    );
};
LanguageItem.displayName = "LanguageItem";
