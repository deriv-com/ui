import React from "react"
import clsx from "clsx"
import { Modal } from "../Modal"
import { DialogHeader } from "./DialogHeader"
import { DialogBody } from "./DialogBody"
import { DialogFooter } from "./DialogFooter"
import "./Dialog.scss"

type TDialogProps = React.ComponentProps<typeof Modal> &{
  className?:string
}

export const Dialog = ({ children,className,...rest }: TDialogProps) => {
  return (
    <Modal className={clsx("deriv-dialog",className)} {...rest}>
      {children}
    </Modal>
  )
}

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.setAppElement = Modal.setAppElement;
