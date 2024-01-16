import React, { Children } from 'react';
import { useTabs } from './PrimaryTabs';

const PrimaryTabPanels = ({ children }: React.PropsWithChildren<unknown>) => {
    const { activeTabIndex } = useTabs();

    return (
        <div>
            {Children.map(children, (child, index) => {
                if (index !== activeTabIndex) return undefined;

                return child;
            })}
        </div>
    );
};

export default PrimaryTabPanels;
