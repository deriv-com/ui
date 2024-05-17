import { ReactElement } from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";
import "./LanguagesDrawer.scss";
import clsx from "clsx";
export type TLanguageItem = {
    code: string;
    display_name: string | ReactElement;
    icon: ReactElement;
};

type TLanguageDrawer = {
    onClose: () => void;
    onLanguageSwitch: (code: string) => void;
    selectedLang: string;
    className: string;
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
    wrapperClassName
}: TLanguagesItemsDrawerProps) => {
    return (
        <div className={clsx("languages-body", wrapperClassName)}>
            {isOpen &&
                languages.map((language) => {
                    const Icon = () => language.icon;
                    const onButtonClick = () => {
                        onLanguageSwitch(language.code);
                        onClose();
                    };
                    return (
                        <div key={language.code} className="languages-body__item">
                            <Button
                                className="languages-body__item-button"
                                icon={<Icon />}
                                onClick={onButtonClick}
                                variant="ghost"
                            >
                                <Text
                                    size="sm"
                                    weight={
                                        selectedLang === language.code
                                            ? "bold"
                                            : "normal"
                                    }
                                >
                                    {language.display_name}
                                </Text>
                            </Button>
                        </div>
                    );
                })}
        </div>
    );
};
