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
    LegacyChevronDown2pxIcon,
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
    Dropdown,
} from "../src/main";
import { platformsConfig } from "./platformsConfig";
import { LanguagesItemsDrawerConfig } from "./LanguageItemsDrawerConfig";

const accountsList: TAccount[] = [
    {
        icon: <CurrencyUsdIcon />,
        currencyLabel: "US Dollar",
        loginid: "id1",
        balance: "1000",
        currency: "USD",
        isVirtual: true,
        isActive: false,
    },
    {
        icon: <CurrencyBtcIcon iconSize="sm" />,
        currencyLabel: "Bitcoin",
        loginid: "id2",
        balance: "0.00054",
        currency: "BTC",
        isVirtual: false,
        isActive: true,
    },
    {
        icon: <CurrencyDemoIcon />,
        currencyLabel: "US Dollar",
        loginid: "id3",
        balance: "10000",
        currency: "USD",
        isVirtual: false,
        isActive: false,
    },
    {
        icon: <CurrencyUsdtIcon />,
        currencyLabel: "Tether TRC20",
        loginid: "id4",
        balance: "500",
        currency: "USD",
        isVirtual: false,
        isActive: false,
    },
    {
        icon: <CurrencyEthIcon />,
        currencyLabel: "Etherium",
        loginid: "id5",
        balance: "1000",
        currency: "ETH",
        isVirtual: false,
        isActive: false,
    },
];
AccountSwitcher.setAppElement(document.getElementById("root") as HTMLElement);
const App = () => {
    const { isMobile } = useDevice();
    const [is_drawer_open, setDrawerOpen] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState("en");
    const [isLanguagesDrawerOpen, setIsLanguagesDrawerOpen] =
        React.useState(false);
    const SelectedLanguageIcon =
        LanguagesItemsDrawerConfig.languages.find((language) => {
            return language.code === selectedLanguage;
        })?.icon ?? LanguagesItemsDrawerConfig.languages[0].icon;

    const [message, setMessage] = React.useState("");
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
                                    currencyLabel: "Bitcoin",
                                    loginid: "id2",
                                    balance: "0",
                                    currency: "BTC",
                                    isVirtual: false,
                                    isActive: true,
                                }
                            }
                        >
                            <AccountSwitcher.Tab title="Real">
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.AccountsPanel title="Non-EU">
                                    {accountsList
                                        .filter((account) => !account.isVirtual)
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
                                icon={SelectedLanguageIcon}
                                variant="ghost"
                                color="white"
                                onClick={() => {
                                    setIsLanguagesDrawerOpen(
                                        !isLanguagesDrawerOpen,
                                    );
                                }}
                            />
                        </Drawer.Header>
                        <Drawer.Content>
                            {!isLanguagesDrawerOpen && (
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
                            {isLanguagesDrawerOpen && (
                                <MobileLanguagesDrawer
                                    languages={
                                        LanguagesItemsDrawerConfig.languages
                                    }
                                    onClose={() =>
                                        setIsLanguagesDrawerOpen(false)
                                    }
                                    onLanguageSwitch={(code) =>
                                        setSelectedLanguage(code)
                                    }
                                    selectedLanguage={selectedLanguage}
                                    isOpen={isLanguagesDrawerOpen}
                                />
                            )}
                        </Drawer.Content>
                        <Drawer.Footer>This is a footer</Drawer.Footer>
                    </Drawer>
                    <Wrapper variant="right">
                        <AccountSwitcher
                            activeAccount={
                                accountsList.find(
                                    (account) => account.isActive,
                                ) || {
                                    icon: <CurrencyBtcIcon />,
                                    currencyLabel: "Bitcoin",
                                    loginid: "id2",
                                    balance: "0",
                                    currency: "BTC",
                                    isVirtual: false,
                                    isActive: true,
                                }
                            }
                        >
                            <AccountSwitcher.Tab title="Real">
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.AccountsPanel title="Non-EU">
                                    {accountsList
                                        .filter((account) => !account.isVirtual)
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
                    </Wrapper>
                </>
            )}
            {/* Playground */}
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "grid",
                    placeContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    <Dropdown
                        label="Dropdown Label"
                        list={[
                            { text: "Option 1", value: "option1" },
                            { text: "Option 2", value: "option2" },
                            { text: "Option 3", value: "option3" },
                        ]}
                        listHeight="md"
                        name="dropdownName1"
                        onSearch={(inputValue: string) =>
                            console.log(`Input value changed: ${inputValue}`)
                        }
                        onSelect={(value: string) => {
                            console.log(`Selected value: ${value}`);
                            setMessage("This is an error message");
                        }}
                        variant="comboBox"
                        errorMessage={message}
                        isFullWidth
                        dropdownIcon={
                            <LegacyChevronDown2pxIcon iconSize="xs" />
                        }
                    />
                    <Dropdown
                        label="Dropdown Label"
                        list={[
                            { text: "Option 1", value: "option1" },
                            { text: "Option 2", value: "option2" },
                            { text: "Option 3", value: "option3" },
                        ]}
                        listHeight="md"
                        name="dropdownName2"
                        onSearch={(inputValue: string) =>
                            console.log(`Input value changed: ${inputValue}`)
                        }
                        onSelect={(value: string) => {
                            console.log(`Selected value: ${value}`);
                            setMessage("This is an error message");
                        }}
                        variant="comboBox"
                        errorMessage={message}
                        disabled
                        isFullWidth
                    />
                    <Dropdown
                        label="Dropdown Label"
                        list={[
                            { text: "Option 1", value: "option1" },
                            { text: "Option 2", value: "option2" },
                            { text: "Option 3", value: "option3" },
                        ]}
                        listHeight="md"
                        name="dropdownName3"
                        onSearch={(inputValue: string) =>
                            console.log(`Input value changed: ${inputValue}`)
                        }
                        onSelect={(value: string) => {
                            console.log(`Selected value: ${value}`);
                            setMessage("This is an error message");
                        }}
                        variant="comboBox"
                        errorMessage={message}
                        disabled
                    />
                </div>
            </div>
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
