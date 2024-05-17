import React from "react";
import {
    FlagUnitedKingdomIcon,
    FlagChinaIcon,
    FlagVietnamIcon,
    FlagGermanyIcon,
    FlagIndonesiaIcon,
} from "@deriv/quill-icons";
export const LanguagesItemsDrawerConfig = {
    languages: [
        {
            code: "en",
            displayName: "English",
            icon: <FlagUnitedKingdomIcon />,
        },
        {
            code: "id",
            displayName: "Bahasa Indonesia",
            icon: <FlagIndonesiaIcon />,
        },
        {
            code: "zh_cn",
            displayName: "简体中文",
            icon: <FlagChinaIcon />,
        },
        {
            code: "vi",
            displayName: "Tiếng Việt",
            icon: <FlagVietnamIcon />,
        },
        {
            code: "de",
            displayName: "Deutsch",
            icon: <FlagGermanyIcon />,
        },
    ],
    currentLang: "en",
    headerTitle: "Select Language",
    onClose: () => {},
    onLanguageSwitch: (code: string) => {
        console.log("code", code);
    },
    isModalOpen: true,
};
