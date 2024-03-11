import React, { memo } from "react";
import clsx from "clsx";
import "./VerticalTab.scss";

type VerticalTabProps = {
    className?: string;
};

export const VerticalTab = memo(
    ({ className, children }: React.PropsWithChildren<VerticalTabProps>) => {
        return (
            <div className={clsx("vertical-tab__wrapper", className)}>
                {children}
            </div>
        );
    },
);
