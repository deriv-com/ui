import React, { FC, ReactElement, useState } from 'react';
import TabTitle, { TabTitleProps } from './TabTitle';
import clsx from 'clsx';
import './Tabs.scss';

type TabsProps = {
    children: ReactElement<TabTitleProps>[];
    preSelectedTab?: number;
    wrapperClassName?: string;
    className?: string;
    variant?: 'primary' | 'secondary';
};

const Tabs: FC<TabsProps> = ({ children, preSelectedTab, wrapperClassName, className, variant='primary' }): JSX.Element => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(preSelectedTab || 0);

    return (
        <div className={wrapperClassName}>
            <div className={clsx(`derivs-${variant+'-'}tabs`,className)}>
                {children.map((item, index) => (
                    <TabTitle
                        icon={item.props.icon}
                        index={index}
                        isActive={index === selectedTabIndex}
                        key={`derivs-${variant+'-'}tab-${item.props.title}`}
                        setSelectedTab={setSelectedTabIndex}
                        title={item.props.title}
                        variant={variant}
                    />
                ))}
            </div>
            {children[selectedTabIndex]}
        </div>
    );
};

export default Tabs;
