import React, { ReactNode } from "react"
import { Modal } from "../Modal"
import { DialogHeader } from "./DialogHeader"
import { DialogBody } from "./DialogBody"
import { DialogFooter } from "./DIalogFooter"
import "./Dialog.scss"

type TDialogProps = {
  bodyChildren:ReactNode
  header?: string;
  footerChildren:ReactNode;
  title?: ReactNode;
}

export const Dialog = ({ bodyChildren,footerChildren,header,title,...rest }: TDialogProps) => {
  return (
    <Modal className={"deriv-dialog"}  ariaHideApp={false} isOpen  {...rest}>
      <DialogHeader title={title} />
      <DialogBody children={bodyChildren}/>
      <DialogFooter children={footerChildren}/>
    </Modal>
  )
}