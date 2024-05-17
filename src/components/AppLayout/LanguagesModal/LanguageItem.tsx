import { ReactElement } from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { IconTypes } from "@deriv/quill-icons";
type TLanguageItem = {
    code: string;
    display_name: string | ReactElement;
    icon: IconTypes;
};
export type TLangComponent = {
    language: TLanguageItem;
    onButtonClick: () => void;
    currentLang: string;
};
export const LanguageItem = ({
    language,
    onButtonClick,
    currentLang,
}: TLangComponent) => (
    <Button
        className="languages-modal__body-button"
        color="black"
        icon={<language.icon />}
        onClick={onButtonClick}
        variant="ghost"
    >
        <Text
            size="sm"
            weight={currentLang === language.code ? "bold" : "normal"}
        >
            {language.display_name}
        </Text>
    </Button>
);
