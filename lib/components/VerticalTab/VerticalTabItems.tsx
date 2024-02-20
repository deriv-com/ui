import React, { memo, useEffect, useState } from "react";
import { CollapsibleVerticalTabItem } from "./CollapsibleVerticalTabItem";
import { VerticalTabItem, type TabItem } from "./VerticalTabItem";
import clsx from "clsx";

type VerticalTabItemsProps = {
    activeTab: string;
    onSelectItem?: (id: string) => void;
    wrapperClassName?: string;
    panelClassName?: string;
    itemClassName?: string;
    items: TabItem[];
    should_have_panel?: boolean;
};

/**
 * Component to display the vertical tab items. iit should be wrapperd inside the VerticalTab component
 * @param {TabItem} items - tab items
 * @param {string} panelClassName -it applies the classname to the right panel
 * @param {string} wrapperClassName - it applies the classname to the left side menu container
 * @param {string} itemClassName - it applies the classname to the each items whether it's sub-item or single item
 * @param {string} activeTab - indicates the active tab. you can pass the title of the tab
 * @param {Function} onSelectItem - callback to handle selecting each tab item
 * @param {boolean} should_have_panel - indicates whether the panel should be displayed or not
 * @returns {React.JSX.Element} - returns the vertical tab component
 *
 * @example
 * const items = [
 *     {
 *      id:'Item 1',
 *      title: 'Item 1',
 *      icon: Icon,
 *      panel: <div>Item 1 pane</div>
 *     },
 *     {
 *      id:'Item 2',
 *      title: 'Item 2',
 *      icon: Icon,
 *      panel: <div>Item 2 pane</div>,
 *      subItems: [
 *          {
 *              id:'Item 2.1',
 *              title: 'Item 2.1',
 *              panel: <div>Item 2.1 pane</div>
 *          },
 *           {
 *              id:'Item 2.2',
 *              title: 'Item 2.2',
 *              is_disabled: true,
 *              panel: <div>Item 2.2 pane</div>
 *          },
 *      ]
 *     },
 *     {
 *      id:'Item 3',
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

export const VerticalTabItems = memo(
    ({
        items,
        panelClassName,
        wrapperClassName,
        itemClassName,
        activeTab,
        should_have_panel = true,
        onSelectItem,
    }: VerticalTabItemsProps) => {
        const [selectedTab, setSelectedTab] = useState<string>(activeTab);
        useEffect(() => {
            if (activeTab) {
                setSelectedTab(activeTab);
            }
        }, [activeTab]);

        const findActiveTab = (id: string) => {
            for (const item of items) {
                if (item?.subItems) {
                    const foundItem = item?.subItems.find(
                        (subItem) => subItem.id === id,
                    );
                    if (foundItem) {
                        return foundItem;
                    }
                } else {
                    if (item.id === id) {
                        return item;
                    }
                }
            }
        };

        const onSelectItemHandler = (id: string) => {
            const new_active_tab = findActiveTab(id)?.id;
            setSelectedTab(() => new_active_tab ?? activeTab);
            onSelectItem?.(id);
        };

        return (
            <>
                <div
                    className={clsx(
                        "vertical-tab__items-container",
                        wrapperClassName,
                    )}
                >
                    {items.map((item) => {
                        if (!item?.subItems) {
                            return (
                                <VerticalTabItem
                                    className={itemClassName}
                                    key={item.id}
                                    selectedTab={selectedTab}
                                    tab={item}
                                    onClick={() => onSelectItemHandler(item.id)}
                                />
                            );
                        } else {
                            return (
                                <CollapsibleVerticalTabItem
                                    key={item.id}
                                    item={item}
                                    selectedTab={selectedTab}
                                    onSelectItemHandler={onSelectItemHandler}
                                    className={itemClassName}
                                />
                            );
                        }
                    })}
                </div>
                {should_have_panel && (
                    <div
                        className={clsx("vertical-tab__panel", panelClassName)}
                    >
                        {findActiveTab(selectedTab)?.panel}
                    </div>
                )}
            </>
        );
    },
);
