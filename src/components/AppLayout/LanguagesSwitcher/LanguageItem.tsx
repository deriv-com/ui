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
    currentLang: string;
};
export const LanguageItem = ({
    language,
    onButtonClick,
    currentLang,
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
            weight={currentLang === language.code ? "bold" : "normal"}
        >
            {language.displayName}
        </Text>
    </Button>
)};
LanguageItem.displayName = "LanguageItem";