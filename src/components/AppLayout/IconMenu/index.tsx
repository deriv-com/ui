import { ComponentProps, ReactNode } from "react";
import { Tooltip } from "../../Tooltip";
import { MenuItem } from "../MenuItem";
import "./IconMenu.scss";
import clsx from "clsx";

type IconMenuProps = ComponentProps<"div"> & {
    isHoverDisabled?: boolean;
    icon: ReactNode;
    as: ComponentProps<typeof MenuItem>["as"];
    tooltipMesaage: ComponentProps<typeof Tooltip>["message"];
    tooltipClassName?: string;
    tooltipPosition?: ComponentProps<typeof Tooltip>["position"];
    wrapperClassName?: string;
};
export const IconMenu = ({
    isHoverDisabled = false,
    icon,
    as,
    tooltipMesaage,
    tooltipClassName,
    className,
    tooltipPosition = "bottom",
}: IconMenuProps) => {
    return (

            <Tooltip
                message={tooltipMesaage}
                position={tooltipPosition}
                className={clsx(
                    "deriv-app-icon-menu",
                    tooltipClassName,
                )}
                wrapperClassName={clsx("deriv-app-icon-menu__wrapper",className)}
            >
                <MenuItem
                    className="deriv-app-icon-menu__item"
                    disableHover={isHoverDisabled}
                    leftComponent={icon}
                    as={as}
                />
            </Tooltip>
    );
};
