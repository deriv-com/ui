import React, { ReactNode } from "react"
import { Modal } from "../Modal"
import { DialogHeader } from "./DialogHeader"
import { DialogBody } from "./DialogBody"
import { DialogFooter } from "./DialogFooter"
import "./Dialog.scss"

type TDialogProps = {
  children: ReactNode
}

export const Dialog = ({ children }: TDialogProps) => {
  return (
    <Modal className={"deriv-dialog"} isOpen={true} ariaHideApp={false} >
      {children}
    </Modal>
  )
}

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.setAppElement = Modal.setAppElement;
