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
import { Footer } from "../Footer";

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

    const ref2 = useRef(null);

    const { isDesktop } = useDevice();
    useOnClickOutside([ref, ref2], (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    });

    return (
        <>
            <div
                className="deriv-account-switcher__button"
                onClick={(e) => {
                    // const targetClassList = e.target.classList.value;
                    // const isModalOpen = targetClassList.includes(
                    //     "deriv-account-switcher__container--mobile",
                    // );
                    if (!ref.current) {
                        console.log(e.target);
                        e.stopPropagation();

                        setIsOpen(!isOpen);
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
                        className="deriv-account-switcher__container"
                        isOpen={isOpen}
                    >
                        <Tabs activeTab="Real" variant="secondary">
                            {children}
                        </Tabs>
                    </ContextMenu>
                ) : (
                    <Modal
                        // contentRef={ref2}
                        onRequestClose={(e) => {
                            e.stopPropagation();
                            console.log("modal close");
                        }}
                        className="deriv-account-switcher__container--mobile"
                        isOpen={isOpen}
                    >
                        <Tabs activeTab="Real" variant="secondary">
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
AccountSwitcher.Footer = Footer;
AccountSwitcher.setAppElement = Modal.setAppElement;

AccountSwitcher.DisplayName = "AccountSwitcher";
