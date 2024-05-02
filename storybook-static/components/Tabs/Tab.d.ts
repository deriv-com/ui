import React, { ReactNode } from '../../../node_modules/react';
type TabProps = {
    children?: ReactNode;
    icon?: ReactNode;
    title: string;
    className?: string;
};
declare const Tab: ({ children }: TabProps) => React.JSX.Element;
export default Tab;
