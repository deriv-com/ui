import { ReactNode } from "react";
import { TVariant } from "../LayoutTypes";
import { LegacyMaximize1pxIcon } from "@deriv/quill-icons";

export type THeaderVariants = "guest" | "trader's hub" | "wallet" | "default";

export type THeaderConfig = {
    logoVariant?: TVariant;
    platformSwitcher?: {
        className?: string;
    };
    menuItems?: {
        href: string;
        className?: string;
        label: string;
        icon: ReactNode;
    }[];
    tutorial?: boolean;
    notification?: {
        className?: string;
    };
    accountSettings?: {
        className?: string;
    };
    accountSwitcher?: {
        className?: string;
    };
    actionButtons?: boolean;
};

type THeaderConfigs = Record<THeaderVariants, THeaderConfig>;

export const HeaderConfigs: THeaderConfigs = {
    guest: {
        platformSwitcher: { className: "" },
        actionButtons: true,
    },
    "trader's hub": {
        logoVariant: "default",
        menuItems: [
            {
                label: "Trader's Hub",
                icon: <LegacyMaximize1pxIcon height={16} width={16} />,
                className: "",
                href: "",
            },
            { label: "cashier", icon: "", className: "", href: "" },
        ],
        tutorial: true,
        notification: { className: "" },
        accountSwitcher: {},
    },
    wallet: {
        logoVariant: "wallets",
        platformSwitcher: { className: "" },
    },
    default: {
        platformSwitcher: { className: "" },
        menuItems: [
            {
                label: "Trader's Hub",
                icon: <LegacyMaximize1pxIcon height={16} width={16} />,
                className: "",
                href: "",
            },
            { label: "Reports", icon: "", className: "", href: "" },
            { label: "Cashier", icon: "", className: "", href: "" },
        ],
        notification: { className: "" },
        accountSettings: { className: "" },
        accountSwitcher: {},
        actionButtons: true,
    },
} as const;
