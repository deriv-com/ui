import React from "react";

export const RightWrapper = ({ children }: React.PropsWithChildren) => {
    return <div className="deriv-header__left">{children}</div>;
};

RightWrapper.displayName = "HeaderRightWrapper";
