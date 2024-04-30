import "./Header.scss";
import React from "react";
import { RightWrapper } from "./RightWrapper";
import { LeftWrapper } from "./LeftWrapper";


const Header = ({children }: React.PropsWithChildren) => (
    <header className="deriv-header">
        {children}
    </header>
);

Header.RightWrapper = RightWrapper;
Header.LeftWrapper = LeftWrapper;

export default Header;

Header.displayName = "Header";
