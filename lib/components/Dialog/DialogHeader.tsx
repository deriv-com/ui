import { ReactNode } from "react"
import { Modal } from "../Modal"
import { Text } from "../Text"

type TDialogHeaderProps = {
    className?: string;
    hideCloseIcon?: boolean;
    title?: ReactNode;
    textClassName?: string
}

export const DialogHeader = ({ className, hideCloseIcon = true, title, textClassName }: TDialogHeaderProps) => {
    return (
        <Modal.Header hideBorder hideCloseIcon={hideCloseIcon} className={className}>
            <Text as='div' weight='bold' className={textClassName}>
                {title}
            </Text>
        </Modal.Header>
    )
}