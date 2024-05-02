import { ComponentProps } from '../../../node_modules/react';
type ModalHeaderProps = ComponentProps<'div'> & {
    hideCloseIcon?: boolean;
    onRequestClose?: VoidFunction;
    shouldShowBorder?: boolean;
    hideBorder?: boolean;
};
export declare const ModalHeader: ({ children, hideCloseIcon, className, onRequestClose, hideBorder, ...rest }: ModalHeaderProps) => import('../../../node_modules/react').JSX.Element;
export {};
