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
import { TotalAsset } from "./TotalAsset";
import { Divider } from "../../Divider";

type AccountSwitcherProps = {
    accounts: TAccount[];
};

export const AccountSwitcher = ({ accounts = [] }: AccountSwitcherProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const { isDesktop } = useDevice();

    const realAccounts = accounts.filter((account) => !account.isVirtual);
    const demoAccounts = accounts.filter((account) => account.isVirtual);

    useOnClickOutside(ref, (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    });

    return (
        <>
            <div
                className="deriv-account-switcher__button"
                onClick={(e) => {
                    if (!ref.current) {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }
                }}
            >
                <div className="deriv-account-switcher__currency-icon">
                    <CurrencyUsdIcon iconSize="sm" />
                </div>
                <div className="deriv-account-switcher__balance">
                    <span>0.00</span>
                    <span>USD</span>
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
                        <Tabs activeTab="Real" variant="secondary">
                            <Tab title="Real">
                                <AccountsPanel
                                    accounts={realAccounts.filter(
                                        (account) => !account.isEu,
                                    )}
                                    onClick={() => {}}
                                    title="Non-EU Deriv Account"
                                />

                                <Divider color="#f2f3f4" height="4px" />

                                <AccountsPanel
                                    accounts={realAccounts.filter(
                                        (account) => account.isEu,
                                    )}
                                    onClick={() => {}}
                                    title="EU Deriv Account"
                                />
                                <Divider color="#f2f3f4" height="4px" />

                                <TotalAsset
                                    title="Total Asset"
                                    description="Total assets in your Deriv accounts."
                                    value="0.00 USD"
                                />
                                <Divider color="f2f3f4" height="4px" />
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
