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
import { useFetchMore } from "../../../hooks/useFetchMore";
import { Loader } from "../../Loader";

export const Notifications = ({
    notifications,
    clearNotificationsCallback = () => { },
    isOpen,
    setIsOpen,
    componentConfig,
    className,
    actionButtonClassName,
    loadMoreFunction,
    isLoading,
    ...rest
}: Omit<TNotificationsProps, "style">) => {
    const { isMobile } = useDevice();
    const notificationsRef = useRef(null);
    const notificationsScrollRef = useRef(null);

    useOnClickOutside(notificationsRef, (e: Event) => {
        e.stopPropagation();
        // To enable the button to open this component in the upper scope
        if (!(e.target as HTMLElement).className.split(' ').includes(actionButtonClassName)) {
            setIsOpen(false);
        }
    });

    const { fetchMoreOnBottomReached } = useFetchMore({
        loadMore: loadMoreFunction,
        ref: notificationsRef,
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
                    <div 
                        className="notifications__content" 
                        ref={notificationsScrollRef} 
                        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
                        data-testid="notifications-content"
                    >
                        {notifications.map((notification) => (
                            <Notification
                                key={notification.id}
                                {...notification}
                            />
                        ))}
                        {isLoading && (
                            <div className="notifications__loader" data-testid="notifications-loader">
                                <Loader isFullScreen={false}/>
                            </div>
                        )}
                    </div>
                    <Modal.Footer className="notifications__footer">
                        <button
                            className={clsx("notifications__footer__clear-button", {
                                "notifications__footer__clear-button--disabled": notifications.length === 0
                            })}
                            onClick={() => {
                                if (notifications.length > 0) {
                                    setIsOpen(false);
                                    clearNotificationsCallback();
                                }
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
                    <div 
                        className="notifications__content" 
                        ref={notificationsScrollRef} 
                        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
                        data-testid="notifications-content"
                    >
                        {notifications.map((notification) => (
                            <Notification
                                key={notification.id}
                                {...notification}
                            />
                        ))}
                        {isLoading && (
                            <div className="notifications__loader" data-testid="notifications-loader">
                                <Loader isFullScreen={false}/>
                            </div>
                        )}
                    </div>
                    <div className="notifications__footer">
                        <div className="notifications__footer-box">
                            <button
                                className={clsx("notifications__footer__clear-button", {
                                    "notifications__footer__clear-button--disabled": notifications.length === 0
                                })}
                                onClick={() => {
                                    if (notifications.length > 0) {
                                        setIsOpen(false);
                                        clearNotificationsCallback();
                                    }
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
