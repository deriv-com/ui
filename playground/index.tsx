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
    AccountSwitcher,
} from "../src/main";

const accountsList = [
    {
        loginid: "id1",
        icon: "icon1",
        title: "title1",
        isVirtual: true,
        isEu: true,
    },
    {
        loginid: "id2",
        icon: "icon2",
        title: "title2",
        isVirtual: true,
        isEu: false,
    },
    {
        loginid: "id3",
        icon: "icon3",
        title: "title3",
        isVirtual: false,
        isEu: false,
    },
    {
        loginid: "id4",
        icon: "icon4",
        title: "title4",
        isVirtual: true,
        isEu: true,
    },
    {
        loginid: "id5",
        icon: "icon5",
        title: "title5",
        isVirtual: false,
        isEu: true,
    },
];

const App = () => {
    const { isMobile } = useDevice();
    const [is_drawer_open, setDrawerOpen] = React.useState(false);
    return (
        <div>
            {!isMobile ? (
                <Header>
                    <Wrapper
                        variant="left"
                        style={{ gap: "15px", padding: "10px" }}
                    >
                        <DerivLogo variant="default" />
                        <MenuItem
                            style={{ marginLeft: "15px", gap: "5px" }}
                            as="button"
                            leftComponent={
                                <LabelPairedHouseBlankMdRegularIcon />
                            }
                        >
                            Trader's Hub
                        </MenuItem>

                        <MenuItem
                            style={{ marginLeft: "15px", gap: "5px" }}
                            as="button"
                            leftComponent={<LegacyReportsIcon iconSize="xs" />}
                        >
                            Reports
                        </MenuItem>
                    </Wrapper>
                    <Wrapper variant="right">
                        <AccountSwitcher accounts={accountsList} />
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
