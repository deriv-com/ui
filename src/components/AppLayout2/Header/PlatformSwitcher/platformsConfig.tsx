import { ReactNode } from "react";
import {
    DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon,
    DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon,
    PartnersProductSmarttraderBrandLightLogoWordmarkIcon,
    PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon,
} from "@deriv/quill-icons/Logo";

export type PlatformsConfig = {
    href: string;
    description: string;
    icon: ReactNode;
    buttonIcon: ReactNode;
    active: boolean;
    showInEU: boolean;
};

export const platformsConfig: Array<Omit<PlatformsConfig, "active">> = [
    {
        href: "https://app.deriv.com",
        showInEU: true,
        description:
            "A whole new trading experience on a powerful yet easy to use platform.",
        icon: (
            <DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon
                width={148}
                height={32}
            />
        ),
        buttonIcon: (
            <DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon
                width={111}
                height={24}
            />
        ),
    },
    {
        href: "https://app.deriv.com/bot",
        showInEU: false,
        description: "Automated trading at your fingertips. No coding needed.",
        icon: (
            <DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon
                width={121}
                height={32}
            />
        ),
        buttonIcon: (
            <DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon
                width={91}
                height={24}
            />
        ),
    },
    {
        href: "https://smarttrader.deriv.com",
        showInEU: false,
        description:
            "Trade the world’s markets with our popular user-friendly platform.",
        icon: (
            <PartnersProductSmarttraderBrandLightLogoWordmarkIcon
                width={153}
                height={32}
            />
        ),
        buttonIcon: (
            <PartnersProductSmarttraderBrandLightLogoWordmarkIcon
                width={115}
                height={24}
            />
        ),
    },
    {
        href: "https://bot.deriv.com",
        showInEU: false,
        description:
            "Our classic “drag-and-drop” tool for creating trading bots, featuring pop-up trading charts, for advanced users.",
        icon: (
            <PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon
                width={133}
                height={32}
            />
        ),
        buttonIcon: (
            <PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon
                width={100}
                height={24}
            />
        ),
    },
];
