import React from 'react';
import './layout.scss';

type TLayout = {
    left?: JSX.Element;
    right?: JSX.Element;
};

export const Layout: React.FC<React.PropsWithChildren<TLayout>> = ({children, left, right}) => {
    return <div className="layout">
        <div className="layout__left">{left}</div>
        <div className="layout__content">{children}</div>
        <div className="layout__right">{right}</div>
    </div>
}