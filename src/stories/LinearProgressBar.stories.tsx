import React from 'react';
import { Meta,StoryObj } from '@storybook/react';
import { LinearProgressBar } from '../../lib/components/LinearProgressBar';

const meta={
    title: 'Components/LinearProgressBar',
    component: LinearProgressBar,
  } satisfies Meta<typeof LinearProgressBar>;

  export default meta;

type Story = StoryObj<typeof meta>;

export const Default:Story ={
    args: {
        danger_limit: 20,
        is_loading: false,
        label: 'Loading...',
        percentage: 50,
        labelSize: 'xs',
        warning_limit: 80,
      }
}

export const Loading:Story = {
    args:{
        ...Default.args,
        is_loading:true,
    }
}

export const WithCustomLabel:Story = {
    args:{
        ...Default.args,
        label: <span>Custom Label</span>,
    }
}
