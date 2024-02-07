import React, { useState } from 'react';
import { Text } from '../Text';
import clsx from 'clsx';

type VerticalTabItemsProps = {
    activeTab: string;
    onSelectItem?: (index: number) => void;
    className?: string;
    iconClassName?: string;
    labelClassName?: string;
    items: {
        icon: React.ReactNode;
        title: string;
        component: React.ReactNode;
        subItems?: {
            icon: React.ReactNode;
            title: string;
            component: React.ReactNode;
        }[];
    }[];

}

const ArrowDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M8.66699 9.58579L13.9599 4.29289C14.3504 3.90237 14.9836 3.90237 15.3741 4.29289C15.7646 4.68342 15.7646 5.31658 15.3741 5.70711L9.3741 11.7071C8.98358 12.0976 8.35041 12.0976 7.95989 11.7071L1.95989 5.70711C1.56936 5.31658 1.56936 4.68342 1.95989 4.29289C2.35041 3.90237 2.98357 3.90237 3.3741 4.29289L8.66699 9.58579Z" fill="#333333" />
</svg>;
export const VerticalTabItems = ({ items, className, iconClassName, labelClassName, activeTab, onSelectItem }: VerticalTabItemsProps) => {
    const [selectedTab, setSelectedTab] = useState<string>(activeTab);

    const onSelectItemHandler = (index: number) => {
        setSelectedTab(items[index]?.title);
        onSelectItem?.(index);
    }
    return (
        <div className='shayan'>
            <div className='vertical-tab__item-container'>
                {items.map((item, index) => {
                    if (!item?.subItems) {
                        return (
                            <div
                                key={item?.title}
                                className={
                                    clsx(`vertical-tab__item`, {
                                        'vertical-tab__item--active': item?.title === selectedTab
                                    }, className)
                                }
                                onClick={() => onSelectItemHandler(index)}
                            >
                                <span className={clsx(`vertical-tab__icon`, iconClassName)}> {item?.icon}</span>
                                <Text as='span' className={clsx(`vertical-tab__label`, labelClassName)}>{item?.title}</Text>
                            </div>
                        )
                    } else {
                        return (
                            <div
                                key={item?.title}
                                className={
                                    clsx(`collapsible-vertical-tab__item`, {
                                        'collapsible-vertical-tab__item--open': item?.subItems.find((subItem) => subItem?.title === selectedTab),
                                    }, className)
                                }
                                onClick={() => onSelectItemHandler(index)}
                            >
                                <span className={clsx(`vertical-tab__icon`, iconClassName)}> {item?.icon}</span>
                                <Text as='span' className={clsx(`vertical-tab__label`, labelClassName)}>{item?.title}</Text>
                                <ArrowDownIcon />
                            </div>
                        )
                    }
                })}
            </div>
            <div className='vertical-tab__pane'>
                {items.find((item) => item?.title === selectedTab)?.component}
            </div>
        </div>
    );
}