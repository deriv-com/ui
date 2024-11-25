import ReactModal from "react-modal";
import clsx from "clsx";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

import "./Modal.scss";

export const CUSTOM_STYLES = {
    content: {
        background: 'none',
        border: 'none',
        borderRadius: '10px',
        bottom: 'auto',
        left: '50%',
        margin: 0,
        marginRight: '-50%',
        padding: 0,
        right: 'auto',
        top: '20%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.35s ease-in-out',
        boxShadow: '0px 32px 64px 0px rgba(14, 14, 14, 0.14)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.72)',
        zIndex: 9999,
    },
};

interface ModalProps extends ReactModal.Props {
    style?: {
        content?: React.CSSProperties,
        overlay?: React.CSSProperties,
    }
}

/**
 * Represents a modal component.it's a wrapper around react-modal.
 * you can use all props exposing from the react-modal.
 *
 * @returns {JSX.Element} - Returns the modal component.
 * @example
 * //Basic Usage:
 *
 *   <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)}/>
 *      <Modal.Header>
 *        <Text as='div' weight='bold' className='deriv-modal__header-title'>
 *            Modal Header
 *        </Text>
 *     </Modal.Header>
 *     <Modal.Body>
 *       <div>modal body</div>
 *     </Modal.Body>
 *     <Modal.Footer>
 *        <Button color="black">cancel</Button>
 *        <Button>ok</Button>
 *     </Modal.Footer>
 *   </Modal>
 *
 * //Disable overlay style and clickHandler:
 * // just pass shouldCloseOnOverlayClick as false and style overlay as none.
 *
 *   <Modal isOpen={isOpen} shouldCloseOnOverlayClick={false} style={{
 *      overlay: {
 *             backgroundColor: 'none',
 *          }
 *      }
 *   </Modal>
 *
 * //header close icon handler:
 * // just pass onRequestClose as a prop to the Modal.Header component.
 *      <Modal.Header onRequestClose={()=>setIsOpen(false)}>
 *        <Text as='div' weight='bold' className='deriv-modal__header-title'>
 *            Modal Header
 *        </Text>
 *     </Modal.Header>
 *
 * //Custom Parent Element:
 * // just pass the parent element id to the setAppElement method.
 *   Modal.setAppElement("#modal-root");
 */
export const Modal = ({ children, style, className, ...rest }: ModalProps) => {
    return (
        <ReactModal
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
Modal.setAppElement = ReactModal.setAppElement;

