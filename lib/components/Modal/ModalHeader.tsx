import { HtmlHTMLAttributes, PropsWithChildren, } from 'react';
import clsx from 'clsx';


type ModalHeaderProps = HtmlHTMLAttributes<HTMLDivElement> & {
    hideCloseIcon?: boolean;
    onRequestClose?: ((event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void) | undefined
}

const CrossIcon = ({ className, onClick }: { className?: string, onClick?: ((event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void) }) => <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
    <path d="M0.292894 2.20711C-0.0976312 1.81658 -0.0976312 1.18342 0.292894 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L7.41421 6.5L11.7071 10.7929C12.0976 11.1834 12.0976 11.8166 11.7071 12.2071C11.3166 12.5976 10.6834 12.5976 10.2929 12.2071L6 7.91421L1.70711 12.2071C1.31658 12.5976 0.683418 12.5976 0.292893 12.2071C-0.0976309 11.8166 -0.0976309 11.1834 0.292893 10.7929L4.58579 6.5L0.292894 2.20711Z" fill="#333333" />
</svg>


export const ModalHeader = ({ children, hideCloseIcon, className, onRequestClose, ...rest }: PropsWithChildren<ModalHeaderProps>) => {
    return (
        <div className={clsx('deriv-modal__header', className)} {...rest}>
            {children}
            {!hideCloseIcon && <CrossIcon onClick={() => onRequestClose} className="deriv-modal__header-close" />}
        </div>
    );
}