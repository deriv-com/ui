import React, { HtmlHTMLAttributes } from '../../../node_modules/react';
import { TGenericSizes } from "../../types";
import { Input } from "../Input/index";
import "./Dropdown.scss";
type InputProps = React.ComponentProps<typeof Input>;
type TProps = HtmlHTMLAttributes<HTMLInputElement> & {
    disabled?: boolean;
    dropdownIcon: React.ReactNode;
    errorMessage?: InputProps["message"];
    icon?: React.ReactNode;
    isRequired?: boolean;
    isFullWidth?: boolean;
    label?: InputProps['label'];
    list: {
        text?: React.ReactNode;
        value?: string;
    }[];
    listHeight?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    name: InputProps["name"];
    onSearch?: (inputValue: string) => void;
    onSelect: (value: string) => void;
    value?: InputProps["value"];
    variant?: "comboBox" | "prompt";
};
export declare const Dropdown: ({ disabled, dropdownIcon, errorMessage, icon, isFullWidth, label, list, listHeight, name, onSearch, onSelect, value, variant, ...rest }: TProps) => React.JSX.Element;
export {};
