import { ComponentProps } from "react";
import clsx from "clsx";
import {
    BrandDerivLogoCoralIcon,
    BrandDerivWordmarkCoralIcon,
} from "@deriv/quill-icons/Logo";
import { TVariant } from "../../LayoutTypes";

import "./DerivLogo.scss";

type TDerivLogo = ComponentProps<"a"> & {
    variant?: TVariant;
};

const logo = {
    default: {
        icon: BrandDerivWordmarkCoralIcon,
        className: "deriv-logo__default",
    },
    wallets: {
        icon: BrandDerivLogoCoralIcon,
        className: "deriv-logo__wallets",
    },
};

export const DerivLogo = ({
    variant = "default",
    className,
    ...props
}: TDerivLogo) => {
    const LogoIcon = logo[variant].icon;

    return (
        <a
            className={clsx(logo[variant].className, className)}
            href="https://deriv.com/"
            target="_blank"
            {...props}
        >
            <LogoIcon />
        </a>
    );
};

DerivLogo.displayName = "DerivLogo";
