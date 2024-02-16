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

  return (
    <div>
      <h1>My Component</h1>
      <DropdownWithSearchBox
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
