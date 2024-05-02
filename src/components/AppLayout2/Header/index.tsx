import "./Header.scss";
import React from "react";
import { RightWrapper } from "./RightWrapper";
import { LeftWrapper } from "./LeftWrapper";


export const Header = ({children }: React.PropsWithChildren) => (
    <header className="deriv-header">
        {children}
    </header>
);

Header.RightWrapper = RightWrapper;
Header.LeftWrapper = LeftWrapper;


Header.displayName = "Header";
