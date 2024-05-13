import React, { ReactNode } from "react";

type TabProps = {
    children?: ReactNode;
    icon?: ReactNode;
    title: string | JSX.Element;
    className?: string;
};

const Tab = ({ children }: TabProps) => <>{children}</>;

export default Tab;
