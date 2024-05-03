import { ReactNode } from "react";

export type TVariant = "default" | "wallets";

export type TAccountList = {
    type: string;
    loginId: string;
    balance: string;
    currency: string;
    token: string;
    showInEU: boolean;
    icon: ReactNode;
};
