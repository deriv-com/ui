import React from 'react'
import ReactDOM from 'react-dom/client'
import { Loader } from '../dist/components/Loader';
import { Button } from '../dist/components/Button';
import { Text } from '../dist/components/Text';
import { Tab, Tabs } from '../dist/components/Tabs';
// import {PrimaryTab, PrimaryTabs} from '../dist/components/PrimaryTabs';
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Loader color='red' />
      <Button> button </Button>
      <Text color='blue' size='lg'>this is a Text</Text>

      <Tabs variant='primary' activeTab='primary tab 2' >
        <Tab title='primary tab 1'>
          test data for tab 1
        </Tab>
        <Tab title='primary tab 2'>
          test data for tab 2
        </Tab>
      </Tabs>

      <Tabs variant='secondary' activeTab='secondary tab 1'  >
        <Tab title='secondary tab 1'>
          test data for tab 1
        </Tab>
        <Tab title='secondary tab 2'>
          test data for tab 2
        </Tab>
      </Tabs>
    </>


  </React.StrictMode>,
)
