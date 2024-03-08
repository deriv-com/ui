import { ReactNode } from "react"
import { Modal } from "../Modal"

type TDialogBodyProps = {
  children: ReactNode;
  className?: string;
}

export const DialogBody = ({ children, className }: TDialogBodyProps) => {
  return (
    <Modal.Body className={className}>
      {children}
    </Modal.Body>
  )
}
