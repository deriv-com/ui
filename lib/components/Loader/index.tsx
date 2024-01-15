import React from 'react';
import classNames from 'classnames';
import './Loader.scss';

type TProps = {
    color?: React.CSSProperties['color'];
    isFullScreen?: boolean;
    className?: string;
};

export const Loader: React.FC<TProps> = ({ color = '#85ACB0', isFullScreen = true, className }) => (
    <div
        className={classNames('wallets-loader', { 'wallets-loader--fullscreen': isFullScreen }, className)}
        data-testid='dt_wallets-loader'
    >
        <span className='wallets-loader__element' role='span' style={{ backgroundColor: color }} />
        <span className='wallets-loader__element' style={{ backgroundColor: color }} />
        <span className='wallets-loader__element' style={{ backgroundColor: color }} />
        <span className='wallets-loader__element' style={{ backgroundColor: color }} />
        <span className='wallets-loader__element' style={{ backgroundColor: color }} />
    </div>
);
