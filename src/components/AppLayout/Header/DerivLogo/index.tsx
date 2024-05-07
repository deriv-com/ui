import { ComponentProps } from "react";
import {
    BrandDerivLogoCoralIcon,
    BrandDerivWordmarkCoralIcon,
} from "@deriv/quill-icons/Logo";

type TDerivLogo = Omit<ComponentProps<"a">, "href" | "target"> & {
    variant?: "default" | "wallets";
};

/**
 * Renders the Deriv logo component.
 * @param {TDerivLogo} props - Props for the DerivLogo component.
 * @param {"default" | "wallets"} [variant="default"] - Specifies the variant of the logo.
 * @param {ComponentProps<"a">} rest - Additional props to be spread onto the wrapper.
 * @returns {JSX.Element} - Rendered Deriv logo component.
 */
export const DerivLogo = ({ variant = "default", ...rest }: TDerivLogo) => (
    <a href="https://deriv.com/" target="_blank" {...rest}>
        {variant == "default" ? (
            <BrandDerivWordmarkCoralIcon
                title="deriv-logo"
                width={48.22}
                height={16}
            />
        ) : (
            <BrandDerivLogoCoralIcon
                title="deriv-wallets-logo"
                width={24}
                height={24}
            />
        )}
    </a>
);

DerivLogo.displayName = "DerivLogo";
