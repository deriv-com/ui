import { ComponentProps } from 'react';
import clsx from 'clsx';

export const ModalFooter = ({ children, className, ...rest }: ComponentProps<"div">) => {
    return (
        <div className={clsx(`deriv-modal__footer`, className)} {...rest}>
            {children}
        </div>
    );
}