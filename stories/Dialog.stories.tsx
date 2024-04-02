import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "../src/main";
import { Button } from "../src/components/Button";
import { useEffect, useState } from "react";


const meta = {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        children: <Button>Open Dialog</Button>,
        isOpen: false,
        onRequestClose: () => { },
    },
    argTypes: {
        children: {
            description: "The content of the Dialog.you can use the `Dialog.Header`, `Dialog.Body`, and `Dialog.Footer` components to structure the content of the Dialog.",
            control: false
        },
        isOpen: {
            description: "controls the visibility of the Dialog",
            control: {
                type: "boolean",
            },
        },
        onRequestClose: {
            description: "Callback function to close the Dialog",
            control: false,
        },
        ariaHideApp: {
            description: "Boolean indicating if the appElement should be hidden. check this link for more details: https://reactcommunity.org/react-Dialog/accessibility/",
            control: {
                type: "boolean",
            },
        },
        style:{
            description: "overrides the default styles for b oth Dialog content and overlay, divided into overlay and content styles.",
            control: false,
        },
    }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Dialog",
    args: {
        isOpen: false,
        ariaHideApp: false,
        shouldCloseOnOverlayClick: true,
    },
    render : (args)=>{
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnEsc={false}
                >
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};

export const DialogWithoutOverlay: Story = {
    name: "Disable Overlay",
    args: {
        isOpen: false,
        onRequestClose: () => { },
        ariaHideApp: false,
        shouldCloseOnOverlayClick: false,
    },
    render : (args)=>{
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay:{
                        backgroundColor:'none'
                    }
                }}
                >
                <Dialog.Header hideCloseIcon={false} onRequestClose={() => setIsOpen(false)} >title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};

export const HideHeaderCloseIcon: Story = {
    name: "Show Close Icon",
    args: {
        isOpen: false,
        onRequestClose: () => { },
        ariaHideApp: false,
        shouldCloseOnOverlayClick: true,
    },
    render : (args)=>{
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Dialog.Header hideCloseIcon={false} >title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};

export const NoHeader: Story = {
    name: "Hide Header",
    args: {
        isOpen: false,
        onRequestClose: () => { },
        ariaHideApp: false,
        shouldCloseOnOverlayClick: true,
    },
    render : (args)=>{
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};


export const NoFooter: Story = {
    name: "Hide Footer",
    args: {
        isOpen: false,
        onRequestClose: () => { },
        ariaHideApp: false,
        shouldCloseOnOverlayClick: true,
    },
    render : (args)=>{
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
            </Dialog>
            </>
        )
    }
};


export const HeaderCloseIconHandler: Story = {
    name: "Close Dialog when Click on Close Icon",
    args: {
        isOpen: false,
        onRequestClose: () => { },
        ariaHideApp: false,
        shouldCloseOnOverlayClick: true,
    },
    render : (args)=>{
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Dialog.Header hideCloseIcon={false} onRequestClose={()=>setIsOpen(false)}>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};

export const DisableEscButton: Story = {
    name: "Disable ESC Button",
    args: {
        isOpen: false,
        onRequestClose: () => { },
        ariaHideApp: false,
        shouldCloseOnOverlayClick: true,
    },
    render : (args)=>{
        const [isOpen, setIsOpen] = useState(args.isOpen);

        useEffect(() => {
            setIsOpen(args.isOpen);
        }, [args.isOpen]);
        return (
            <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnEsc={false}
                >
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};
