import { ComponentProps } from '../../../../../node_modules/react';
import { TVariant } from "../../LayoutTypes";
import "./DerivLogo.scss";
type TDerivLogo = ComponentProps<"a"> & {
    variant?: TVariant;
};
export declare const DerivLogo: {
    ({ variant, className, ...props }: TDerivLogo): import('../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export {};
