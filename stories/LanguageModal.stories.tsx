import { Meta, StoryObj } from "@storybook/react";
import { DesktopLanguagesModal } from "../src/main";
import { useEffect, useState } from "react";
import {
    FlagChinaIcon,
    FlagGermanyIcon,
    FlagIndonesiaIcon,
    FlagUnitedKingdomIcon,
    FlagVietnamIcon,
} from "@deriv/quill-icons";
const meta: Meta = {
    title: "Components/LanguagesModal",
    component: DesktopLanguagesModal,
    parameters: { layout: "centered" },
    args: {
        languages: [
            {
                code: "en",
                displayName: "English",
                icon: FlagUnitedKingdomIcon,
            },
            {
                code: "id",
                displayName: "Bahasa Indonesia",
                icon: FlagIndonesiaIcon,
            },
            {
                code: "zh_cn",
                displayName: "简体中文",
                icon: FlagChinaIcon,
            },
            {
                code: "vi",
                displayName: "Tiếng Việt",
                icon: FlagVietnamIcon,
            },
            {
                code: "de",
                displayName: "Deutsch",
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
    },
    argTypes: {
        isModalOpen: {
            control: {
                type: "boolean",
            },
        },
        headerTitle: {
            control: {
                type: "text",
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        const [isModalOpen, setIsModalOpen] = useState(args.isModalOpen);
        useEffect(() => {
            setIsModalOpen(args.isModalOpen);
        }, [args.isModalOpen]);
        return (
            <DesktopLanguagesModal
                {...args}
                onLanguageSwitch={(arg) => setValue(arg)}
                currentLang={value}
                isModalOpen={isModalOpen}
                languages={args.languages}
                headerTitle={args.headerTitle}
                onClose={() => {
                    setIsModalOpen(false);
                }}
            />
        );
    },
};
