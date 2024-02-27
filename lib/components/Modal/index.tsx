import ReactModal from 'react-modal';
import clsx from 'clsx';

import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

import './Modal.scss'

export const CUSTOM_STYLES = {
    content: {
        background: 'none',
        border: 'none',
        borderRadius: 0,
        bottom: 'auto',
        left: '50%',
        margin: 0,
        marginRight: '-50%',
        padding: 0,
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.35s ease-in-out',
        boxShadow: '0px 32px 64px 0px rgba(14, 14, 14, 0.14)'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.72)',
        zIndex: 9999,
    },
};

export const Modal = ({ children, isOpen, onRequestClose, shouldCloseOnOverlayClick, style,className, ...rest }: ReactModal.Props) => {
    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            style={{
                content: {
                    ...CUSTOM_STYLES.content,
                    ...style?.content,
                },
                overlay: {
                    ...CUSTOM_STYLES.overlay,
                    ...style?.overlay,
                },

            }}
            {...rest}
        >
            <div className={clsx('deriv-modal__wrapper', className)}>
                {children}
            </div>
        </ReactModal>
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

