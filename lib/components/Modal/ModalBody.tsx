import { ComponentProps } from 'react';
import clsx from 'clsx';

export const ModalBody = ({ children,className, ...rest }: ComponentProps<"div">)=> {
    return (
        <div className={clsx('deriv-modal__body', className)} {...rest}>
            {children}
        </div>
    );
}
