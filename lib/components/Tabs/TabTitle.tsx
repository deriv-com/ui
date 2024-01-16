import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import { Text } from '../Text';

export type TabTitleProps = {
    icon?: React.ReactNode;
    index: number;
    isActive?: boolean;
    setSelectedTab: (index: number) => void;
    title: string;
};

const TabTitle: FC<TabTitleProps> = ({ icon, index, isActive, setSelectedTab, title }) => {
    const handleOnClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    return (
        <button
            className={classNames('derivs-tabs__btn', {
                'derivs-tabs__btn--active': isActive,
            })}
            onClick={handleOnClick}
        >
            {icon}
            <Text weight={isActive ? 'bold' : 'normal'}>{title}</Text>
        </button>
    );
};

export default TabTitle;
