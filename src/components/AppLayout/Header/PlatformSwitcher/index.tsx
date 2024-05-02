import { PlatformSwitcherButton } from "./PlatformSwitcherButton";
import { PlatformSwitcherItem } from "./PlatformSwitcherItem";
import { platformsConfig } from "./platformsConfig";
import "./PlatformSwitcher.scss";

export const PlatformSwitcher = () => {
    return (
        <div className="deriv-platform-switcher">
            <PlatformSwitcherButton icon={platformsConfig[3].buttonIcon} />

            <div className="deriv-platform-switcher-open">
                <div className="deriv-platform-switcher-open__wrapper">
                    <div className="deriv-platform-switcher-open__items">
                        {platformsConfig.map(({ description, href, icon }) => (
                            <PlatformSwitcherItem
                                key={description}
                                description={description}
                                href={href}
                                icon={icon}
                                active
                            />
                        ))}
                    </div>

                    <div className="deriv-platform-switcher-open__link">
                        <a href="https://app.deriv.com/appstore/traders-hub">
                            Looking for CFDs? Go to Trader’s Hub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

PlatformSwitcher.displayName = "PlatformSwitcher";
