import React from 'react'
import ReactDOM from 'react-dom/client'
import { Loader } from '../dist/components/Loader';
import { Button } from '../dist/components/Button';
import { Text } from '../dist/components/Text';
import { Tabs, Tab } from '../dist/components/Tabs';
import {PrimaryTabList, PrimaryTabPanel, PrimaryTabPanels, PrimaryTabs} from '../dist/components/PrimaryTabs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Loader color='red' />
      <Button> button </Button>
      <Text color='blue' size='lg'>this is a Text</Text>

      <Tabs preSelectedTab={0} >
        <Tab title='tab1'>
          test data for tab 1
        </Tab>
        <Tab title='tab2'>
          test data for tab 2
        </Tab>
      </Tabs>


      <PrimaryTabs className='derivs-accounts-list'>
                <PrimaryTabList list={['primary tab 1', 'primary tab 2']} />
                <PrimaryTabPanels>
                    <PrimaryTabPanel>
                        primary tab 1 content
                    </PrimaryTabPanel>
                    <PrimaryTabPanel>
                        primary tab 2 content
                    </PrimaryTabPanel>
                </PrimaryTabPanels>
            </PrimaryTabs>
    </>


  </React.StrictMode>,
)
