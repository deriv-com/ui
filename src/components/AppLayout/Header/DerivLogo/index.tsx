import { ComponentProps } from "react";
import {
    BrandDerivLogoCoralIcon,
    BrandDerivWordmarkCoralIcon,
} from "@deriv/quill-icons/Logo";

type TDerivLogo = ComponentProps<"a"> & {
    variant?: "default" | "wallets";
    logoWidth?: number;
    logoHeight?: number;
};

/**
 * Renders the Deriv logo component.
 * @param {"default" | "wallets"} [variant="default"] - Specifies the variant of the logo.
 * @param {number} [logoWidth] - Width of the logo.
 * @param {number} [logoHeight] - Height of the logo.
 * @param {ComponentProps<'a'>} [props] - HTML a tag props.
 * @returns {JSX.Element} - Rendered Deriv logo component.
 */
export const DerivLogo = ({
    variant = "default",
    logoHeight,
    logoWidth,
    ...props
}: TDerivLogo) => (
    <a {...props}>
        {variant == "default" ? (
            <BrandDerivWordmarkCoralIcon
                width={logoWidth ?? 48.22}
                height={logoHeight ?? 16}
            />
        ) : (
            <BrandDerivLogoCoralIcon
                width={logoWidth ?? 24}
                height={logoHeight ?? 24}
            />
        )}
    </a>
);

DerivLogo.displayName = "DerivLogo";
