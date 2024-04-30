import { DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon } from "@deriv/quill-icons/Logo";
import "./PlatformSwitcher.scss";
import { PlatformSwitcherButton } from "./PlatformSwitcherButton";
import { PlatformSwitcherItem } from "./PlatformSwitcherItem";

type TPlatformSwitcher = {
    // Icon:
};

export const PlatformSwitcher = () => {
    return (
        <div className="deriv-platform-switcher">
            <PlatformSwitcherButton
                Icon={
                    DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon
                }
            />

            <div className="deriv-platform-switcher-open">
                <div className="deriv-platform-switcher-open__items">
                    <PlatformSwitcherItem
                        Icon={
                            DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon
                        }
                        active
                        href="/"
                        description="A whole new trading experience on a powerful yet easy to use platform."
                    />

                    <a href="">Looking for CFDs? Go to Trader’s Hub</a>
                </div>
            </div>
        </div>
    );
};

PlatformSwitcher.displayName = "PlatformSwitcher";
