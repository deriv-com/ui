import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Submenu } from "../src/main";

const meta = {
    title: "Components/Submenu",
    component: Submenu,
    args: {
        children: <span>Test Children</span>,
        className: "",
        isOpen: false,
    },
    argTypes: {
        children: {
            control: false,
            description:
                "The children nodes provided to the submenu panel, which are displayed below the submenuContent.",
        },
        isOpen: {
            description:
                "A boolean flag to control the visibility of the submenu. When set to true, the submenu is open or visible. When set to false, the submenu will start the exit animation and then unmount.",
        },
        className: {
            control: false,
            description:
                "Optional custom class name for styling the toggle button.",
        },
    },
    parameters: { layout: "left" },
    tags: ["autodocs"],
} satisfies Meta<typeof Submenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Submenu",
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div
                style={{
                    height: "400px",
                    width: "300px",
                    backgroundColor: "yellowgreen",
                    position: "relative",
                    padding: "20px",
                }}
            >
                <button onClick={() => setIsOpen(true)}>Click me</button>
                <Submenu isOpen={isOpen}>
                    <div>Test children</div>
                    <button onClick={() => setIsOpen(false)}>Close me</button>
                </Submenu>
            </div>
        );
    },
};
