import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "../../lib/main";

const meta = {
    title: 'Components/Dialog',
    component: Dialog,
} satisfies Meta<typeof Dialog>
export default meta;

type Story = StoryObj<typeof meta>

export const BasicDialog: Story = {
    args: {
        header: 'Basic Dialog',
        body: <p>This is a basic dialog.</p>,
        primaryButton: <button>OK</button>,
        isOpen: true,
    }
}

export const CustomizedDialog: Story = {
    args: {
        header: 'Customized Dialog',
        body: (
            <div>
                <p>This is a customized dialog with additional content.</p>
                <p>You can add more elements here.</p>
            </div>
        ),
        isOpen: true,
        primaryButton: <button>Confirm</button>,
        secondaryButton: <button>Cancel</button>,
    }
};
