import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Notifications } from "../src/components/AppLayout/Notifications";
import { LegacyAnnouncementIcon } from "@deriv/quill-icons";

const meta = {
    title: "Components/Notifications",
    component: Notifications,
} satisfies Meta<typeof Notifications>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        componentConfig: {
            clearButtonText: "Clear all",
            modalTitle: "Notifications",
        },
        clearNotificationsCallback: () => {},
        isNotificationsVisible: true,
        notifications: [
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "New trading tools for MT5",
                message:
                    "Power up your Financial trades with intuitive tools from Acuity.",
                buttonAction: () => {
                    console.log("New trading tools for MT5 Clicked");
                },
                actionText: "Learn More",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "Payment problems?",
                message: "There’s an app for that",
                buttonAction: () => {
                    console.log("Payment problems? Clicked");
                },
                actionText: "Learn more",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "We’d love to hear your thoughts",
                message: "Drop your review on Trustpilot.",
                buttonAction: () => {
                    console.log("We’d love to hear your thoughts Clicked");
                },
                actionText: "Go to Trustpilot",
            },
        ],
    },
};
