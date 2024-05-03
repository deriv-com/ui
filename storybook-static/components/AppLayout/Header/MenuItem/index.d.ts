import { ComponentProps, ReactNode } from '../../../../../node_modules/react';
import "./MenuItem.scss";
type TMenuItem = ComponentProps<"a"> & {
    icon: ReactNode;
    label: string;
    active?: boolean;
};
export declare const MenuItem: {
    ({ href, className, label, active, icon, ...props }: TMenuItem): import('../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export {};
