import React from "react"
import { Modal } from "../Modal"
import { Text } from "../Text"

type TDialogHeaderProps = Omit<React.ComponentProps<typeof Modal.Header>,"hideBorder"> & {
    hideCloseIcon?: boolean;
    textClassName?: string
}

export const DialogHeader = ({ children, className, hideCloseIcon = true, textClassName,...rest }: TDialogHeaderProps) => {
    return (
        <Modal.Header hideBorder hideCloseIcon={hideCloseIcon} className={className} {...rest}>
            <Text as='div' weight='bold' className={textClassName}>
                {children}
            </Text>
        </Modal.Header>
    )
}
