import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Text } from '../Text';

export type TabTitleProps = {
    icon?: React.ReactNode;
    activeTab: string;
    isActive?: boolean;
    setSelectedTab: (title: string) => void;
    title: string;
    className?: string;
    variant: 'primary' | 'secondary';
};

const TabTitle = ({ icon, activeTab, isActive, setSelectedTab, title,className,variant }: TabTitleProps) => {
    const handleOnClick = useCallback((title: string) => {
        setSelectedTab(title);
    }, [setSelectedTab, activeTab]);

    const classNameVariants = {
        primary : `derivs-primary-tabs__btn--active`,
        secondary : `derivs-secondary-tabs__btn--active`,
    }

    return (
        <button
            className={clsx(`derivs-${variant + '-'}tabs__btn`,{
                [classNameVariants[variant]] : isActive,
            }, className)}
            onClick={()=>handleOnClick(title)}
        >
            {icon}
            <Text weight={isActive ? 'bold' : 'normal'}>{title}</Text>
        </button>
    );
};

export default TabTitle;
