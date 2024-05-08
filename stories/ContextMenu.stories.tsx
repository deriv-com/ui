import type { Meta, StoryObj } from "@storybook/react";

import { Button, ContextMenu } from "../src/main";
import { useEffect, useState } from "react";

const meta = {
    title: "Components/ContextMenu",
    component: ContextMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        isOpen: false,
    },
    argTypes: {
        isOpen: {
            description: "controls the visibility of the ContextMenu",
            control: {
                type: "boolean",
            },
        },
    },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default ContextMenu",
    args: {
        isOpen: true,
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);

        return (
            <div style={{ width: "800px", height: "500px" }}>
                <ContextMenu
                    isOpen={isOpen}
                    style={{ position: "absolute", top: 60, left: 10 }}
                >
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </ContextMenu>
                <Button
                    style={{ position: "relative" }}
                    size="sm"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Toggle ContextMenu
                </Button>
            </div>
        );
    },
};
