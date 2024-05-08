import React from "react";

export type NotificationProps = {
    icon: React.ReactNode;
    title: string;
    message: string;
    buttonAction: () => void;
    actionText: string;
};
