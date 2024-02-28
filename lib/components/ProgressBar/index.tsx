import React from 'react';
import './ProgressBar.scss';

type TProps = {
    activeIndex: number;
    count: number;
    onClick?: (index: number) => void;
};

export const ProgressBar: React.FC<TProps> = ({ activeIndex, count, onClick }) => {
    return (
        <div className='progress-bar' role='progressbar'>
            {[...Array(count).keys()].map(idx => {
                const isActive = idx === activeIndex;
                const barClassname = isActive ? 'progress-bar-active' : 'progress-bar-inactive';

                return (
                    <div
                        className={`${barClassname} progress-bar-transition`}
                        key={`progress-bar-${idx}`}
                        onClick={() => onClick?.(idx)}
                    />
                );
            })}
        </div>
    );
};
