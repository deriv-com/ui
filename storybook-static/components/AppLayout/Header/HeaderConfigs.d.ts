import { ReactNode } from '../../../../node_modules/react';
import { TVariant } from "../LayoutTypes";
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
export declare const HeaderConfigs: THeaderConfigs;
export {};
