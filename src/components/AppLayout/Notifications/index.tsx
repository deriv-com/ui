import React, { useRef, useState } from "react";
import Notification from "./Notification";
import { TNotificationsProps } from "./types";
import "./index.scss";
import { useDevice } from "../../../hooks";
import { ContextMenu } from "../../ContextMenu";
import { Modal } from "../../Modal";
import { Text } from "../../Text";
import { useOnClickOutside } from "usehooks-ts";

export const Notifications = ({
    notifications,
    clearNotificationsCallback = () => {},
    isNotificationsVisible = true,
    componentConfig,
}: TNotificationsProps) => {
    const { isMobile } = useDevice();
    const [isOpen, setIsOpen] = useState(isNotificationsVisible);
    const notificationsRef = useRef(null);

    React.useEffect(() => {
        if (isNotificationsVisible !== isOpen)
            setIsOpen(isNotificationsVisible);
    }, [isNotificationsVisible]);

    useOnClickOutside(notificationsRef, (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    });

    return (
        <React.Fragment>
            {isMobile && (
                <Modal
                    className="notifications"
                    isOpen={isOpen}
                    onRequestClose={() => {
                        setIsOpen(false);
                    }}
                >
                    <Modal.Header
                        onRequestClose={() => {
                            setIsOpen(false);
                        }}
                    >
                        <Text
                            as="div"
                            weight="bold"
                            className="deriv-modal__header-title"
                        >
                            {componentConfig.modalTitle}
                        </Text>
                    </Modal.Header>
                    {notifications.map((notification) => (
                        <Notification
                            key={notification.title}
                            {...notification}
                        />
                    ))}
                    <Modal.Footer className="notifications__footer">
                        <button
                            className="notifications__footer__clear-button"
                            onClick={() => {
                                clearNotificationsCallback();
                                setIsOpen(false);
                            }}
                        >
                            {componentConfig.clearButtonText}
                        </button>
                    </Modal.Footer>
                </Modal>
            )}
            {!isMobile && (
                <ContextMenu
                    ref={notificationsRef}
                    isOpen={isOpen}
                    className="notifications"
                >
                    <span className="notifications__header-desktop">
                        {componentConfig.modalTitle}
                    </span>
                    {notifications.map((notification) => (
                        <Notification
                            key={notification.title}
                            {...notification}
                        />
                    ))}
                    <div className="notifications__footer">
                        <div className="notifications__footer-box">
                            <button
                                className="notifications__footer__clear-button"
                                onClick={() => {
                                    setIsOpen(false);
                                    clearNotificationsCallback();
                                }}
                            >
                                {componentConfig.clearButtonText}
                            </button>
                        </div>
                    </div>
                </ContextMenu>
            )}
        </React.Fragment>
    );
};
