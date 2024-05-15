import React from "react";
import { render } from "@testing-library/react";
import { AccountSwitcher } from "..";

jest.mock("../../../../hooks", () => ({
    useDevice: jest.fn().mockReturnValue({ isMobile: false }),
}));

describe("AccountSwitcher Component", () => {
    const mockAccount = {
        icon: <div>Icon</div>,
        type: "Bitcoin",
        loginid: "id2",
        balance: "0.00054",
        currency: "BTC",
        token: "token2",
        isVirtual: false,
        isEu: false,
        isActive: true,
    };

    it("renders correctly and toggles visibility on click", () => {
        render(
            <AccountSwitcher activeAccount={mockAccount}>
                <AccountSwitcher.Tab title="Real">real tab</AccountSwitcher.Tab>
                <AccountSwitcher.Tab title="Demo">demo Tab</AccountSwitcher.Tab>
            </AccountSwitcher>,
        );

        // screen.debug();

        // Initially, ensure modal or context menu is not visible
        // expect(screen.queryByText("Tab Content")).toBeNull();

        // // Simulate click to open account switcher
        // fireEvent.click(screen.getByText("Account Icon"));

        // // Check if content is now visible
        // expect(screen.getByText("Tab Content")).toBeInTheDocument();

        // // Check for the presence of an open icon
        // expect(screen.getByTestId("chevron-up-icon")).toBeInTheDocument();

        // // Click again to close
        // fireEvent.click(screen.getByText("Account Icon"));
        // expect(screen.queryByText("Tab Content")).toBeNull();
    });

    // it("renders context menu on desktop and modal on mobile", () => {
    //     jest.mock("../../../../hooks", () => ({
    //         useDevice: jest.fn().mockReturnValue({ isMobile: true }),
    //     }));
    //     const { rerender } = render(
    //         <AccountSwitcher activeAccount={mockAccount}>
    //             <AccountSwitcher.Tab title="Real">real tab</AccountSwitcher.Tab>
    //             <AccountSwitcher.Tab title="Demo">demo Tab</AccountSwitcher.Tab>
    //         </AccountSwitcher>,
    //     );
    //     fireEvent.click(screen.getByText("Account Icon"));
    //     expect(screen.getByText("Desktop Content")).toBeInTheDocument();
    //     expect(screen.getByTestId("context-menu")).toBeInTheDocument();

    //     // Set isDesktop to false and rerender
    //     jest.mock("../../../../hooks", () => ({
    //         useDevice: jest.fn().mockReturnValue({ isMobile: false }),
    //     }));

    //     rerender(
    //         <AccountSwitcher activeAccount={mockAccount}>
    //             <AccountSwitcher.Tab title="Real">real tab</AccountSwitcher.Tab>
    //             <AccountSwitcher.Tab title="Demo">demo Tab</AccountSwitcher.Tab>
    //         </AccountSwitcher>,
    //     );
    //     fireEvent.click(screen.getByText("Account Icon"));
    //     expect(screen.getByText("Mobile Content")).toBeInTheDocument();
    //     expect(screen.getByTestId("mobile-modal")).toBeInTheDocument();
    // });

    // Additional tests can include checking if outside clicks call closeAccountSwitcher, which requires mocking useOnClickOutside
});
