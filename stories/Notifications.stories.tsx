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
            noNotificationsTitle: "No notifications",
            noNotificationsMessage: "You currently have no notifications",
        },

        clearNotificationsCallback: () => {},
        isOpen: true,
        setIsOpen: () => {},
        loadMoreFunction: () => {},
        isLoading: false,
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
                title: "Your account got verified!",
                message: "Account verification is complete.",
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
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(args.isOpen);
        React.useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen])
        return (
            <Notifications
                {...args}
                isOpen={isOpen}
                setIsOpen={(state) => setIsOpen(state)}
            />
        );
    },
};

export const Empty: Story = {
    args: {
        componentConfig: {
            clearButtonText: "Clear all",
            modalTitle: "Notifications",
            noNotificationsTitle: "No notifications",
            noNotificationsMessage: "You currently have no notifications",
        },

        clearNotificationsCallback: () => {},
        isOpen: true,
        setIsOpen: () => {},
        notifications: [],
        loadMoreFunction: () => {},
        isLoading: false,
    },
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(args.isOpen);
        React.useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen])
        return (
            <Notifications
                {...args}
                isOpen={isOpen}
                setIsOpen={(state) => setIsOpen(state)}
            />
        );
    },
};



export const LoadMore: Story = {
    args: {
        componentConfig: {
            clearButtonText: "Clear all",
            modalTitle: "Notifications",
            noNotificationsTitle: "No notifications",
            noNotificationsMessage: "You currently have no notifications",
        },
        clearNotificationsCallback: () => {},
        isOpen: true,
        setIsOpen: () => {},
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
                title: "Your account got verified!",
                message: "Account verification is complete.",
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

            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "Market Updates Available",
                message: "Stay up-to-date with the latest market trends and news.",
                buttonAction: () => {
                    console.log("Market Updates Available Clicked");
                },
                actionText: "Read Now",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "New Features in Trading App",
                message: "Explore the latest features to enhance your trading experience.",
                buttonAction: () => {
                    console.log("New Features in Trading App Clicked");
                },
                actionText: "Explore",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "Webinar on Advanced Trading Strategies",
                message: "Join our upcoming webinar and level up your trading skills.",
                buttonAction: () => {
                    console.log("Webinar on Advanced Trading Strategies Clicked");
                },
                actionText: "Register Now",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "Secure Your Account",
                message: "Enable two-factor authentication for added security.",
                buttonAction: () => {
                    console.log("Secure Your Account Clicked");
                },
                actionText: "Enable Now",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "Refer a Friend and Earn Rewards",
                message: "Earn rewards by referring friends to our trading platform.",
                buttonAction: () => {
                    console.log("Refer a Friend and Earn Rewards Clicked");
                },
                actionText: "Refer Now",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "Live Chat Support Available",
                message: "Need assistance? Our support team is here to help.",
                buttonAction: () => {
                    console.log("Live Chat Support Available Clicked");
                },
                actionText: "Chat Now",
            },
            {
                icon: <LegacyAnnouncementIcon width={16} height={16} />,
                title: "Check Your Portfolio Performance",
                message: "View detailed reports and analytics of your trades.",
                buttonAction: () => {
                    console.log("Check Your Portfolio Performance Clicked");
                },
                actionText: "View Reports",
            },      
        ],
    },
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(args.isOpen);
        const [notifications, setNotifications] = React.useState(args.notifications);
        const [isLoading, setIsLoading] = React.useState(false);
        
        React.useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen])
        return (
            <Notifications
                {...args}
                isOpen={isOpen}
                setIsOpen={(state) => setIsOpen(state)}
                notifications={notifications}
                isLoading={isLoading} 
                loadMoreFunction={() => {
                    console.log("Load more");

                    function genNewNotification(idx: number) { 
                        return {
                            icon: <LegacyAnnouncementIcon width={16} height={16} />,
                            title: `New Notification #${idx}`,
                            message: `Message for New Notification #${idx}`,
                        };
                    }


                    setIsLoading(true);
                    // wait a bit, some random number of millis
                    setTimeout(() => {
                        setNotifications([
                            ...notifications,
                            genNewNotification(notifications.length + 1),
                            genNewNotification(notifications.length + 2),
                            genNewNotification(notifications.length + 3),
                            genNewNotification(notifications.length + 4),
                            genNewNotification(notifications.length + 5),
                        ]);
                        setIsLoading(false);
                    }, Math.floor(Math.random() * 300) + 300);
                }}
            />
        );
    },
};

