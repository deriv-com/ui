import React,{ ReactNode } from "react"
import { Modal } from "../Modal"
import { Text } from "../Text"

type TDialogHeaderProps = React.ComponentProps<"div"> & {
    hideCloseIcon?: boolean;
    title?: ReactNode;
    textClassName?: string
}

export const DialogHeader = ({ className, hideCloseIcon = true, title, textClassName,...rest }: TDialogHeaderProps) => {
    return (
        <Modal.Header hideBorder hideCloseIcon={hideCloseIcon} className={className} {...rest}>
            <Text as='div' weight='bold' className={textClassName}>
                {title}
            </Text>
        </Modal.Header>
    )
}
