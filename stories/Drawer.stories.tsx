import type { Meta, StoryObj } from "@storybook/react";

import { Drawer, Button } from "../src/main";
import { useEffect, useState } from "react";

const meta = {
    title: "Components/Drawer",
    component: Drawer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        children: <Button>Open Drawer</Button>,
        isOpen: false,
        onCloseDrawer: () => {},
    },
    argTypes: {
        children: {
            description:
                "The content of the Drawer.you can use the `Drawer.Header`, `Drawer.Body`, and `Drawer.Footer` components to structure the content of the Drawer.",
            control: false,
        },
        isOpen: {
            description: "controls the visibility of the Drawer",
            control: {
                type: "boolean",
            },
        },
        onCloseDrawer: {
            description: "Callback function to close the Drawer",
            control: false,
        },
    },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Drawer",
    args: {
        isOpen: false,
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleCloseDrawer = () => {
            setIsOpen(false);
        };
        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <div style={{width:"800px", height:"500px"}}>
                <Drawer
                    width="300px"
                    isOpen={isOpen}
                    onCloseDrawer={handleCloseDrawer}
                >
                    <Drawer.Header onCloseDrawer={handleCloseDrawer}>
                        Menu
                    </Drawer.Header>
                    <Drawer.Content>this is the content</Drawer.Content>
                    <Drawer.Footer>Footer</Drawer.Footer>
                </Drawer>
                <Button style={{position:"absolute", top:0, right:20}} size="sm" onClick={() => setIsOpen(!isOpen)}>
                    Toggle Drawer
                </Button>
            </div>
        );
    },
};
