import { HtmlHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export const ModalFooter = ({ children, className, ...rest }: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
    return (
        <div className={clsx(`deriv-modal__footer`, className)} {...rest}>
            {children}
        </div>
    );
}