import { ReactNode } from "react";

export type TNotificationObject = {
    icon: ReactNode;
    title: string;
    message: string;
    buttonAction: () => void;
    actionText: string;
};
export type TNotificationsProps = {
    notifications: TNotificationObject[];
    clearNotificationsCallback: () => void;
    setIsOpen: (state: boolean) => void;
    isOpen: boolean;
    componentConfig: {
        clearButtonText: string;
        modalTitle: string;
        noNotificationsTitle: string;
        noNotificationsMessage: string;
    };
};
