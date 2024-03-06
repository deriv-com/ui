import { ComponentProps, } from 'react';
import clsx from 'clsx';

import { CloseIcon } from './CloseIcon';

type ModalHeaderProps = ComponentProps<'div'> & {
    hideCloseIcon?: boolean;
    onRequestClose?: VoidFunction;
    shouldShowBorder?: boolean;
    hideBorder?: boolean;
}

export const ModalHeader = ({ children, hideCloseIcon, className, onRequestClose, hideBorder = false, ...rest }: ModalHeaderProps) => {
    return (
        <div className={clsx('deriv-modal__header', {
            'deriv-modal__header--no-border': hideBorder,
            'deriv-modal__header--justify-end': !children,
        }, className)} {...rest}>
            {children}
            {!hideCloseIcon && <CloseIcon data-testid="dt-close-icon" onClick={onRequestClose} className="deriv-modal__close-icon" />}
        </div>
    );
}
