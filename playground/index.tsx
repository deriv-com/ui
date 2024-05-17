import React from "react";
import ReactDOM from "react-dom/client";
import {
    LegacyReportsIcon,
    LabelPairedHouseBlankMdRegularIcon,
    CurrencyUsdIcon,
    CurrencyBtcIcon,
    CurrencyDemoIcon,
    CurrencyUsdtIcon,
    CurrencyEthIcon,
} from "@deriv/quill-icons";

import { TAccount } from "../src/components/AppLayout/AccountSwitcher/types";

import {
    MenuItem,
    useDevice,
    Header,
    Drawer,
    DerivLogo,
    Button,
    Wrapper,
    AccountSwitcher,
    Divider,
    PlatformSwitcher,
    Text,
    PlatformSwitcherItem,
    MobileLanguagesDrawer,
} from "../src/main";
import { platformsConfig } from "./platformsConfig";
import { LanguagesItemsDrawerConfig } from "./LanguageItemsDrawerConfig";

const accountsList: TAccount[] = [
    {
        icon: <CurrencyUsdIcon />,
        type: "US Dollar",
        loginid: "id1",
        balance: "1000",
        currency: "USD",
        token: "token1",
        isVirtual: true,
        isEu: true,
        isActive: false,
    },
    {
        icon: <CurrencyBtcIcon />,
        type: "Bitcoin",
        loginid: "id2",
        balance: "0.00054",
        currency: "BTC",
        token: "token2",
        isVirtual: false,
        isEu: false,
        isActive: true,
    },
    {
        icon: <CurrencyDemoIcon />,
        type: "US Dollar",
        loginid: "id3",
        balance: "10000",
        currency: "USD",
        token: "token3",
        isVirtual: false,
        isEu: false,
        isActive: false,
    },
    {
        icon: <CurrencyUsdtIcon />,
        type: "Tether TRC20",
        loginid: "id4",
        balance: "500",
        currency: "USD",
        token: "token4",
        isVirtual: false,
        isEu: true,
        isActive: false,
    },
    {
        icon: <CurrencyEthIcon />,
        type: "Etherium",
        loginid: "id5",
        balance: "1000",
        currency: "ETH",
        token: "token5",
        isVirtual: false,
        isEu: true,
        isActive: false,
    },
];
AccountSwitcher.setAppElement(document.getElementById("root") as HTMLElement);
const App = () => {
    const { isMobile } = useDevice();
    const [is_drawer_open, setDrawerOpen] = React.useState(false);
    const [selectedLang, setSelectedLang] = React.useState("en");
    const [isLanguageDrawerOpen, setIsLanguagesDrawerOpen] =
        React.useState(false);
    const SelectedLanguageIcon = () =>
        LanguagesItemsDrawerConfig.languageItems.find(
            (language) => language.code === selectedLang,
        )?.icon;
    return (
        <>
            {!isMobile ? (
                <Header>
                    <Wrapper variant="left">
                        <PlatformSwitcher
                            buttonProps={{
                                icon: platformsConfig[0].buttonIcon,
                                style: { padding: "0 16px" },
                            }}
                            bottomLinkLabel="Looking for CFDs? Go to Trader’s Hub"
                        >
                            {platformsConfig.map(
                                ({ description, href, icon, active }) => (
                                    <PlatformSwitcherItem
                                        key={description}
                                        icon={icon}
                                        href={href}
                                        description={description}
                                        active={active}
                                    />
                                ),
                            )}
                        </PlatformSwitcher>
                        <MenuItem
                            style={{ gap: "8px", padding: "16px" }}
                            as="button"
                            leftComponent={
                                <LabelPairedHouseBlankMdRegularIcon />
                            }
                        >
                            <Text size="md">Trader's Hub</Text>
                        </MenuItem>

                        <MenuItem
                            style={{ gap: "8px", padding: "16px" }}
                            as="button"
                            leftComponent={<LegacyReportsIcon iconSize="xs" />}
                        >
                            <Text size="md">Reports</Text>
                        </MenuItem>
                        <MenuItem
                            style={{ gap: "8px", padding: "16px" }}
                            as="button"
                            leftComponent={<LegacyReportsIcon iconSize="xs" />}
                        >
                            <Text size="md">Cashier</Text>
                        </MenuItem>
                    </Wrapper>
                    <Wrapper variant="right">
                        <AccountSwitcher
                            activeAccount={
                                accountsList.find(
                                    (account) => account.isActive,
                                ) || {
                                    icon: <CurrencyBtcIcon />,
                                    type: "Bitcoin",
                                    loginid: "id2",
                                    balance: "0",
                                    currency: "BTC",
                                    token: "token2",
                                    isVirtual: false,
                                    isEu: false,
                                    isActive: true,
                                }
                            }
                        >
                            <AccountSwitcher.Tab title="Real">
                                <AccountSwitcher.AccountsPanel
                                    isOpen
                                    title="EU Accounts"
                                >
                                    {accountsList
                                        .filter(
                                            (account) =>
                                                !account.isVirtual &&
                                                account.isEu,
                                        )
                                        .map((account) => (
                                            <AccountSwitcher.AccountsItem
                                                key={account.loginid}
                                                account={account}
                                                onSelectAccount={() => {
                                                    console.log(
                                                        `account with loginid ${account.loginid} clicked`,
                                                    );
                                                }}
                                            />
                                        ))}
                                </AccountSwitcher.AccountsPanel>
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.AccountsPanel title="Non-EU">
                                    {accountsList
                                        .filter(
                                            (account) =>
                                                !account.isVirtual &&
                                                !account.isEu,
                                        )
                                        .map((account) => (
                                            <AccountSwitcher.AccountsItem
                                                key={account.loginid}
                                                account={account}
                                                onSelectAccount={() => {}}
                                            />
                                        ))}
                                </AccountSwitcher.AccountsPanel>
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.TotalAsset
                                    title="Total assets"
                                    description="test description text comes here"
                                    value="10,021 USD"
                                />
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.TradersHubLink>
                                    Looking for CFD?{" "}
                                </AccountSwitcher.TradersHubLink>
                                <Divider color="#f2f3f4" height="4px" />

                                <AccountSwitcher.Footer>
                                    this is a footer
                                </AccountSwitcher.Footer>
                            </AccountSwitcher.Tab>
                            <AccountSwitcher.Tab title="Demo">
                                test 2
                            </AccountSwitcher.Tab>
                        </AccountSwitcher>
                        <Button size="sm" style={{ margin: "0 10px" }}>
                            Deposit
                        </Button>
                    </Wrapper>
                </Header>
            ) : (
                <>
                    <Button onClick={() => setDrawerOpen(true)}>
                        Open Drawer
                    </Button>
                    <Drawer
                        width="300px"
                        isOpen={is_drawer_open}
                        onCloseDrawer={() => setDrawerOpen(false)}
                    >
                        <Drawer.Header
                            onCloseDrawer={() => setDrawerOpen(false)}
                        >
                            <DerivLogo variant="default" />
                            <Button
                                icon={<SelectedLanguageIcon />}
                                variant="ghost"
                                onClick={() => {
                                    setIsLanguagesDrawerOpen(
                                        !isLanguageDrawerOpen,
                                    );
                                }}
                            />
                        </Drawer.Header>
                        <Drawer.Content>
                            {!isLanguageDrawerOpen && (
                                <div
                                    style={{
                                        padding: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "72px",
                                        borderBottom: "1px solid #f2f3f4",
                                    }}
                                >
                                    <PlatformSwitcher
                                        buttonProps={{
                                            icon: platformsConfig[0].buttonIcon,
                                        }}
                                        bottomLinkLabel="Looking for CFDs? Go to Trader’s Hub"
                                    >
                                        {platformsConfig.map(
                                            ({
                                                description,
                                                href,
                                                icon,
                                                active,
                                            }) => (
                                                <PlatformSwitcherItem
                                                    key={description}
                                                    icon={icon}
                                                    href={href}
                                                    description={description}
                                                    active={active}
                                                />
                                            ),
                                        )}
                                    </PlatformSwitcher>
                                </div>
                            )}
                                {isLanguageDrawerOpen && (
                                    <MobileLanguagesDrawer
                                        className="languages-modal__body-button"
                                        languages={
                                            LanguagesItemsDrawerConfig.languageItems
                                        }
                                        onClose={() =>
                                            setIsLanguagesDrawerOpen(false)
                                        }
                                        onLanguageSwitch={(code) =>
                                            setSelectedLang(code)
                                        }
                                        selectedLang={selectedLang}
                                        isOpen={isLanguageDrawerOpen}
                                    />
                                )}
                        </Drawer.Content>
                        <Drawer.Footer>This is a footer</Drawer.Footer>
                    </Drawer>
                </>
            )}
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
