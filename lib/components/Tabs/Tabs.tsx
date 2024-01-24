import React, { ReactElement, useState } from 'react';
import TabTitle, { TabTitleProps } from './TabTitle';
import clsx from 'clsx';
import './Tabs.scss';

type TabsProps = {
    children: ReactElement<TabTitleProps>[];
    activeTab?: string;
    wrapperClassName?: string;
    className?: string;
    variant?: 'primary' | 'secondary';
    onChange?: (index: number) => void;
};

const Tabs = ({ children, activeTab, wrapperClassName, className, variant = 'primary', onChange }: TabsProps): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState(activeTab || children[0].props.title);

    return (
        <div className={wrapperClassName}>
            <div className={clsx(`derivs-${variant + '-'}tabs`, className)}>
                {children.map((item, index) => {
                    return (
                        <TabTitle
                            icon={item.props.icon}
                            activeTab={selectedTab}
                            isActive={item.props.title === selectedTab}
                            key={`derivs-${variant + '-'}tab-${item.props.title}`}
                            setSelectedTab={setSelectedTab}
                            title={item.props.title}
                            variant={variant}
                            onChange={()=>onChange?.(index)}
                            className={item.props.className}

                        />
                    )
                })}
            </div>
            {children.find((item) => item.props.title === selectedTab)}
        </div>
    );
};

export default Tabs;
