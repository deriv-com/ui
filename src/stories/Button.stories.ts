import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../lib/components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args:{
    variant: "contained",
    children: "Click Me!",
    color: "primary",
    isLoading: false,
    disabled: false,
    size: "md",
    isFullWidth: false,
    rounded: "sm",
    type: "button",
    textSize: "sm"

  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'ghost'],
      control: { type: 'radio' },
    },
    'aria-label': {
      table: {
        disable: true,
      }
    },
    isLoading: {
      options: ['true', 'false'],
      control: { type: 'boolean' },

    },
    color: {
      options: ['primary', 'primary-light', 'black', 'white'],
      control: { type: 'radio' },
    },
    onClick: {
      table: {
        disable: true,
      }
    },
    className: {
      table: {
        disable: true,
      }
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Click me!',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
    size: 'lg'
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const ContainedPrimary: Story = {
  name: 'Contained (Primary)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'primary'
  },
};

export const ContainedPrimaryLight: Story = {
  name: 'Contained (Primary Light)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'primary-light'
  },
};

export const ContainedBlack: Story = {
  name: 'Contained (Black)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'black'
  },
};

export const ContainedWhite: Story = {
  name: 'Contained (White)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'white'
  },
};