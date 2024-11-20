import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AccountsItem } from "..";


const mockAccount = {
    loginid: "id123",
    icon: <div>icon</div>,
    currencyLabel: "Demo",
    balance: "1000",
    currency: "USD",
    isVirtual: false,
    isActive: true,
};

describe("AccountsItem Component", () => {
    it("renders account information correctly", () => {
        render(
            <AccountsItem account={mockAccount} onSelectAccount={jest.fn()} />,
        );

        expect(screen.getByText("Demo")).toBeInTheDocument();
        expect(screen.getByText("id123")).toBeInTheDocument();
        expect(screen.getByText("1000 USD")).toBeInTheDocument();
        expect(screen.getByText("icon")).toBeInTheDocument();
    });

    it("applies active styles when account is selected", () => {
        render(
            <AccountsItem account={mockAccount} onSelectAccount={jest.fn()} />,
        );

        const detailElement = screen.getByText("Demo");

        expect(detailElement).toHaveClass(
            "deriv-account-switcher-item__currency",
            "deriv-account-switcher-item__currency--active",
        );

        const loginIdElement = screen.getByText("id123");
        expect(loginIdElement).toHaveClass(
            "deriv-account-switcher-item__loginid",
            "deriv-account-switcher-item__loginid--active",
        );

        const balanceElement = screen.getByText("1000 USD");
        expect(balanceElement).toHaveClass(
            "deriv-account-switcher-item__balance",
            "deriv-account-switcher-item__balance--active",
        );
    });

    it("applies active styles when account is not selected", () => {
        const modifiedMockAccount = { ...mockAccount, isActive: false };
        render(
            <AccountsItem
                account={modifiedMockAccount}
                onSelectAccount={jest.fn()}
            />,
        );


        const detailElement = screen.getByText("Demo");
        expect(detailElement).not.toHaveClass(
            "deriv-account-switcher-item__currency--active",
        );

        const loginIdElement = screen.getByText("id123");
        expect(loginIdElement).not.toHaveClass(
            "deriv-account-switcher-item__loginid--active",
        );

        const balanceElement = screen.getByText("1000 USD");
        expect(balanceElement).not.toHaveClass(
            "deriv-account-switcher-item__balance--active",
        );
    });

    it("calls onSelectAccount when clicked", async () => {
        const onSelectAccount = jest.fn();
        render(
            <AccountsItem
                account={mockAccount}
                onSelectAccount={onSelectAccount}
            />,
        );

        const accountElement = screen.getByText("id123").closest("div");
        await userEvent.click(accountElement!);
        expect(onSelectAccount).toHaveBeenCalledTimes(1);
    });

    it("displays Reset balance button when onResetBalance prop is provided", () => {
        const onResetBalance = jest.fn();
        render(
            <AccountsItem
                account={mockAccount}
                onSelectAccount={jest.fn()}
                onResetBalance={onResetBalance}
            />,
        );

        const resetButton = screen.getByText("Reset balance");
        expect(resetButton).toBeInTheDocument();
        expect(screen.queryByText("1000 USD")).not.toBeInTheDocument();
    });

    it("calls onResetBalance when Reset balance button is clicked", async () => {
        const onResetBalance = jest.fn();
        render(
            <AccountsItem
                account={mockAccount}
                onSelectAccount={jest.fn()}
                onResetBalance={onResetBalance}
            />,
        );

        const resetButton = screen.getByText("Reset balance");
        await userEvent.click(resetButton);
        expect(onResetBalance).toHaveBeenCalledTimes(1);
    });

    it("displays balance when onResetBalance is not provided", () => {
        render(
            <AccountsItem
                account={mockAccount}
                onSelectAccount={jest.fn()}
            />,
        );

        expect(screen.getByText("1000 USD")).toBeInTheDocument();
        expect(screen.queryByText("Reset balance")).not.toBeInTheDocument();
    });
});
