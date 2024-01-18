import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../../lib/components/Loader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args:{
    color: "red",
    isFullScreen: false,

  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      table: {
        disable: true,
      }
    },
    color: {
      control: { type: 'text' },
    },

  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  name: 'Loader',
};
