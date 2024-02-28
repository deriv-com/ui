import { ComponentProps } from 'react';
import clsx from 'clsx';

type ModalFooterProps = ComponentProps<"div"> & {
    hideBorder?: boolean;
}

export const ModalFooter = ({ children, className, hideBorder = false, ...rest }: ModalFooterProps ) => {
    return (
        <div className={clsx(`deriv-modal__footer`, {
            'deriv-modal__footer--no-border': hideBorder,
        }, className)} {...rest}>
            {children}
        </div>
    );
}