import React, { ReactElement } from '../../../node_modules/react';
import { TabTitleProps } from "./TabTitle";
import { Text } from "../Text";
import "./Tabs.scss";
type TabsProps = {
    children: ReactElement<TabTitleProps>[];
    activeTab?: string;
    wrapperClassName?: string;
    className?: string;
    variant?: "primary" | "secondary";
    onChange?: (index: number) => void;
    TitleFontSize?: React.ComponentProps<typeof Text>["size"];
};
declare const Tabs: ({ children, activeTab, wrapperClassName, className, variant, onChange, TitleFontSize, }: TabsProps) => JSX.Element;
export default Tabs;
