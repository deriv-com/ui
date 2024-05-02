import ReactModal from 'react-modal';
import './Modal.scss';
export declare const CUSTOM_STYLES: {
    content: {
        background: string;
        border: string;
        borderRadius: number;
        bottom: string;
        left: string;
        margin: number;
        marginRight: string;
        padding: number;
        right: string;
        top: string;
        transform: string;
        transition: string;
        boxShadow: string;
    };
    overlay: {
        backgroundColor: string;
        zIndex: number;
    };
};
interface ModalProps extends ReactModal.Props {
    style?: {
        content?: React.CSSProperties;
        overlay?: React.CSSProperties;
    };
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
export declare const Modal: {
    ({ children, style, className, ...rest }: ModalProps): import('../../../node_modules/react').JSX.Element;
    Header: ({ children, hideCloseIcon, className, onRequestClose, hideBorder, ...rest }: import('../../../node_modules/react').ClassAttributes<HTMLDivElement> & import('../../../node_modules/react').HTMLAttributes<HTMLDivElement> & {
        hideCloseIcon?: boolean | undefined;
        onRequestClose?: VoidFunction | undefined;
        shouldShowBorder?: boolean | undefined;
        hideBorder?: boolean | undefined;
    }) => import('../../../node_modules/react').JSX.Element;
    Body: ({ children, className, ...rest }: import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => import('../../../node_modules/react').JSX.Element;
    Footer: ({ children, className, hideBorder, ...rest }: import('../../../node_modules/react').ClassAttributes<HTMLDivElement> & import('../../../node_modules/react').HTMLAttributes<HTMLDivElement> & {
        hideBorder?: boolean | undefined;
    }) => import('../../../node_modules/react').JSX.Element;
    setAppElement: typeof ReactModal.setAppElement;
};
export {};
