import { ComponentProps, PropsWithChildren } from "react";

import "./DrawerFooter.scss";
import clsx from "clsx";

type DrawerFooterProps = ComponentProps<"div">;
export const DrawerFooter = ({
    children,
    className,
    ...rest
}: PropsWithChildren<DrawerFooterProps>) => {
    return (
        <div className={clsx("deriv-drawer__footer", className)} {...rest}>
            {children}
        </div>
    );
};

DrawerFooter.displayName = "DrawerFooter";
