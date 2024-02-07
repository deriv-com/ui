import React, { memo, useEffect, useState } from 'react';

import { VerticalTabItem, type TabItem } from './VerticalTabItem'
import { CollapsibleVerticalTabItem } from './CollapsibleVerticalTabItem';

type VerticalTabItemsProps = {
    activeTab: string;
    onSelectItem?: (title: string) => void;
    className?: string;
    iconClassName?: string;
    labelClassName?: string;
    items: TabItem[];
}


export const VerticalTabItems = memo(({ items, className, iconClassName, labelClassName, activeTab, onSelectItem }: VerticalTabItemsProps) => {
    const [selectedTab, setSelectedTab] = useState<string>(activeTab);
    useEffect(() => {
        if (activeTab) {
            setSelectedTab(activeTab);
        }
    }, [activeTab]);

    const findActiveTab = (title: string) => {
        for (const item of items) {
            if (item?.subItems) {
                const foundItem = item?.subItems.find((subItem) => subItem?.title === title);
                if (foundItem) {
                    return foundItem;
                }
            } else {
                if (item?.title === title) {
                    return item;
                }
            }
        }
    }

    const onSelectItemHandler = (title: string) => {
        const new_active_tab = findActiveTab(title)?.title;
        setSelectedTab(() => new_active_tab ?? activeTab);
        onSelectItem?.(title);
    }


    return (
        <div className='shayan'>
            <div className='vertical-tab__item-container'>
                {items.map((item) => {
                    if (!item?.subItems) {
                        return (
                            <VerticalTabItem key={item?.title} selectedTab={selectedTab} tab={item} onClick={() => onSelectItemHandler(item?.title)} />
                        )
                    } else {
                        return (
                            <CollapsibleVerticalTabItem
                                key={item?.title}
                                item={item}
                                selectedTab={selectedTab}
                                onSelectItemHandler={onSelectItemHandler}
                                labelClassName={labelClassName}
                                className={className}
                                iconClassName={iconClassName}
                            />
                        )
                    }
                })}
            </div>
            <div className='vertical-tab__pane'>
                {findActiveTab(selectedTab)?.component}
            </div>
        </div>
    );
})

VerticalTabItems.displayName = 'VerticalTabItems';