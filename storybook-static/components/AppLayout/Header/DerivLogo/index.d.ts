import { TVariant } from "../../LayoutTypes";
import "./DerivLogo.scss";
type TDerivLogo = {
    variant?: TVariant;
    className?: HTMLDivElement["className"];
};
export declare const DerivLogo: {
    ({ variant, className }: TDerivLogo): import('../../../../../node_modules/react').JSX.Element;
    displayName: string;
};
export {};
