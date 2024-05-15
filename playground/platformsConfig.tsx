import React, { ReactNode } from "react";
import {
    DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon as DerivTraderLogo,
    DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon as DerivBotLogo,
    PartnersProductSmarttraderBrandLightLogoWordmarkIcon as SmarttraderLogo,
    PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon as BinaryBotLogo,
} from "@deriv/quill-icons/Logo";

export type PlatformsConfig = {
    href: string;
    description: string;
    icon: ReactNode;
    buttonIcon: ReactNode;
    active: boolean;
    showInEU: boolean;
};

export const platformsConfig: PlatformsConfig[] = [
    {
        href: "https://app.deriv.com",
        showInEU: true,
        active: true,
        description:
            "A whole new trading experience on a powerful yet easy to use platform.",
        icon: <DerivTraderLogo width={148} height={32} />,
        buttonIcon: <DerivTraderLogo width={114.97} height={25} />,
    },
    {
        href: "https://app.deriv.com/bot",
        showInEU: false,
        active: false,
        description: "Automated trading at your fingertips. No coding needed.",
        icon: <DerivBotLogo width={121} height={32} />,
        buttonIcon: <DerivBotLogo width={91} height={24} />,
    },
    {
        href: "https://smarttrader.deriv.com",
        showInEU: false,
        active: false,
        description:
            "Trade the world’s markets with our popular user-friendly platform.",
        icon: <SmarttraderLogo width={153} height={32} />,
        buttonIcon: <SmarttraderLogo width={115} height={24} />,
    },
    {
        href: "https://bot.deriv.com",
        showInEU: false,
        active: false,
        description:
            "Our classic “drag-and-drop” tool for creating trading bots, featuring pop-up trading charts, for advanced users.",
        icon: <BinaryBotLogo width={133} height={32} />,
        buttonIcon: <BinaryBotLogo width={100} height={24} />,
    },
];
