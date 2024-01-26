import React from 'react';
import { useDevice } from '../../hooks/useDevice';
import './PageLayout.scss';

type PageLayoutProps = {
    left?: JSX.Element;
    right?: JSX.Element;
};

export const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({children, left, right}) => {
    const {isMobile} = useDevice();

    return <div className="derivs-page-layout">
        {left && !isMobile && <div className="derivs-page-layout__left">{left}</div>}
        {children && <div className="derivs-page-layout__content">{children}</div>}
        {right && <div className="derivs-page-layout__right">{right}</div>}
    </div>
}