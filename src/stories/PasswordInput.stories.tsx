import { StoryObj, Meta } from "@storybook/react";
import { PasswordInput } from "../../lib/main";
import { useState } from "react";

const meta = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    autoComplete: "password",
    id: "password",
    label: "Enter Password",
    value: "",
    onChange: () => {},
    hidePasswordMeter: false,
    hint: "Password should have lower and uppercase English letters with numbers.",
  },
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
    autoComplete: {
      control: {
        disable: true,
      },
    },
    id: {
      control: {
        disable: true,
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
