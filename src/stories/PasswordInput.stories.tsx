import { StoryObj, Meta } from "@storybook/react";
import { PasswordInput } from "../../lib/main";
import { useState } from "react";

const meta = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    hideMessage: false,
    label: "Enter Password",
    value: "",
    onChange: () => {},
    hidePasswordMeter: false,
    hint: "This is a hint message",
  },
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
    variant: {
      options: ["general", "success", "warning", "error"],
      control: {
        type: "select",
      },
    },
    onChange: {
      control: {
        disable: true,
      },
    },
    hidePasswordMeter: {
      control: {
        type: "boolean",
      },
    },
    hideMessage: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Password Input",
  args: {
    label: "Enter Password",
    value: "",
    onChange: () => {},
    hidePasswordMeter: false,
    hint: "This is a hint message",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <PasswordInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const HideMessage: Story = {
  name: "Password Input with no message",
  args: {
    hideMessage: true,
    label: "Enter Password",
    value: "",
    onChange: () => {},
    hidePasswordMeter: false,
    hint: "This is a hint message",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <PasswordInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const HidePasswordMeter: Story = {
  name: "Password Input with no password meter",
  args: {
    label: "Enter Password",
    value: "",
    onChange: () => {},
    hidePasswordMeter: true,
    hint: "This is a hint message",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <PasswordInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
