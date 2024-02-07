import React, { useEffect, useState } from 'react';
import { Text } from '../Text';
import clsx from 'clsx';

type VerticalTabItemsProps = {
    activeTab: string;
    onSelectItem?: (title: string) => void;
    className?: string;
    iconClassName?: string;
    labelClassName?: string;
    items: {
        icon: React.ReactNode;
        title: string;
        component?: React.ReactNode;
        subItems?: {
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

    const findActiveTab = (title: string) => {
        let clicked_item = undefined;
        for (const item of items) {
            if (item?.subItems) {
                clicked_item =  item?.subItems.find((subItem) => subItem?.title === title);
            }else{
                if (item?.title === title) {
                    return item?.title;
                }
            }
        }

        return clicked_item?.title;
    }

    const onSelectItemHandler = (title: string) => {
        console.log("item clicked", title)
        setSelectedTab(() => findActiveTab(title) ?? activeTab);
        onSelectItem?.(title);
    }

    useEffect(() => {
        if (activeTab) {
            setSelectedTab(activeTab);
        }
    }, [activeTab]);

    return (
        <div className='shayan'>
            <div className='vertical-tab__item-container'>
                {items.map((item) => {
                    if (!item?.subItems) {
                        return (
                            <div
                                key={item?.title}
                                className={
                                    clsx(`vertical-tab__item`, {
                                        'vertical-tab__item--active': item?.title === selectedTab
                                    }, className)
                                }
                                onClick={() => onSelectItemHandler(item?.title)}
                            >
                                <span className={clsx(`vertical-tab__icon`, iconClassName)}> {item?.icon}</span>
                                <Text as='span' className={clsx(`vertical-tab__label`, labelClassName)}>{item?.title}</Text>
                            </div>
                        )
                    } else {
                        return (
                            <div
                                key={item?.title}
                                className={clsx(`collapsible-vertical-tab`)}>
                                <div className={clsx(`collapsible-vertical-tab__header`, {
                                    'collapsible-vertical-tab__header--open': item?.subItems.find((subItem) => subItem?.title === selectedTab),
                                }, className)}>
                                    <span className={clsx(`vertical-tab__icon`, iconClassName)}> {item?.icon}</span>
                                    <Text as='span' className={clsx(`vertical-tab__label`, labelClassName)}>{item?.title}</Text>
                                    <ArrowDownIcon />
                                </div>
                                <div className='collapsible-vertical-tab__items'>
                                    {item?.subItems.map((subItem) => {
                                        return (
                                            <div
                                                key={subItem?.title}
                                                className={
                                                    clsx(`vertical-tab__item`, {
                                                        'vertical-tab__item--active': subItem?.title === selectedTab
                                                    }, className)
                                                }
                                                onClick={() => onSelectItemHandler(subItem?.title)}
                                            >
                                                <Text as='span' className={clsx(`vertical-tab__label`, labelClassName)}>{subItem?.title}</Text>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='vertical-tab__pane'>
                {items.find((item) => {
                    if (item?.subItems) {
                        return item?.subItems.find((subItem) => subItem?.title === selectedTab)
                    }
                    return item?.title === selectedTab
                })?.component}
            </div>
        </div>
    );
}