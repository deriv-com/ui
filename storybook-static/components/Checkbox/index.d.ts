import { ComponentProps, ReactNode } from '../../../node_modules/react';
import "./Checkbox.scss";
interface CheckboxProps extends Omit<ComponentProps<"input">, "placeholder" | "defaultChecked" | "name"> {
    name: string;
    error?: boolean;
    label?: ReactNode;
    labelClassName?: string;
    wrapperClassName?: string;
}
export declare const Checkbox: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
