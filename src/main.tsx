import React from 'react'
import ReactDOM from 'react-dom/client'
import { Loader } from '../dist/components/Loader';
import {Button} from '../dist/components/Button';
import {Text} from '../dist/components/Text';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Loader color='red' />
      <Button> button </Button>
      <Text color='blue' size='lg'>this is a Text</Text>
    </>
  </React.StrictMode>,
)
