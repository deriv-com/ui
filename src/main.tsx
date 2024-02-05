import React from 'react'
import ReactDOM from 'react-dom/client'
import { Loader } from '../dist/components/Loader';
import { Button } from '../dist/components/Button';
import { Text } from '../dist/components/Text';
import { Tab, Tabs } from '../dist/components/Tabs';
import {Dropdown} from '../dist/components/Dropdown';
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Dropdown label='test'  variant='comboBox' list={[
        {
          text: 'Option 1',
          value: 'option1'
        },
        {
          text: 'Option 2',
          value: 'option2'
        },
      ]}
      dropdownIcon="down"
      onSelect={(value) => console.log(value)}
      name='test name'
      />
    </>


  </React.StrictMode>,
)
