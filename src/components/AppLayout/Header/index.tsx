import { LegacyReportsIcon } from "@deriv/quill-icons/Legacy";
import { DerivLogo } from "./DerivLogo";
import { PlatformSwitcher } from "./PlatformSwitcher";
import { MenuItem } from "./MenuItem";
import "./Header.scss";

const Header = () => (
    <header className="deriv-header">
        <div className="deriv-header__left">
            <DerivLogo />
            <PlatformSwitcher />
            <MenuItem
                label="Cashier"
                href="https://app.deriv.com/cashier/deposit"
                icon={<LegacyReportsIcon width={16} height={16} />}
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
