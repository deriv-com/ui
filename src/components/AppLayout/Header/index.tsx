import DerivLogo from "./components/DerivLogo";
import PlatformSwitcher from "./components/PlatformSwitcher";

import "./Header.scss";

const Header = () => (
    <header className="deriv-header">
        <div className="deriv-header__left">
            <DerivLogo />
            <PlatformSwitcher />
            <div className="menu-items">menu items</div>
        </div>
        <div className="deriv-header__right">
            <div style={{ backgroundColor: "blue", color: "white" }}>
                Tutorial
            </div>
            <div style={{ backgroundColor: "red" }}>notification</div>
            <div style={{ backgroundColor: "pink" }}>account</div>
            <div style={{ backgroundColor: "yellow" }}>account switcher</div>
            <div style={{ backgroundColor: "orange" }}>buttons</div>
        </div>
    </header>
);

export default Header;
