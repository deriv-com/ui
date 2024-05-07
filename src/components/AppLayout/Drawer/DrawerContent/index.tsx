import { ComponentProps, PropsWithChildren } from "react";

import "./DrawerContent.scss";
import clsx from "clsx";

type DrawerContentProps = ComponentProps<"div">;
export const DrawerContent = ({
    children,
    className,
    ...rest
}: PropsWithChildren<DrawerContentProps>) => {
    return (
        <div className={clsx("deriv-drawer__content", className)} {...rest}>
            {children}
        </div>
    );
};

DrawerContent.displayName = "DrawerContent";

