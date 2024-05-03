import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header,Button } from "../src/main"
import {LegacyCashierIcon, LegacyReportsIcon} from "@deriv/quill-icons"

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


const menuItems = [
  {
    icon:<LegacyReportsIcon iconSize='xs'/> ,
    label:'Reports'
  },
  {
    icon:<LegacyCashierIcon iconSize='xs'/> ,
    label:'Cashier'
  },
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header>
      <Header.LeftWrapper>
        <Header.Logo />
        <Header.PlatformSwitcher />
        <Header.MenuItems items={menuItems} />
      </Header.LeftWrapper>
      <Header.RightWrapper>
        <Header.Notification />
        <Header.AccountSetting />
        <Header.AccountSwitcher accounts_list={account_list}  />
        <Button size='sm'> Deposit </Button>
      </Header.RightWrapper>
    </Header>

  </React.StrictMode>,
)
