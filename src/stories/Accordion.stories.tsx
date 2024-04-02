import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../lib/main";

const meta = {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        disableAnimation: false,
        isCompact: false,
        allowMultiple: false,
        variant: "underline",
        sections: [
            {
                title: "Section 1",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur. Nunc non molestie nunc, venenatis maximus ante. Vestibulum mattis faucibus scelerisque. Nulla tempus semper congue. Phasellus maximus iaculis eleifend. Praesent elementum risus augue, eu viverra eros pulvinar sagittis. Aliquam ullamcorper vel metus at ultricies. Phasellus sollicitudin nibh lacus, nec malesuada felis dapibus eu. Suspendisse ut condimentum felis, vitae accumsan nunc. Nunc non bibendum diam, eget molestie metus. Nam orci sem, porttitor sed libero ut, rutrum tristique nulla. Praesent et odio posuere diam ultricies luctus nec eu nibh. Cras sit amet sagittis erat. Nulla viverra rhoncus magna, vitae aliquet ex consectetur at.",
            },
            {
                title: "Section 2",
                content:
                    "Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.",
            },
            {
                title: "Section 3",
                content:
                    "Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.",
            },
        ],
    },
    argTypes: {
        variant: {
            options: ["underline", "bordered", "shadow"],
            control: { type: "select" },
        },
        sections: {
            control: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof Accordion>;

const styles = {
    width: "500px",
    color: "var(--du-text-general)",
};

const props = {
    className: "theme--light",
    style: styles,
};

export const AllowMultiple: Story = {
    args: {
        allowMultiple: true,
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args} />
        </div>
    ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {
    args: {
        variant: "underline",
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args} />
        </div>
    ),
};

export const Bordered: Story = {
    args: {
        variant: "bordered",
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args} />
        </div>
    ),
};

export const Shadow: Story = {
    args: {
        variant: "shadow",
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args} />
        </div>
    ),
};

export const DisabledAnimation: Story = {
    args: {
        disableAnimation: true,
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args} />
        </div>
    ),
};

export const Compact: Story = {
    args: {
        isCompact: true,
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args} />
        </div>
    ),
};
