import { Text } from "../../Text";
import { TNotificationObject } from "./types";

export const Notification = ({
    icon,
    title,
    message,
    buttonAction,
    actionText,
}: TNotificationObject) => {
    const haveAction = typeof buttonAction === 'function' && typeof actionText === 'string';
    return (
        <div className="notification">
            <div className="notification__container">
                <div className="notification__icon">{icon}</div>
                <div className="notification__text">
                    <Text
                     as="h3" className="notification__title">{title}</Text>
                    <div className="notification__message">
                        <Text as="p">{message}</Text>
                    </div>
                </div>
            </div>
            {haveAction && (
                <div className="notification__button-container">
                    <button className="notification__button" onClick={buttonAction}>
                        {actionText}
                    </button>
                </div>
            )}
        </div>
    );
};
Notification.displayName = 'Notification'
