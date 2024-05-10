import React from "react";
import ReactDOM from "react-dom/client";
import {
    LegacyReportsIcon,
    LabelPairedHouseBlankMdRegularIcon,
    LegacyChevronRight2pxIcon,
} from "@deriv/quill-icons";
import {
    MenuItem,
    useDevice,
    Header,
    Drawer,
    DerivLogo,
    Button,
    Wrapper,
    PlatformSwitcher,
    Text,
    PlatformSwitcherItem,
} from "../src/main";
import { platformsConfig } from "./platformsConfig";

const App = () => {
    const { isMobile } = useDevice();
    const [is_drawer_open, setDrawerOpen] = React.useState(false);

    return (
        <div>
            {!isMobile ? (
                <Header>
                    <Wrapper variant="left">
                        <PlatformSwitcher
                            buttonProps={{
                                icon: platformsConfig[0].buttonIcon,
                                style: { padding: "0 16px" },
                            }}
                            bottomLink={{
                                text: "Looking for CFDs? Go to Trader’s Hub",
                            }}
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
                        </Drawer.Header>
                        <Drawer.Content>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <MenuItem
                                    style={{
                                        gap: "5px",
                                        display: "flex",
                                        padding: "10px",
                                    }}
                                    active
                                    as="button"
                                    leftComponent={
                                        <LabelPairedHouseBlankMdRegularIcon />
                                    }
                                    rightComponent={
                                        <LegacyChevronRight2pxIcon iconSize="xs" />
                                    }
                                >
                                    Trader's Hub
                                </MenuItem>
                            </div>
                        </Drawer.Content>
                        <Drawer.Footer>This is a footer</Drawer.Footer>
                    </Drawer>
                </>
            )}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
