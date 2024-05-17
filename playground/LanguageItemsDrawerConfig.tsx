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
            display_name: "English",
            icon: FlagUnitedKingdomIcon,
        },
        {
            code: "id",
            display_name: "Bahasa Indonesia",
            icon: FlagIndonesiaIcon,
        },
        {
            code: "zh_cn",
            display_name: "简体中文",
            icon: FlagChinaIcon,
        },
        {
            code: "vi",
            display_name: "Tiếng Việt",
            icon: FlagVietnamIcon,
        },
        {
            code: "de",
            display_name: "Deutsch",
            icon: FlagGermanyIcon,
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
