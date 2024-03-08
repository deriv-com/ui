import { ReactNode } from "react"
import { Modal } from "../Modal"

type TDialogFooterProps = {
    className?: string;
    children: ReactNode
}

export const DialogFooter = ({ className, children }: TDialogFooterProps) => {
    return (
        <Modal.Footer hideBorder className={className}>
            {children}
        </Modal.Footer>
    )
}
