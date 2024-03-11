import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../src/main";
import { Button } from "../src/components/Button";
import { useEffect, useState } from "react";


const meta = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        children: <Button>Open Modal</Button>,
        isOpen: false,
        onRequestClose: () => { },
    },
    argTypes: {
        children: {
            description: "The content of the modal.you can use the `Modal.Header`, `Modal.Body`, and `Modal.Footer` components to structure the content of the modal.",
            control: false
        },
        isOpen: {
            description: "controls the visibility of the modal",
            control: {
                type: "boolean",
            },
        },
        onRequestClose: {
            description: "Callback function to close the modal",
            control: false,
        },
        ariaHideApp: {
            description: "Boolean indicating if the appElement should be hidden. check this link for more details: https://reactcommunity.org/react-modal/accessibility/",
            control: {
                type: "boolean",
            },
        },
        style:{
            description: "overrides the default styles for b oth modal content and overlay, divided into overlay and content styles.",
            control: false,
        },
    }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Modal",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnEsc={false}
                >
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
};

export const ModalWithoutOverlay: Story = {
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
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
                <Modal.Header onRequestClose={() => setIsOpen(false)} >title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
};

export const HideHeaderCloseIcon: Story = {
    name: "Hide Close Icon",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Modal.Header hideCloseIcon >title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
};

export const NoHeaderBorder: Story = {
    name: "Hide Header Border",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Modal.Header hideBorder >title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
            </Modal>
            </>
        )
    }
};

export const NoFooterBorder: Story = {
    name: "Hide Footer Border",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
};

export const HeaderCloseIconHandler: Story = {
    name: "Close Modal when Click on Close Icon",
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                >
                <Modal.Header onRequestClose={()=>setIsOpen(false)}>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
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
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={args.shouldCloseOnOverlayClick}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnEsc={false}
                >
                <Modal.Header>title</Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer hideBorder>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
};
