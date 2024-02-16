import React from 'react';
import { Meta,StoryObj} from '@storybook/react';
import { DropdownWithSearchBox } from '../../lib/components/DropdownWithSearchBox'; // Update the import path accordingly

// Story component
const meta={
  title: 'Components/DropdownWithSearchBox',
  component: DropdownWithSearchBox,
  args:{
    disabled: false,
    dropdownIcon: <span>Dropdown Icon</span>,
    errorMessage: undefined,
    dropdownHeight: '200px',
    icon: undefined,
    label:"label",
    list: [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' },
    ],
    listHeight: 'xs',
    name: 'dropdown',
    onSearch: (inputValue:string) => console.log('Searching for:', inputValue),
    onSelect: (value:any) => console.log('Selected:', value),
    searchIcon: <span>Search Icon</span>,
    value: '',
    variant: 'prompt',
  }
}satisfies Meta<typeof DropdownWithSearchBox>

export default meta;
 type Story =StoryObj<typeof meta>

export const Default:Story ={
   args:{
    ...meta.args,
    disabled: true,
   }
}

export const ErrorState:Story = {
   args:{
    ...meta.args,
    errorMessage: "This field is required",
   }
}

export const ComboBoxVariant = {
    args:{
        ...meta.args,
        variant: 'comboBox',
       }
}