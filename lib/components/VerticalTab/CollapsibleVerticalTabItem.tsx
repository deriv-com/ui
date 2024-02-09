
import React, { useState } from 'react';
import { Text } from '../Text';
import clsx from 'clsx';
import { VerticalTabItem, TabItem } from './VerticalTabItem';

type CollapsibleVerticalTabItemProps = {
    item: TabItem;
    onSelectItemHandler: (title: string) => void;
    selectedTab: string;
    className?: string;
    iconClassName?: string;
}


const ArrowIcon = ({ is_open }: { is_open: boolean }) => <svg className={clsx(`vertical-tab__arrow`, {
    'vertical-tab__arrow--open': is_open,
})} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M8.66699 9.58579L13.9599 4.29289C14.3504 3.90237 14.9836 3.90237 15.3741 4.29289C15.7646 4.68342 15.7646 5.31658 15.3741 5.70711L9.3741 11.7071C8.98358 12.0976 8.35041 12.0976 7.95989 11.7071L1.95989 5.70711C1.56936 5.31658 1.56936 4.68342 1.95989 4.29289C2.35041 3.90237 2.98357 3.90237 3.3741 4.29289L8.66699 9.58579Z" fill="#333333" />
</svg>;

export const CollapsibleVerticalTabItem = ({
    item,
    onSelectItemHandler,
    selectedTab,
    className,
    iconClassName,
}: CollapsibleVerticalTabItemProps) => {
    const selectedSubItemSelected = item?.subItems?.find((subItem) => subItem?.title === selectedTab)
    const [open, setOpen] = useState(selectedSubItemSelected ? true : false);

    const onClickHandler = () => {
        const shouldCollapse = !selectedSubItemSelected;
        if (shouldCollapse)
            setOpen(!open);
    }
    return (
        <div
            key={item.title}
            className={clsx(`collapsible-vertical-tab`)}>
            <div className={clsx(`collapsible-vertical-tab__header`, {
                'collapsible-vertical-tab__header--open': selectedSubItemSelected,
            })}
                onClick={() => onClickHandler()}
            >
                <span className={clsx(`vertical-tab__icon`, iconClassName)}> {item?.icon}</span>
                <Text className='vertical-tab__label'>{item?.title}</Text>
                <ArrowIcon is_open={open} />
            </div>
            {open && <div className='collapsible-vertical-tab__items'>
                {item?.subItems?.map((subItem) => {
                    return (
                        <VerticalTabItem className={className} selectedTab={selectedTab} key={subItem?.title} tab={subItem} onClick={() => onSelectItemHandler(subItem?.title)} />
                    )
                })}
            </div>}
        </div>
    )
}
