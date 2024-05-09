import React, { useState } from "react";
import Notification from "./Notification";
import { TNotificationsProps } from "./types";
import "./index.scss";
import { useDevice } from "../../../hooks";
import { ContextMenu } from "../../ContextMenu";
import { Modal } from "../../Modal";
import { Text } from "../../Text";

export const Notifications = ({
    notifications,
    clearNotificationsCallback = () => {},
    isNotificationsVisible = true,
}: TNotificationsProps) => {
    const { isMobile } = useDevice();
    const [isOpen, setIsOpen] = useState(isNotificationsVisible);
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
                            Notifications
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
                            Clear all
                        </button>
                    </Modal.Footer>
                </Modal>
            )}
            {!isMobile && (
                <ContextMenu isOpen={isOpen} className="notifications">
                    <span className="notifications__header-desktop">
                        Notifications
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
                                Clear all
                            </button>
                        </div>
                    </div>
                </ContextMenu>
            )}
        </React.Fragment>
    );
};
