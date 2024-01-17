import React, { FC, useCallback } from 'react';
import clsx from 'clsx';
import { Text } from '../Text';

export type TabTitleProps = {
    icon?: React.ReactNode;
    index: number;
    isActive?: boolean;
    setSelectedTab: (index: number) => void;
    title: string;
    className?: string;
    variant: 'primary' | 'secondary';
};

const TabTitle: FC<TabTitleProps> = ({ icon, index, isActive, setSelectedTab, title,className,variant }) => {
    const handleOnClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    const classNameVariants = {
        primary : `derivs-primary-tabs__btn--active`,
        secondary : `derivs-secondary-tabs__btn--active`,
    }

    return (
        <button
            className={clsx(`derivs-${variant + '-'}tabs__btn`,{
                [classNameVariants[variant]] : isActive,
            }, className)}
            onClick={handleOnClick}
        >
            {icon}
            <Text weight={isActive ? 'bold' : 'normal'}>{title}</Text>
        </button>
    );
};

export default TabTitle;
