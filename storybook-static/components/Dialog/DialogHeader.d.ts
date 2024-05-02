import React from '../../../node_modules/react';
import { Modal } from "../Modal";
type TDialogHeaderProps = Omit<React.ComponentProps<typeof Modal.Header>, "hideBorder"> & {
    hideCloseIcon?: boolean;
    textClassName?: string;
};
export declare const DialogHeader: ({ children, className, hideCloseIcon, textClassName, ...rest }: TDialogHeaderProps) => React.JSX.Element;
export {};
