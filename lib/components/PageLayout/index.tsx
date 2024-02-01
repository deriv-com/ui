import React from 'react';
import { useDevice } from '../../hooks/useDevice';
import './PageLayout.scss';

type PageLayoutProps = {
    sidebar?: JSX.Element;
};

export const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({children, sidebar}) => {
    const {isMobile} = useDevice();

    return <div className="derivs-page-layout">
        {sidebar && !isMobile && <div className="derivs-page-layout__sidebar">{sidebar}</div>}
        {children && <div className="derivs-page-layout__content">{children}</div>}
    </div>
}