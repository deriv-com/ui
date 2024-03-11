import React from "react"
import { Modal } from "../Modal"

export const DialogFooter = ({ className, children,...rest }: React.ComponentProps<typeof Modal.Footer>) => {
    return (
        <Modal.Footer hideBorder className={className} {...rest}>
            {children}
        </Modal.Footer>
    )
}
