import { ComponentProps, ReactNode } from "react";

export type TNotificationObject = {
    id: string;
    icon: ReactNode;
    title: string | React.ReactNode;
    message: string | React.ReactNode;
    buttonAction?: (() => void) | false | void;
    actionText?: string;
};
export type TNotificationsProps = ComponentProps<"div"> & {
    notifications: TNotificationObject[];
    clearNotificationsCallback: () => void;
    setIsOpen: (state: boolean) => void;
    isOpen: boolean;
    loadMoreFunction?: () => void;
    isLoading: boolean;
    componentConfig: {
        clearButtonText: string;
        modalTitle: string;
        noNotificationsTitle: string;
        noNotificationsMessage: string;
    };
    excludedClickOutsideClass?: string;
};
