import React, { useState } from 'react';
import { DropdownWithSearchBox } from '../lib/components/DropdownWithSearchBox';

export const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value:any) => {
    setSelectedValue(value);
  };

  const handleSearch = (inputValue:any) => {
    // Handle search logic here
    console.log(inputValue);
  };
  const CancelIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="10"
        height="10"
        fill="none"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>

)

  return (
    <div>
      <h1>My Component</h1>
      <DropdownWithSearchBox
       cancelIcon={CancelIcon}
        dropdownIcon={<span>Dropdown Icon</span>}
        searchIcon={<span>Search Icon</span>}
        label="Dropdown Label"
        list={[
          { text: 'Option 1', value: 'option1' },
          { text: 'Option 2', value: 'option2' },
          { text: 'Option 3', value: 'option3' },
        ]}
        name="dropdown"
        onSelect={handleSelect}
        onSearch={handleSearch}
        value={selectedValue}
      />
    </div>
  );
};
