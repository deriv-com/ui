import { useRef, useState } from "react";
import {
    CurrencyUsdIcon,
    LegacyChevronDown2pxIcon,
    LegacyChevronUp2pxIcon,
} from "@deriv/quill-icons";
import { useOnClickOutside } from "usehooks-ts";

import { Modal } from "../../Modal";
import { ContextMenu } from "../../ContextMenu";
import { useDevice } from "../../../hooks";
import { Tab, Tabs } from "../../Tabs";
import { AccountsPanel } from "./AccountsPanel";
import { TAccount } from "./AccountsPanel/types";

import "./AccountSwitcher.scss";

type AccountSwitcherProps = {
    accounts: TAccount[];
};

export const AccountSwitcher = ({ accounts = [] }: AccountSwitcherProps) => {
    console.log(accounts);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const { isDesktop } = useDevice();

    const realAccounts = accounts.filter((account) => !account.isVirtual);
    const demoAccounts = accounts.filter((account) => account.isVirtual);

    useOnClickOutside(ref, (e) => {
        e.stopPropagation();
        setIsOpen(false);
    });

    return (
        <>
            <div
                className="deriv-account-switcher__button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="deriv-account-switcher__currency-icon">
                    <CurrencyUsdIcon iconSize="sm" />
                </div>
                <div className="deriv-account-switcher__balance">0.00 USD</div>
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
                        <Tabs activeTab="Real" variant="secondary">
                            <Tab title="Real">
                                <AccountsPanel
                                    accounts={realAccounts.filter(
                                        (account) => !account.isEu,
                                    )}
                                    onClick={() => {}}
                                    title="Non-EU Deriv Account"
                                />

                                <AccountsPanel
                                    accounts={realAccounts.filter(
                                        (account) => account.isEu,
                                    )}
                                    onClick={() => {}}
                                    title="EU Deriv Account"
                                />
                            </Tab>

                            <Tab title="Demo">
                                <AccountsPanel
                                    accounts={demoAccounts}
                                    onClick={() => {}}
                                    title="Deriv Demo Account"
                                />
                            </Tab>
                        </Tabs>
                    </ContextMenu>
                ) : (
                    <Modal
                        className="deriv-account-switcher__container"
                        isOpen={isOpen}
                    >
                        test
                    </Modal>
                )}
            </div>
        </>
    );
};

AccountSwitcher.DisplayName = "AccountSwitcher";
