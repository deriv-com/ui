import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header,Button } from "../src/main"

const account_list = [
  {
      icon: "USD",
      type: "US Dollar",
      loginId: "CR900000702",
      balance: "10,000.00",
      currency: "USD",
      token: "",
      is_eu: true,
  },
  {
      icon: "USDT",
      type: "Tether TRC20",
      loginId: "CR900000527",
      balance: "60,000.00",
      currency: "tUSDT",
      token: "",
      is_eu: false,
  },
  {
      icon: "Demo",
      type: "Demo",
      loginId: "VRTC900000702",
      balance: "10,000.00",
      currency: "USD",
      token: "",
      is_eu: false,
  },
];

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
        <Header.LeftWrapper.AccountSwitcher accounts_list={account_list}  />
        <Button size='sm'> Deposit </Button>
      </Header.LeftWrapper>

    </Header>
  </React.StrictMode>,
)
