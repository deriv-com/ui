import React, { ComponentProps, ReactNode } from "react"
import { Modal } from "../Modal"
import { Text } from "../Text"
import "./Dialog.scss"

type TDialogProps = ComponentProps<typeof Modal> & {
  body: ReactNode;
  header?: string;
  primaryButton: ReactNode;
  secondaryButton?: ReactNode;
}

export const Dialog = ({ body, header, primaryButton, secondaryButton,...rest }: TDialogProps) => {
  return (
    <Modal className={"deriv-dialog"}  ariaHideApp={false}  {...rest}>
      <Modal.Header hideBorder={true} >
        <Text as='div' weight='bold' className='deriv-modal__header-title'>
          {header}
        </Text>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer hideBorder={true}>
        {primaryButton}
        {secondaryButton}
      </Modal.Footer>
    </Modal>
  )
}