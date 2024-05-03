import React from "react"

export const LeftWrapper = ({ children }: React.PropsWithChildren) => {
    return <div className="deriv-header__right">{children}</div>
}



LeftWrapper.displayName = "HeaderLeftWrapper";
