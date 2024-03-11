import React, { ReactNode } from "react"
import { Modal } from "../Modal"
import { DialogHeader } from "./DialogHeader"
import { DialogBody } from "./DialogBody"
import { DialogFooter } from "./DialogFooter"
import "./Dialog.scss"

type TDialogProps = React.ComponentProps<typeof Modal> &{
  children: ReactNode
}

export const Dialog = ({ children,...rest }: TDialogProps) => {
  return (
    <Modal className={"deriv-dialog"} {...rest}>
      {children}
    </Modal>
  )
}

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.setAppElement = Modal.setAppElement;
