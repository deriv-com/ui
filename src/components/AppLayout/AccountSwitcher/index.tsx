import { ReactElement, useRef, useState } from "react";
import {
    LegacyChevronDown2pxIcon,
    LegacyChevronUp2pxIcon,
} from "@deriv/quill-icons";
import { useOnClickOutside } from "usehooks-ts";

import { Modal } from "../../Modal";
import { ContextMenu } from "../../ContextMenu";
import { useDevice } from "../../../hooks";
import { Tabs } from "../../Tabs";
import { AccountsPanel } from "./AccountsPanel";
import { AccountsItem } from "./AccountsItem";
import { AccountSwitcherFooter } from "./Footer";

import "./AccountSwitcher.scss";
import { TotalAsset } from "./TotalAsset";
import { AccountSwitcherTab as Tab } from "./Tab";

import { TabTitleProps } from "../../Tabs/TabTitle";
import { TradershubLink } from "./TradershubLink";
import type { TAccount } from "./types";
import clsx from "clsx";

type AccountSwitcherProps = {
    activeAccount: TAccount;
    buttonClassName?: string;
    children?: ReactElement<TabTitleProps>[];
    isDisabled?: boolean;
    tabsLabels?: {
        demo: string;
        real: string;
    };
};

export const AccountSwitcher = ({
    children,
    activeAccount,
    isDisabled = false,
    buttonClassName,
    tabsLabels,
}: AccountSwitcherProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const { isDesktop } = useDevice();

    const closeAccountSwitcher = () => {
        setIsOpen(false);
    };

    const openAccountSwitcher = () => {
        setIsOpen(true);
    };
    useOnClickOutside(ref, closeAccountSwitcher);

    return (
        <>
            <div
                className={clsx(
                    "deriv-account-switcher__button",
                    buttonClassName,
                )}
                onClick={() => {
                    if (!ref.current) {
                        openAccountSwitcher();
                    }
                }}
            >
                <div className="deriv-account-switcher__currency-icon">
                    {activeAccount.icon}
                </div>
                <div className="deriv-account-switcher__balance">
                    <span>{activeAccount.balance}</span>
                    <span>{activeAccount.currency}</span>
                </div>
                {!isDisabled ? (
                    isOpen ? (
                        <LegacyChevronUp2pxIcon iconSize="xs" />
                    ) : (
                        <LegacyChevronDown2pxIcon iconSize="xs" />
                    )
                ) : null}
                {!isDisabled ? (
                    isDesktop ? (
                        <ContextMenu
                            ref={ref}
                            className="deriv-account-switcher__container"
                            isOpen={isOpen}
                        >
                            {children && (
                                <Tabs
                                    activeTab={
                                        activeAccount.isVirtual
                                            ? tabsLabels?.demo ?? "Demo"
                                            : tabsLabels?.real ?? "Real"
                                    }
                                    variant="secondary"
                                >
                                    {children}
                                </Tabs>
                            )}
                        </ContextMenu>
                    ) : (
                        <Modal
                            closeTimeoutMS={200}
                            onRequestClose={(e) => {
                                e.stopPropagation();
                                closeAccountSwitcher();
                            }}
                            className="deriv-account-switcher__container--mobile"
                            isOpen={isOpen}
                        >
                            {children && (
                                <Tabs
                                    activeTab={
                                        activeAccount.isVirtual
                                            ? tabsLabels?.demo ?? "Demo"
                                            : tabsLabels?.real ?? "Real"
                                    }
                                    variant="secondary"
                                >
                                    {children}
                                </Tabs>
                            )}
                        </Modal>
                    )
                ) : null}
            </div>
        </>
    );
};

AccountSwitcher.Tab = Tab;
AccountSwitcher.AccountsPanel = AccountsPanel;
AccountSwitcher.AccountsItem = AccountsItem;
AccountSwitcher.TotalAsset = TotalAsset;
AccountSwitcher.TradersHubLink = TradershubLink;
AccountSwitcher.Footer = AccountSwitcherFooter;
AccountSwitcher.setAppElement = Modal.setAppElement;

AccountSwitcher.DisplayName = "AccountSwitcher";
