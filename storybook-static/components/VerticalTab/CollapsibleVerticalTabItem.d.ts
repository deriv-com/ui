import React from '../../../node_modules/react';
import { TabItem } from "./VerticalTabItem";
type CollapsibleVerticalTabItemProps = {
    item: TabItem;
    onSelectItemHandler: (id: string) => void;
    selectedTab: string;
    className?: string;
    iconClassName?: string;
};
export declare const CollapsibleVerticalTabItem: ({ item, onSelectItemHandler, selectedTab, className, iconClassName, }: CollapsibleVerticalTabItemProps) => React.JSX.Element;
export {};
