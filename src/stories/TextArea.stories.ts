import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextArea } from "../../lib/components/TextArea"

const meta = {
    title: 'TextArea',
    component: TextArea,
    args: {
        label: 'Description',
        placeholder: 'Enter your text here',
        hint: 'This is a hint for the user',
        maxLength: 100,
        onInputChange: action('Text changed'),
    }
} satisfies Meta<typeof TextArea>

export default meta;
type Story =StoryObj<typeof meta>

export const Default:Story ={
    args:{
        label: 'Description',
        placeholder: 'Enter your text here',
        hint: 'This is a hint for the user',
        maxLength: 100,
        onInputChange: action('Text changed'),
        textSize:"sm",
    }
}

export const WithError:Story = {
    args:{
        label: 'Description',
        placeholder: 'Enter your text here',
        hint: 'This is an error hint',
        maxLength: 100,
        isInvalid: true,
        onInputChange: action('Text changed'),
        textSize:"sm"
    }
}

export const WithCounter:Story ={
    args:{
        label: 'Description',
        placeholder: 'Enter your text here',
        hint: 'This is a counter hint',
        maxLength: 100,
        shouldShowCounter: true,
        onInputChange: action('Text changed'),
        textSize:"sm"
    }
}

export const WithErrorAndCounter:Story ={
    args:{
        label: 'Description',
        placeholder: 'Enter your text here',
        hint: 'This is an error and counter hint',
        maxLength: 100,
        isInvalid: true,
        shouldShowCounter: true,
        onInputChange: action('Text changed'),
        textSize:"sm"
    }
}
