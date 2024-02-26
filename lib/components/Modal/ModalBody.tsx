import { PropsWithChildren, HtmlHTMLAttributes } from 'react';
import clsx from 'clsx';
// import './Modal.scss'


export const ModalBody = ({ children,className, ...rest }: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>): React.JSX.Element => {
    return (
        <div className={clsx('deriv-modal__body', className)} {...rest}>
            {children}
        </div>
    );
}