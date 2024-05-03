import { ComponentProps, ReactNode } from '../../../../../node_modules/react';
import "./PlatformSwitcher.scss";
type TPlatformSwitcherButton = Omit<ComponentProps<"button">, "className"> & {
    icon: ReactNode;
};
export declare const PlatformSwitcherButton: {
    ({ icon, ...props }: TPlatformSwitcherButton): import('../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export {};
