import React, { ReactNode } from "react"
import { Modal } from "../Modal"
import { DialogHeader } from "./DialogHeader"
import { DialogBody } from "./DialogBody"
import { DialogFooter } from "./DIalogFooter"
import "./Dialog.scss"

type TDialogProps = {
  bodyChildren:ReactNode
  footerChildren:ReactNode;
  title?: ReactNode;
}

export const Dialog = ({ bodyChildren,footerChildren,title }: TDialogProps) => {
  return (
    <Modal className={"deriv-dialog"} isOpen={true} ariaHideApp={false} >
      <DialogHeader title={title} />
      <DialogBody children={bodyChildren}/>
      <DialogFooter children={footerChildren}/>
    </Modal>
  )
}
