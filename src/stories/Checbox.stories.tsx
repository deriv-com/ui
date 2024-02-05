import { StoryObj, Meta } from "@storybook/react";
import { Checkbox } from "../../lib/main";
import { useState } from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    checked: false,
    className: "",
    label: "Get updates about Deriv products, services and events.",
    onChange: () => {},
    wrapperClassName: "",
    error: false,
  },
  argTypes: {
    wrapperClassName: {
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    checked: {
      control: {
        type: "boolean",
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
    onChange: {
      control: {
        disable: true,
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Checkbox Input",
  args: {
    checked: false,
    onChange: () => {},
    label: "Get updates about Deriv products, services and events.",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};
