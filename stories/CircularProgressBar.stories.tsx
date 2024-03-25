import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgressBar } from "../src/components/CircularProgressBar";

const meta = {
    title: "Components/CircularProgressBar",
    component: CircularProgressBar,
    parameters: {
        layout: "centered",
    },
    args: {
        progress: 50,
        radius: 22,
        stroke: 3,
        danger_limit: 20,
        warning_limit: 50,
        variant:"clockwise"
    },
    argTypes: {
        progress: {
            control: { type: "range", min: 0, max: 100, step: 1 },
        },
    },
} as Meta<typeof CircularProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultClockWise: Story = {
    args: {
        progress: 50,
    }
}
export const StaticProgressBar:Story = {
    args:{
        progress: 50,
        variant: 'static',
      }
}

export const SelectableProgressBar:Story = {
    args:{
        progress: 30,
        variant: 'selectable',
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

export const WithIconSelectable: Story = {
    args: {
        progress: 80,
        children: <span>🔄</span>,
        variant:"selectable"
    }
}

export const WarningLimitClockWise = {
    args: {
        progress: 40,
        warning_limit: 30,
    }
}
export const DangerLimitClockWise: Story = {
    args: {
        progress: 10,
        danger_limit: 20,
    }
}
