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
        title: 'Dialog Title',
        bodyChildren: <p>This is the body of the dialog.</p>,
        footerChildren: <button>Close</button>,
    }
}
