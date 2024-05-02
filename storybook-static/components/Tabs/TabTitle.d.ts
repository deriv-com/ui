import React from '../../../node_modules/react';
import { Text } from "../Text";
export type TabTitleProps = {
    icon?: React.ReactNode;
    activeTab: string;
    isActive?: boolean;
    setSelectedTab: (title: string) => void;
    title: string;
    className?: string;
    variant: "primary" | "secondary";
    onChange?: () => void;
    TitleFontSize?: React.ComponentProps<typeof Text>["size"];
};
declare const TabTitle: ({ icon, activeTab, isActive, setSelectedTab, title, className, variant, onChange, TitleFontSize, }: TabTitleProps) => React.JSX.Element;
export default TabTitle;
