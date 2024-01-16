import React from 'react';
import { useTabs } from './PrimaryTabs';
import './PrimaryTabList.scss';

type PrimaryTabListProps = {
    list: string[];
};

const PrimaryTabList = ({ list }: PrimaryTabListProps) => {
    const { activeTabIndex, setActiveTabIndex } = useTabs();

    return (
        <div className='derivs-tabs-list' data-list-count={list.length}>
            {list.map((tab, i) => (
                <button
                    className={`derivs-tabs-list-item derivs-tabs-list-item--${
                        i === activeTabIndex ? 'active' : 'disabled'
                    }`}
                    key={i}
                    onClick={() => setActiveTabIndex(i)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default PrimaryTabList;
