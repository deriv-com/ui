import React from 'react';
import classNames from 'classnames';
import './Loader.scss';

type TProps = {
    color?: React.CSSProperties['color'];
    isFullScreen?: boolean;
};

export const Loader: React.FC<TProps> = ({ color = '#85ACB0', isFullScreen = true }) => (
    <div
        className={classNames('derivs-loader', { 'derivs-loader--fullscreen': isFullScreen })}
        data-testid='dt_derivs-loader'
    >
        <span className='derivs-loader__element' role='span' style={{ backgroundColor: color }} />
        <span className='derivs-loader__element' style={{ backgroundColor: color }} />
        <span className='derivs-loader__element' style={{ backgroundColor: color }} />
        <span className='derivs-loader__element' style={{ backgroundColor: color }} />
        <span className='derivs-loader__element' style={{ backgroundColor: color }} />
    </div>
);
