import type { Meta, StoryObj } from "@storybook/react";
import { Submenu } from "../src/main";
import { LegacyAdsIcon } from "@deriv/quill-icons";

const meta = {
    title: "Components/Submenu",
    component: Submenu,
    args: {
        children: <span>Test Children</span>,
        icon: <LegacyAdsIcon iconSize="xs" />,
        label: "test settings",
        className: "",
        labelSize: "md",
        submenuContent: <span>Close</span>,
        submenuClassName: "",
    },
    argTypes: {
        icon: {
            control: false,
            description:
                "The icon displayed in the button that toggles the submenu.",
        },
        label: {
            control: false,
            description:
                "The label text displayed next to the icon in the toggle button.",
        },
        labelSize: {
            control: false,
            description: 'The size of the label text, defaults to "md".',
        },
        submenuContent: {
            control: false,
            description:
                "The content displayed inside the submenu when it is open.",
        },
        submenuClassName: {
            control: false,
            description:
                "Optional custom class name for styling the submenu container.",
        },
        className: {
            control: false,
            description:
                "Optional custom class name for styling the toggle button.",
        },
        children: {
            control: false,
            description:
                "The children nodes provided to the submenu panel, which are displayed below the submenuContent.",
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Submenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Submenu",
    render: (args) => (
        <div
            style={{
                height: "400px",
                width: "300px",
                backgroundColor: "orange",
                position: "relative",
                padding: "20px",
            }}
        >
            <Submenu {...args}>
                <div>Test children</div>
            </Submenu>
        </div>
    ),
};
