import React, { memo, useEffect, useState } from 'react';
import { CollapsibleVerticalTabItem } from './CollapsibleVerticalTabItem';
import { VerticalTabItem, type TabItem } from './VerticalTabItem'
import clsx from 'clsx';

type VerticalTabItemsProps = {
    activeTab: string;
    onSelectItem?: (title: string) => void;
    wrapperClassName?: string;
    panelClassName?: string;
    itemClassName?: string;
    items: TabItem[];
}

/**
 * Component to display the vertical tab items. iit should be wrapperd inside the VerticalTab component
 * @param {TabItem} items - tab items
 * @param {string} panelClassName -it applies the classname to the right panel
 * @param {string} wrapperClassName - it applies the classname to the left side menu container
 * @param {string} itemClassName - it applies the classname to the each items whether it's sub-item or single item
 * @param {string} activeTab - indicates the active tab. you can pass the title of the tab
 * @param {Function} onSelectItem - callback to handle selecting each tab item
 * @returns {React.JSX.Element} - returns the vertical tab component
 *
 * @example
 * const items = [
 *     {
 *      title: 'Item 1',
 *      icon: Icon,
 *      panel: <div>Item 1 pane</div>
 *     },
 *     {
 *      title: 'Item 2',
 *      icon: Icon,
 *      panel: <div>Item 2 pane</div>,
 *      subItems: [
 *          {
 *              title: 'Item 2.1',
 *              icon: Icon,
 *              panel: <div>Item 2.1 pane</div>
 *          },
*           {
 *              title: 'Item 2.2',
 *              icon: Icon,
 *              is_disabled: true,
 *              panel: <div>Item 2.2 pane</div>
 *          },
 *      ]
 *     },
 *     {
 *      title: 'Item 3',
 *      icon: Icon,
 *      panel: <div>Item 3 pane</div>
 *     },
 * ]
 *
 * <VerticalTab className='test-1'>
 *      <VerticalTabItems
 *          items={items} activeTab='SubItem 2.1'
 *          onSelectItem={
 *              (title) => console.log('clicked on:', title)
 *          }
 *      />
 * </VerticalTab>
 */

export const VerticalTabItems = memo(({
    items,
    panelClassName,
    wrapperClassName,
    itemClassName,
    activeTab,
    onSelectItem }: VerticalTabItemsProps) => {
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
        <>
            <div className={clsx('vertical-tab__items-container', wrapperClassName)}>
                {items.map((item) => {
                    if (!item?.subItems) {
                        return (
                            <VerticalTabItem className={itemClassName} key={item?.title} selectedTab={selectedTab} tab={item} onClick={() => onSelectItemHandler(item?.title)} />
                        )
                    } else {
                        return (
                            <CollapsibleVerticalTabItem
                                key={item?.title}
                                item={item}
                                selectedTab={selectedTab}
                                onSelectItemHandler={onSelectItemHandler}
                                className={itemClassName}
                            />
                        )
                    }
                })}
            </div>
            <div className={clsx('vertical-tab__pane', panelClassName)}>
                {findActiveTab(selectedTab)?.panel}
            </div>
        </>
    );
})
