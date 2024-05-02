import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header,Button } from "../src/main"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header>
      <Header.RightWrapper>
        <Header.RightWrapper.Logo />
        <Header.RightWrapper.PlatformSwitcher />
        <Header.RightWrapper.MenuItems />
      </Header.RightWrapper>
      <Header.LeftWrapper>
        <Header.LeftWrapper.Notification />
        <Header.LeftWrapper.AccountSetting />
        <Header.LeftWrapper.AccountSwitcher />
        <Button size='sm'> Deposit </Button>
      </Header.LeftWrapper>

    </Header>
  </React.StrictMode>,
)
