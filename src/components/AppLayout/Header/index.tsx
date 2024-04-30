import { DerivLogo } from "./DerivLogo";
import { PlatformSwitcher } from "./PlatformSwitcher";

// import {
//     DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon,
//     DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon,
//     PartnersProductSmarttraderBrandLightLogoWordmarkIcon,
//     PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon,
// } from "@deriv/quill-icons/Logo";

import "./Header.scss";
import { MenuItem } from "./MenuItem";
import { LegacyReportsIcon } from "@deriv/quill-icons/Legacy";

// const platforms = [
//     {
//         Icon: DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon,
//         description:
//             "A whole new trading experience on a powerful yet easy to use platform.",
//     },
//     {
//         Icon: DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon,
//         description: "Automated trading at your fingertips. No coding needed.",
//     },
//     {
//         Icon: PartnersProductSmarttraderBrandLightLogoWordmarkIcon,
//         description:
//             "Trade the world’s markets with our popular user-friendly platform.",
//     },
//     {
//         Icon: PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon,
//         description:
//             "Our classic “drag-and-drop” tool for creating trading bots, featuring pop-up trading charts, for advanced users.",
//     },
// ];

const Header = () => (
    <header className="deriv-header">
        <div className="deriv-header__left">
            <DerivLogo />
            <PlatformSwitcher />
            <MenuItem
                label="Cashier"
                href="https://app.deriv.com/cashier/deposit"
                Icon={LegacyReportsIcon}
                iconSize={16}
            />
        </div>
        {/* <div className="deriv-header__right">
            <div style={{ backgroundColor: "blue", color: "white" }}>
                Tutorial
            </div>
            <div style={{ backgroundColor: "red" }}>notification</div>
            <div style={{ backgroundColor: "pink" }}>account</div>
            <div style={{ backgroundColor: "yellow" }}>account switcher</div>
            <div style={{ backgroundColor: "orange" }}>buttons</div>
        </div> */}
    </header>
);

export default Header;
