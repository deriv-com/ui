import React from '../../../node_modules/react';
type Title = string | React.JSX.Element;
export type TabItem = {
    id: string;
    icon?: React.ReactNode;
    is_disabled?: boolean;
    panel?: React.ReactNode;
    subItems?: {
        id: string;
        is_disabled?: boolean;
        panel: React.ReactNode;
        title: Title;
    }[];
    title: Title;
};
type VerticalTabItemProps = {
    tab: TabItem;
    onClick: (title: string) => void;
    className?: string;
    selectedTab: string;
};
export declare const VerticalTabItem: ({ tab, onClick, className, selectedTab, }: VerticalTabItemProps) => React.JSX.Element;
export {};
