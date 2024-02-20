import { StoryObj, Meta } from "@storybook/react";
import { Checkbox } from "../../lib/main";
import { useEffect, useState } from "react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    disabled: false,
    checked: false,
    className: "",
    label: "Get updates about Deriv products, services and events.",
    onChange: () => {},
    wrapperClassName: "",
    name: "example-checkbox",
    error: false,
  },
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
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
    disabled: {
      control: {
        type: "boolean",
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
    name: "example-checkbox",
    label: "Get updates about Deriv products, services and events.",
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={() => setChecked((previous) => !previous)}
      />
    );
  },
};
