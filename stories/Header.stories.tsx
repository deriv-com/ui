import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../src/main";

const meta = {
    title: "Components/Header",
    component: Header,
    args: {
        variant: "default",
        showInEU: true,
        accountList: [
            {
                icon: "USD",
                type: "US Dollar",
                loginId: "CR900000702",
                balance: "10,000.00",
                currency: "USD",
                token: "",
                showInEU: true,
            },
        ],
        totalAssets: "20000",
        isUserAuthorized: true,
        actionButtonCallBack: () => {},
        notificationData: {
            notificationCount: 1,
            notificationList: [
                {
                    title: "Test title",
                    description: "Test test",
                    actionButton: () => {},
                },
            ],
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Header",
    render: () => (
        <Header
            variant="default"
            showInEU
            accountList={[
                {
                    icon: "USD",
                    type: "US Dollar",
                    loginId: "CR900000702",
                    balance: "10,000.00",
                    currency: "USD",
                    token: "",
                    showInEU: true,
                },
            ]}
            totalAssets="20000"
            isUserAuthorized
            actionButtonCallBack={() => {}}
            notificationData={{
                notificationCount: 1,
                notificationList: [
                    {
                        title: "Test title",
                        description: "Test test",
                        actionButton: () => {},
                    },
                ],
            }}
        />
    ),
};

export const TradersHub: Story = {
    name: "Trader's hub Header",
    render: () => (
        <Header
            variant="trader's hub"
            showInEU
            accountList={[
                {
                    icon: "USD",
                    type: "US Dollar",
                    loginId: "CR900000702",
                    balance: "10,000.00",
                    currency: "USD",
                    token: "",
                    showInEU: true,
                },
            ]}
            totalAssets="20000"
            isUserAuthorized
            actionButtonCallBack={() => {}}
            notificationData={{
                notificationCount: 1,
                notificationList: [
                    {
                        title: "Test title",
                        description: "Test test",
                        actionButton: () => {},
                    },
                ],
            }}
        />
    ),
};

export const Guest: Story = {
    name: "Wallet Header",
    render: () => (
        <Header
            variant="wallet"
            showInEU
            accountList={[
                {
                    icon: "USD",
                    type: "US Dollar",
                    loginId: "CR900000702",
                    balance: "10,000.00",
                    currency: "USD",
                    token: "",
                    showInEU: true,
                },
            ]}
            totalAssets="20000"
            isUserAuthorized
            actionButtonCallBack={() => {}}
            notificationData={{
                notificationCount: 1,
                notificationList: [
                    {
                        title: "Test title",
                        description: "Test test",
                        actionButton: () => {},
                    },
                ],
            }}
        />
    ),
};

export const Wallet: Story = {
    name: "Guest mode",
    render: () => (
        <Header
            variant="guest"
            showInEU
            accountList={[
                {
                    icon: "USD",
                    type: "US Dollar",
                    loginId: "CR900000702",
                    balance: "10,000.00",
                    currency: "USD",
                    token: "",
                    showInEU: true,
                },
            ]}
            totalAssets="20000"
            isUserAuthorized
            actionButtonCallBack={() => {}}
            notificationData={{
                notificationCount: 1,
                notificationList: [
                    {
                        title: "Test title",
                        description: "Test test",
                        actionButton: () => {},
                    },
                ],
            }}
        />
    ),
};
