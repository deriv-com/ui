import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgressBar } from "../src/components/CircularProgressBar";

const meta = {
    title: "Components/CircularProgressBar",
    component: CircularProgressBar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        progress: 50,
        radius: 22,
        stroke: 3,
        danger_limit: 20,
        warning_limit: 50,
        is_clockwise:false
    },
    argTypes: {
        progress: {
            control: { type: "range", min: 0, max: 100, step: 1 },
        },
        is_clockwise: {
            options: ["true", "false"],
            control: { type: "boolean" },
        }
    },
} as Meta<typeof CircularProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultClockWise: Story = {
    args: {
        progress: 50,
    }
}

export const CustomRadiusAndStrokeClockwise: Story = {
    args: {
        progress: 70,
        radius: 30,
        stroke: 5,
    }
}

export const ClockwiseProgress: Story = {
    args: {
        progress: 60,
        is_clockwise: true,
    }
}

export const WarningLimitClockWise = {
    args: {
        progress: 30,
        warning_limit: 30,
    }
}
export const DangerLimitClockWise: Story = {
    args: {
        progress: 10,
        danger_limit: 20,
    }
}
