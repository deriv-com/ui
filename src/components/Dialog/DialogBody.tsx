import React from "react"
import { Modal } from "../Modal"

export const DialogBody = ({ children, className,...rest }: React.ComponentProps<"div">) => {
  return (
    <Modal.Body className={className} {...rest}>
      {children}
    </Modal.Body>
  )
}
