import React from "react"
import { Modal } from "../Modal"

export const DialogBody = ({ children, className,...rest }: React.ComponentProps<typeof Modal.Body>) => {
  return (
    <Modal.Body className={className} {...rest}>
      {children}
    </Modal.Body>
  )
}
