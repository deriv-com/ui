import React from 'react';
import { useDevice } from '../../hooks/useDevice';
import './PageLayout.scss';

type TLayout = {
    left?: JSX.Element;
    right?: JSX.Element;
};

export const PageLayout: React.FC<React.PropsWithChildren<TLayout>> = ({children, left, right}) => {
    const {isMobile} = useDevice();

    return <div className="layout">
        {left && !isMobile && <div className="layout__left">{left}</div>}
        {children && <div className="layout__content">{children}</div>}
        {right && <div className="layout__right">{right}</div>}
    </div>
}