import { ReactElement, ReactNode } from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";

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
    return(
    <Button
        className="languages__body-button"
        icon={language.icon}
        onClick={onButtonClick}
        variant="ghost"
    >
        <Text
            size="sm"
            weight={selectedLanguage === language.code ? "bold" : "normal"}
        >
            {language.displayName}
        </Text>
    </Button>
)};
LanguageItem.displayName = "LanguageItem";