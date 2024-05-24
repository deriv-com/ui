import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountSwitcher } from "..";
import userEvent from "@testing-library/user-event";

jest.mock("../../../../hooks", () => ({
    useDevice: jest.fn().mockReturnValue({ isMobile: false }),
}));

describe("AccountSwitcher Component", () => {
    const mockAccount = {
        icon: <div>Icon</div>,
        currencyLabel: "Bitcoin",
        loginid: "id2",
        balance: "0.00054",
        currency: "BTC",
        isVirtual: true,
        isActive: true,
    };

    it("renders account switcher button correctly", () => {
        render(
            <AccountSwitcher activeAccount={mockAccount}>
                <AccountSwitcher.Tab title="Real">real tab</AccountSwitcher.Tab>
                <AccountSwitcher.Tab title="Demo">demo Tab</AccountSwitcher.Tab>
            </AccountSwitcher>,
        );

        const AccountSwitcherButton = screen.getByText(mockAccount.currency);

        expect(AccountSwitcherButton).toBeInTheDocument();
    });

    it("opens the accountswitcher dropdown in desktop with the corect active tab when click on the button", async () => {
        render(
            <AccountSwitcher activeAccount={mockAccount}>
                <AccountSwitcher.Tab title="Real">real tab</AccountSwitcher.Tab>
                <AccountSwitcher.Tab title="Demo">demo Tab</AccountSwitcher.Tab>
            </AccountSwitcher>,
        );

        const AccountSwitcherButton = screen.getByText(mockAccount.currency);

        expect(AccountSwitcherButton).toBeInTheDocument();

        await userEvent.click(AccountSwitcherButton);

        const DemoTabContent = screen.getByText("demo Tab");
        expect(DemoTabContent).toBeInTheDocument();
    });

    it("opens the accountswitcher modal in mobile with the corect active tab when click on the button", async () => {
        jest.mock("../../../../hooks", () => ({
            useDevice: jest.fn().mockReturnValue({ isMobile: true }),
        }));
        render(
            <AccountSwitcher activeAccount={mockAccount}>
                <AccountSwitcher.Tab title="Real">real tab</AccountSwitcher.Tab>
                <AccountSwitcher.Tab title="Demo">demo Tab</AccountSwitcher.Tab>
            </AccountSwitcher>,
        );

        const AccountSwitcherButton = screen.getByText(mockAccount.currency);

        expect(AccountSwitcherButton).toBeInTheDocument();

        await userEvent.click(AccountSwitcherButton);
        const DemoTabContent = screen.getByText("demo Tab");

        expect(DemoTabContent).toBeInTheDocument();
    });
});
