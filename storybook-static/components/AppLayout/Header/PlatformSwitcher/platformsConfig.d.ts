import { ReactNode } from '../../../../../node_modules/react';
export type PlatformsConfig = {
    href: string;
    description: string;
    icon: ReactNode;
    buttonIcon: ReactNode;
    active: boolean;
    showInEU: boolean;
};
export declare const platformsConfig: Array<Omit<PlatformsConfig, "active">>;
