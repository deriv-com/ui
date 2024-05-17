import React from "react";
import {
    FlagUnitedKingdomIcon,
    FlagChinaIcon,
    FlagVietnamIcon,
    FlagGermanyIcon,
} from "@deriv/quill-icons";
export const LanguagesItemsDrawerConfig = {
    onLanguageSwitch: (code: string) => {
        console.log("code", code);
    },
    onClose: () => {},
    languageItems: [
        {
            code: "en",
            display_name: "English",
            icon: <FlagUnitedKingdomIcon />,
        },
        {
            code: "zh",
            display_name: "简体中文",
            icon: <FlagChinaIcon />,
        },
        {
            code: "vi",
            display_name: "Tiếng Việt",
            icon: <FlagVietnamIcon />,
        },
        {
            code: "de",
            display_name: "Deutsch",
            icon: <FlagGermanyIcon />,
        },
    ],
};
