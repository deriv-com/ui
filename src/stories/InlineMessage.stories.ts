import { StoryObj, Meta } from "@storybook/react";
import { InlineMessage } from "../../lib/main";

const meta = {
  title: "Components/InlineMessage",
  component: InlineMessage,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    icon: {
      disable: true,
    },
    className: {
      disable: true,
    },
    variant: {
      control: {
        type: "select",
      },
      defaultValue: "general",
      options: ["warning", "info", "success", "error", "general"],
    },
    type: {
      control: {
        type: "select",
      },
      defaultValue: "filled",
      options: ["outlined", "filled"],
    },
  },
} satisfies Meta<typeof InlineMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Inline Message",
  args: {
    variant: "general",
    type: "outlined",
    children: "This is a default inline message",
  },
};

export const WarningFilled: Story = {
  name: "Warning filled Inline Message",
  args: {
    variant: "warning",
    children: "This is a default inline message",
  },
};

export const WarningOutlined: Story = {
  name: "Warning outlined Inline Message",
  args: {
    variant: "warning",
    type: "outlined",
    children: "This is a default inline message",
  },
};

export const InfoFilled: Story = {
  name: "Info filled Inline Message",
  args: {
    variant: "info",
    children: "This is a default inline message",
  },
};

export const InfoOutlined: Story = {
  name: "Info outlined Inline Message",
  args: {
    variant: "info",
    type: "outlined",
    children: "This is a default inline message",
  },
};

export const SuccessFilled: Story = {
  name: "Success filled Inline Message",
  args: {
    variant: "success",
    children: "This is a default inline message",
  },
};

export const SuccessOutlined: Story = {
  name: "Success outlined Inline Message",
  args: {
    variant: "success",
    type: "outlined",
    children: "This is a default inline message",
  },
};

export const ErrorFilled: Story = {
  name: "Error filled Inline Message",
  args: {
    variant: "error",
    children: "This is a default inline message",
  },
};

export const ErrorOutlined: Story = {
  name: "Error outlined Inline Message",
  args: {
    variant: "error",
    type: "outlined",
    children: "This is a default inline message",
  },
};
