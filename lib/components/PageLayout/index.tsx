import React from 'react';
import { useDevice } from '../../hooks/useDevice';
import './PageLayout.scss';

type PageLayoutProps = {
    left?: JSX.Element;
    right?: JSX.Element;
};

export const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({children, left, right}) => {
    const {isMobile} = useDevice();

    return <div className="page-layout">
        {left && !isMobile && <div className="page-layout__left">{left}</div>}
        {children && <div className="page-layout__content">{children}</div>}
        {right && <div className="page-layout__right">{right}</div>}
    </div>
}