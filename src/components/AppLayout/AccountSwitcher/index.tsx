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
import { TAccount } from "./types";
import { TradershubLink } from "./TradershubLink";

type AccountSwitcherProps = {
    children: ReactElement<TabTitleProps>[];
    activeAccount: TAccount;
};

export const AccountSwitcher = ({
    children,
    activeAccount,
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
                className="deriv-account-switcher__button"
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
                {isOpen ? (
                    <LegacyChevronUp2pxIcon iconSize="xs" />
                ) : (
                    <LegacyChevronDown2pxIcon iconSize="xs" />
                )}
                {isDesktop ? (
                    <ContextMenu
                        ref={ref}
                        className="deriv-account-switcher__container"
                        isOpen={isOpen}
                    >
                        <Tabs
                            activeTab={
                                activeAccount.isVirtual ? "Demo" : "Real"
                            }
                            variant="secondary"
                        >
                            {children}
                        </Tabs>
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
                        <Tabs
                            activeTab={
                                activeAccount.isVirtual ? "Demo" : "Real"
                            }
                            variant="secondary"
                        >
                            {children}
                        </Tabs>
                    </Modal>
                )}
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
