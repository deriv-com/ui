import { Fragment, useRef } from "react";
import { Notification } from "./Notification";
import { TNotificationsProps } from "./types";
import "./index.scss";
import { useDevice } from "../../../hooks";
import { ContextMenu } from "../../ContextMenu";
import { Modal } from "../../Modal";
import { Text } from "../../Text";
import { useOnClickOutside } from "usehooks-ts";
import Icon from "./ic-box.svg";
import clsx from "clsx";

export const Notifications = ({
    notifications,
    clearNotificationsCallback = () => { },
    isOpen,
    setIsOpen,
    componentConfig,
    className,
    ...rest
}: Omit<TNotificationsProps, "style">) => {
    const { isMobile } = useDevice();
    const notificationsRef = useRef(null);

    useOnClickOutside(notificationsRef, (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    });

    return (
        <Fragment>
            {isMobile && (
                <Modal
                    className={clsx("notifications", className)}
                    isOpen={isOpen}
                    onRequestClose={() => {
                        setIsOpen(false);
                    }}
                    {...rest}
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
                    {notifications.length === 0 && (
                        <div className="notifications__empty">
                            <img src={Icon} />
                            <Text
                                as="p"
                                align="center"
                                className="notifications__empty-text"
                            >
                                {componentConfig.noNotificationsTitle}
                            </Text>
                            <Text as="span" align="center">
                                {componentConfig.noNotificationsMessage}
                            </Text>
                        </div>
                    )}
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
                    className={clsx("notifications", className)}
                    {...rest}
                >
                    <Text as="span" className="notifications__header-desktop">
                        {componentConfig.modalTitle}
                    </Text>
                    {notifications.length === 0 && (
                        <div className="notifications__empty">
                            <img src={Icon} />
                            <Text
                                as="p"
                                align="center"
                                className="notifications__empty-text"
                            >
                                {componentConfig.noNotificationsTitle}
                            </Text>
                            <Text as="span" align="center">
                                {componentConfig.noNotificationsMessage}
                            </Text>
                        </div>
                    )}
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
        </Fragment>
    );
};
Notifications.displayName = "Notifications";
