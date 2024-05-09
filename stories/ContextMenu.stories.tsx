import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "../src/main";

const meta = {
    title: "Components/ContextMenu",
    component: ContextMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        isOpen: true,
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
    render: (args) => {
        return (
            <div style={{ width: "800px", height: "500px" }}>
                <ContextMenu
                    isOpen={args.isOpen}
                    style={{ position: "absolute", top: 10, left: 10 }}
                >
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </ContextMenu>
            </div>
        );
    },
};
